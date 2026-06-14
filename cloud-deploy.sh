#!/bin/bash

# Configuration
PROJECT_ID="projects-for-deployment"
REGION="us-central1"
SERVICE_NAME="carbonsync"

echo "🚀 Starting Google Cloud Deployment for $SERVICE_NAME..."

# 1. Set project
gcloud config set project $PROJECT_ID

# 2. Enable APIs (Requires Billing)
echo "📦 Enabling required APIs..."
gcloud services enable run.googleapis.com \
    artifactregistry.googleapis.com \
    cloudbuild.googleapis.com

# 3. Create Artifact Registry repository
echo "🏗️ Creating Artifact Registry..."
gcloud artifacts repositories create $SERVICE_NAME-repo \
    --repository-format=docker \
    --location=$REGION \
    --description="Docker repository for CarbonSync" || true

# 4. Build and Push using Cloud Build
echo "🏗️ Building container image..."
gcloud builds submit --config cloudbuild.yaml \
    --substitutions=_REGION=$REGION,_PROJECT_ID=$PROJECT_ID,_SERVICE_NAME=$SERVICE_NAME,_VITE_FIREBASE_API_KEY=$VITE_FIREBASE_API_KEY,_VITE_FIREBASE_AUTH_DOMAIN=$VITE_FIREBASE_AUTH_DOMAIN,_VITE_FIREBASE_PROJECT_ID=$VITE_FIREBASE_PROJECT_ID,_VITE_FIREBASE_STORAGE_BUCKET=$VITE_FIREBASE_STORAGE_BUCKET,_VITE_FIREBASE_MESSAGING_SENDER_ID=$VITE_FIREBASE_MESSAGING_SENDER_ID,_VITE_FIREBASE_APP_ID=$VITE_FIREBASE_APP_ID .

# 5. Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
    --image $REGION-docker.pkg.dev/$PROJECT_ID/$SERVICE_NAME-repo/$SERVICE_NAME \
    --platform managed \
    --region $REGION \
    --allow-unauthenticated

echo "✅ Deployment complete!"
gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format 'value(status.url)'
