precision mediump float;

varying vec2 vUv;
varying float vWave;

uniform float uTime;

#pragma glslify: snois3 = require(glsl-noise/simplex/3d);

void main() {
vUv = uv;
vec3 pos = position;
float noiseFreq = 2.0;
float noiseAmp = 0.1;
vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z) * 0.5;
pos.z += snois3(noisePos) * noiseAmp;
vWave = pos.z;
gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}