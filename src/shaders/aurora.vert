uniform float time;
varying vec2 vUv;
varying float vDisplacement;

void main() {
  vUv = uv;
  float displacement = sin(position.x * 2.0 + time) * 0.3;
  vDisplacement = displacement;
  
  vec3 newPosition = position;
  newPosition.y += displacement;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
