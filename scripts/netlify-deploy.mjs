#!/usr/bin/env node
// Netlify deploy script using the Netlify API with file digest method
import { readFileSync, readdirSync, statSync, createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join, relative } from 'path';
import https from 'https';

const TOKEN = 'nfc_d9EKkkm2XEBmesrqPnBZAE49MV5WLnPTce1c';
const SITE_ID = 'e50db00d-35d4-486f-9c53-c69a1d38cc8b';
const DIST_DIR = '/home/user/site/dist';

function sha1File(filePath) {
  const content = readFileSync(filePath);
  return createHash('sha1').update(content).digest('hex');
}

function getAllFiles(dir, baseDir = dir) {
  const files = {};
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      Object.assign(files, getAllFiles(fullPath, baseDir));
    } else {
      const relPath = '/' + relative(baseDir, fullPath);
      files[relPath] = sha1File(fullPath);
    }
  }
  return files;
}

function apiRequest(method, path, body, extraHeaders = {}) {
  return new Promise((resolve, reject) => {
    const bodyStr = body ? JSON.stringify(body) : null;
    const options = {
      hostname: 'api.netlify.com',
      path: `/api/v1${path}`,
      method,
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        ...extraHeaders,
        ...(bodyStr ? { 'Content-Length': Buffer.byteLength(bodyStr) } : {}),
      },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, body: data }); }
      });
    });
    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

function uploadFile(deployId, sha1, filePath) {
  return new Promise((resolve, reject) => {
    const content = readFileSync(filePath);
    const options = {
      hostname: 'api.netlify.com',
      path: `/api/v1/deploys/${deployId}/files${filePath.replace(DIST_DIR, '')}`,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/octet-stream',
        'Content-Length': content.length,
      },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode }));
    });
    req.on('error', reject);
    req.write(content);
    req.end();
  });
}

async function deploy() {
  console.log('📦 Collecting files from dist/...');
  const files = getAllFiles(DIST_DIR);
  const fileCount = Object.keys(files).length;
  console.log(`   Found ${fileCount} files`);

  console.log('🚀 Creating deploy on Netlify...');
  const deployRes = await apiRequest('POST', `/sites/${SITE_ID}/deploys`, { files, draft: false });
  
  if (deployRes.status !== 200 && deployRes.status !== 201) {
    console.error('❌ Failed to create deploy:', JSON.stringify(deployRes.body, null, 2));
    process.exit(1);
  }

  const { id: deployId, required, ssl_url, deploy_url } = deployRes.body;
  console.log(`   Deploy ID: ${deployId}`);
  console.log(`   Files required to upload: ${required ? required.length : 0}`);

  if (required && required.length > 0) {
    // Build sha1 -> filepath map
    const sha1ToPath = {};
    for (const [relPath, sha1] of Object.entries(files)) {
      sha1ToPath[sha1] = join(DIST_DIR, relPath);
    }

    console.log(`⬆️  Uploading ${required.length} files...`);
    let uploaded = 0;
    for (const sha1 of required) {
      const filePath = sha1ToPath[sha1];
      if (!filePath) { console.warn(`   Skipping unknown sha1: ${sha1}`); continue; }
      const relPath = filePath.replace(DIST_DIR, '');
      process.stdout.write(`   [${++uploaded}/${required.length}] ${relPath}\r`);
      await uploadFile(deployId, sha1, filePath);
    }
    console.log(`\n✅ Uploaded ${uploaded} files`);
  } else {
    console.log('   All files already cached — no uploads needed!');
  }

  // Poll for deploy to be ready
  console.log('⏳ Waiting for deploy to go live...');
  let state = deployRes.body.state;
  let attempts = 0;
  while (state !== 'ready' && state !== 'error' && attempts < 30) {
    await new Promise(r => setTimeout(r, 3000));
    const statusRes = await apiRequest('GET', `/deploys/${deployId}`);
    state = statusRes.body.state;
    const liveUrl = statusRes.body.ssl_url || statusRes.body.deploy_url;
    process.stdout.write(`   State: ${state}...    \r`);
    attempts++;
    if (state === 'ready') {
      console.log(`\n\n🎉 DEPLOYED SUCCESSFULLY!`);
      console.log(`🌐 Live URL: ${liveUrl}`);
      break;
    }
  }

  if (state === 'error') {
    console.error('\n❌ Deploy failed with error state');
    process.exit(1);
  }
  if (attempts >= 30) {
    console.log('\n⚠️  Timed out waiting for deploy. Check Netlify dashboard.');
  }
}

deploy().catch(err => {
  console.error('❌ Deploy error:', err);
  process.exit(1);
});
