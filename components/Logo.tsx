import React from 'react';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string; 
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "w-24 h-24", 
  style,
  color = "black"
}) => {
  const mainColor = color;
  const isWhite = mainColor === 'white' || mainColor === '#fff' || mainColor === '#ffffff';
  const textInBandColor = isWhite ? 'black' : 'white';

  return (
    <svg viewBox="0 0 200 200" className={className} style={style} xmlns="http://www.w3.org/2000/svg" aria-label="Join The Circle Logo">
      <defs>
        {/* Top arc for "Join The Circle" */}
        <path id="curveTop" d="M 20,105 A 80,80 0 0,1 180,105" fill="none" />
        {/* Bottom arc for banner text - curves downward, left to right */}
        <path id="curveBottomText" d="M 25,100 A 75,75 0 0,0 175,100" fill="none" />
      </defs>

      {/* White Background Circle */}
      <circle cx="100" cy="100" r="98" fill="white" />

      {/* Center Circle */}
      <circle cx="100" cy="100" r="52" fill={mainColor} />

      {/* Top Text - Join The Circle */}
      <text 
        fill={mainColor} 
        strokeWidth="0.8" 
        fontSize="21" 
        fontWeight="900" 
        letterSpacing="2" 
        textAnchor="middle" 
        fontFamily="sans-serif"
        style={{ textTransform: 'uppercase' }}
      >
        <textPath xlinkHref="#curveTop" startOffset="50%">
          Join The Circle
        </textPath>
      </text>

      {/* Bottom Rocker/Band - flipped to bottom */}
      <path d="M 10,100 A 90,90 0 0,0 190,100 L 160,100 A 60,60 0 0,1 40,100 Z" fill={mainColor} />

      {/* Bottom Text (contrasting color inside band) */}
      <text 
        fill={textInBandColor} 
        fontSize="11" 
        fontWeight="800" 
        letterSpacing="0.5" 
        textAnchor="middle" 
        dominantBaseline="middle"
        fontFamily="sans-serif"
        style={{ textTransform: 'uppercase' }}
      >
        <textPath xlinkHref="#curveBottomText" startOffset="50%" dy="3">
          Stop The Hate of Black People
        </textPath>
      </text>
    </svg>
  );
};

export const AHGLogo: React.FC<{ className?: string, color?: string }> = ({ className = "h-12", color = "black" }) => (
  <svg viewBox="0 0 450 150" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* AHG Box */}
    <rect x="5" y="5" width="140" height="140" fill="none" stroke={color} strokeWidth="6" />
    <text x="75" y="115" textAnchor="middle" fill={color} style={{ fontSize: '85px', fontWeight: '900', fontFamily: 'Impact, sans-serif' }}>AHG</text>

    {/* Text Side */}
    <text x="160" y="45" fill={color} style={{ fontSize: '42px', fontWeight: '900', fontFamily: 'Impact, sans-serif', textTransform: 'uppercase' }}>ALTA</text>
    <text x="160" y="90" fill={color} style={{ fontSize: '42px', fontWeight: '900', fontFamily: 'Impact, sans-serif', textTransform: 'uppercase' }}>HUMANITARIAN</text>
    <text x="160" y="135" fill={color} style={{ fontSize: '42px', fontWeight: '900', fontFamily: 'Impact, sans-serif', textTransform: 'uppercase' }}>GROUP</text>
  </svg>
);

export const StaticLogo = Logo;