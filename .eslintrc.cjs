module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'coverage', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unescaped-entities': 'off',
    // React Three Fiber uses custom JSX props (position, rotation, args, etc.)
    // that are valid Three.js object properties — not standard HTML attributes.
    'react/no-unknown-property': ['error', {
      ignore: [
        'position', 'rotation', 'scale', 'args', 'attach',
        'castShadow', 'receiveShadow', 'intensity', 'color',
        'roughness', 'metalness', 'transparent', 'opacity',
        'side', 'map', 'envMap', 'geometry', 'material',
        'object', 'dispose', 'fog', 'near', 'far', 'fov',
        'up', 'target', 'angle', 'penumbra', 'decay',
        'depthWrite', 'depthTest', 'wireframe', 'visible',
        'userData', 'frustumCulled', 'renderOrder',
        'flatShading', 'vertexColors', 'toneMapped',
        'emissive', 'emissiveIntensity', 'emissiveMap',
        'transmission', 'thickness', 'attenuationColor', 'attenuationDistance',
        'clearcoat', 'clearcoatRoughness', 'iridescence', 'iridescenceIOR',
        'vertexShader', 'fragmentShader', 'uniforms',
        'shadow-mapSize', 'shadow-camera-far', 'shadow-camera-near',
        'shadow-camera-left', 'shadow-camera-right',
        'shadow-camera-top', 'shadow-camera-bottom',
      ]
    }],
  },
}
