export const vertexShader = `
attribute vec4 star;
attribute float angularVelocity;
uniform float time;
uniform bool isNightTheme;
varying float alpha;

vec3 getPosition(vec4 starIn, float nt) {
  float comega = cos(starIn[2]);
  float cnti = cos(nt + starIn[3]);
  float somega = sin(starIn[2]);
  float snti = sin(nt + starIn[3]);
  float ci = cos(starIn[1]);
  float si = sin(starIn[1]);

  float x = starIn[0] * (cnti * comega - snti * ci * somega);
  float y = starIn[0] * (cnti * somega + snti * ci * comega);
  float z = starIn[0] * (snti * si);

  return vec3(x, y, z);
}

void main() {
  vec3 myPosition = getPosition(star, angularVelocity * time);
  vec4 mvPosition = modelViewMatrix * vec4( myPosition, 1.0 );

  float fogFactor = smoothstep( 1., 70., - mvPosition.z );
  gl_PointSize = 1. / pow(fogFactor * 20. + 1., 3. ) * 20. + 3.;
  alpha = ( 1. - fogFactor ) * .8;

  gl_Position = projectionMatrix * mvPosition;
}`

export const fragmentShader = `
uniform vec3 starColor;
varying float alpha;

void main() {
  // makes the points round
  float cr = length( gl_PointCoord - vec2( 0.5, 0.5 ) ) / 0.5;
  if (cr > 1.0) discard;

  gl_FragColor = vec4( starColor, alpha );
}`
