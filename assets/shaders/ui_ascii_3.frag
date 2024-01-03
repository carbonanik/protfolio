// referenced the method of bitmap of iq : https://www.shadertoy.com/view/4dfXWj

#version 460 core

#include "common/common.glsl"
#include <flutter/runtime_effect.glsl>

uniform vec2 uResolution;
uniform float uTime;
uniform sampler2D uTex;

out vec4 oColor;


#define zoom 1.

#define P(id,a,b,c,d,e,f,g,h) if( id == int(pos.y) ){ int pa = a+2*(b+2*(c+2*(d+2*(e+2*(f+2*(g+2*(h))))))); cha = floor(mod(float(pa)/pow(2.,float(pos.x)-1.),2.)); }

float gray(vec3 _i)
{
    return _i.x*0.299+_i.y*0.587+_i.z*0.114;
}

void main()
{
    vec2 fragCoord = vec2(FlutterFragCoord().xy);
    vec2 uv = vec2(floor(fragCoord.x/8./zoom)*8.*zoom,floor(fragCoord.y/12./zoom)*12.*zoom)/uResolution;
    ivec2 pos = ivec2(mod(fragCoord.x/zoom,8.),mod(fragCoord.y/zoom,12.));
    vec4 tex = texture(uTex,uv);
    float cha = 0.;

    float g = gray(tex.xyz);
    if( g < .125 )
    {
        P(11,0,0,0,0,0,0,0,0);
P(10,0,0,0,0,0,0,0,0);
P(9,0,0,0,0,0,0,0,0);
P(8,0,0,0,0,0,0,0,0);
P(7,0,0,0,0,0,0,0,0);
P(6,0,0,0,0,0,0,0,0);
P(5,0,0,0,0,0,0,0,0);
P(4,0,0,0,0,0,0,0,0);
P(3,0,0,0,0,0,0,0,0);
P(2,0,0,0,0,0,0,0,0);
P(1,0,0,0,0,0,0,0,0);
P(0,0,0,0,0,0,0,0,0);
}
else if( g < .25 ) // .
{
    P(11,0,0,0,0,0,0,0,0);
P(10,0,0,0,0,0,0,0,0);
P(9,0,0,0,0,0,0,0,0);
P(8,0,0,0,0,0,0,0,0);
P(7,0,0,0,0,0,0,0,0);
P(6,0,0,0,0,0,0,0,0);
P(5,0,0,0,0,0,0,0,0);
P(4,0,0,0,1,1,0,0,0);
P(3,0,0,0,1,1,0,0,0);
P(2,0,0,0,0,0,0,0,0);
P(1,0,0,0,0,0,0,0,0);
P(0,0,0,0,0,0,0,0,0);
}
else if( g < .375 ) // ,
{
    P(11,0,0,0,0,0,0,0,0);
P(10,0,0,0,0,0,0,0,0);
P(9,0,0,0,0,0,0,0,0);
P(8,0,0,0,0,0,0,0,0);
P(7,0,0,0,0,0,0,0,0);
P(6,0,0,0,0,0,0,0,0);
P(5,0,0,0,0,0,0,0,0);
P(4,0,0,0,1,1,0,0,0);
P(3,0,0,0,1,1,0,0,0);
P(2,0,0,0,0,1,0,0,0);
P(1,0,0,0,1,0,0,0,0);
P(0,0,0,0,0,0,0,0,0);
}
else if( g < .5 ) // -
{
    P(11,0,0,0,0,0,0,0,0);
P(10,0,0,0,0,0,0,0,0);
P(9,0,0,0,0,0,0,0,0);
P(8,0,0,0,0,0,0,0,0);
P(7,0,0,0,0,0,0,0,0);
P(6,1,1,1,1,1,1,1,0);
P(5,0,0,0,0,0,0,0,0);
P(4,0,0,0,0,0,0,0,0);
P(3,0,0,0,0,0,0,0,0);
P(2,0,0,0,0,0,0,0,0);
P(1,0,0,0,0,0,0,0,0);
P(0,0,0,0,0,0,0,0,0);
}
else if(g < .625 ) // +
{
    P(11,0,0,0,0,0,0,0,0);
P(10,0,0,0,0,0,0,0,0);
P(9,0,0,0,1,0,0,0,0);
P(8,0,0,0,1,0,0,0,0);
P(7,0,0,0,1,0,0,0,0);
P(6,1,1,1,1,1,1,1,0);
P(5,0,0,0,1,0,0,0,0);
P(4,0,0,0,1,0,0,0,0);
P(3,0,0,0,1,0,0,0,0);
P(2,0,0,0,0,0,0,0,0);
P(1,0,0,0,0,0,0,0,0);
P(0,0,0,0,0,0,0,0,0);
}
else if(g < .75 ) // *
{
    P(11,0,0,0,0,0,0,0,0);
P(10,0,0,0,1,0,0,0,0);
P(9,1,0,0,1,0,0,1,0);
P(8,0,1,0,1,0,1,0,0);
P(7,0,0,1,1,1,0,0,0);
P(6,0,0,0,1,0,0,0,0);
P(5,0,0,1,1,1,0,0,0);
P(4,0,1,0,1,0,1,0,0);
P(3,1,0,0,1,0,0,1,0);
P(2,0,0,0,1,0,0,0,0);
P(1,0,0,0,0,0,0,0,0);
P(0,0,0,0,0,0,0,0,0);
}
else if(g < .875 ) // #
{
    P(11,0,0,0,0,0,0,0,0);
P(10,0,0,1,0,0,1,0,0);
P(9,0,0,1,0,0,1,0,0);
P(8,1,1,1,1,1,1,1,0);
P(7,0,0,1,0,0,1,0,0);
P(6,0,0,1,0,0,1,0,0);
P(5,0,1,0,0,1,0,0,0);
P(4,0,1,0,0,1,0,0,0);
P(3,1,1,1,1,1,1,1,0);
P(2,0,1,0,0,1,0,0,0);
P(1,0,1,0,0,1,0,0,0);
P(0,0,0,0,0,0,0,0,0);
}
else // @
{
P(11,0,0,0,0,0,0,0,0);
P(10,0,0,1,1,1,1,0,0);
P(9,0,1,0,0,0,0,1,0);
P(8,1,0,0,0,1,1,1,0);
P(7,1,0,0,1,0,0,1,0);
P(6,1,0,0,1,0,0,1,0);
P(5,1,0,0,1,0,0,1,0);
P(4,1,0,0,1,0,0,1,0);
P(3,1,0,0,1,1,1,1,0);
P(2,0,1,0,0,0,0,0,0);
P(1,0,0,1,1,1,1,1,0);
P(0,0,0,0,0,0,0,0,0);
}

vec3 col = tex.xyz/max(tex.x,max(tex.y,tex.z));
oColor = vec4(cha*col,0.);
}