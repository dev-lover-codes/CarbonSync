uniform vec3 glowColor;
uniform float intensity;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);
  
  // Fresnel glow formula
  float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
  
  gl_FragColor = vec4(glowColor * intensity * fresnel, fresnel);
}
