import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

const YouthModifier = () => (
  <g fill="currentColor" stroke="none">
    <circle cx="19" cy="20" r="1" />
    <circle cx="22" cy="20" r="1" />
  </g>
);

export const ReikiIcon = ({ className = "w-8 h-8", size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 10c4-2 12-2 16 0" opacity="0.4" />
    <path d="M4 14c4-2 12-2 16 0" />
  </svg>
);

export const YouthReikiIcon = ({ className = "w-8 h-8", size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 10c4-2 12-2 16 0" opacity="0.4" />
    <path d="M4 14c4-2 12-2 16 0" />
    <YouthModifier />
  </svg>
);

export const AngelIcon = ({ className = "w-8 h-8", size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <ellipse cx="12" cy="7" rx="5" ry="1.5" />
    <path d="M12 12v2" opacity="0.4" />
    <path d="M12 17l0.5 1L14 18.5l-1.5 0.5L12 20.5l-0.5-1.5L10 18.5l1.5-0.5z" strokeWidth="1" fill="currentColor" />
  </svg>
);

export const YouthAngelIcon = ({ className = "w-8 h-8", size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <ellipse cx="12" cy="7" rx="5" ry="1.5" />
    <path d="M12 12v2" opacity="0.4" />
    <path d="M12 17l0.5 1L14 18.5l-1.5 0.5L12 20.5l-0.5-1.5L10 18.5l1.5-0.5z" strokeWidth="1" fill="currentColor" />
    <YouthModifier />
  </svg>
);

export const ShirtIcon = ({ className = "w-8 h-8", size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 4h-3.5L15 2h-6L7.5 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
  </svg>
);

export const RelaxationIcon = ({ className = "w-8 h-8", size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 10c4 2 8 2 12 0" />
    <path d="M7 14c3.5 1.5 6.5 1.5 10 0" opacity="0.6" />
    <path d="M9 18c2 1 4 1 6 0" opacity="0.3" />
  </svg>
);

export const SafeSpaceIcon = ({ className = "w-8 h-8", size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
