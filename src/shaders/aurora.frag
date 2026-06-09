uniform vec3 color1;
uniform vec3 color2;
varying vec2 vUv;
varying float vDisplacement;

void main() {
  float factor = (vDisplacement + 0.3) / 0.6;
  vec3 finalColor = mix(color1, color2, clamp(factor, 0.0, 1.0));
  float alpha = smoothstep(0.0, 0.5, vUv.y) * smoothstep(1.0, 0.5, vUv.y);
  gl_FragColor = vec4(finalColor, alpha * 0.4);
}
