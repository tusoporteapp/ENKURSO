import React from 'react';

interface EkLogoProps {
  size?: number | string;
  className?: string;
  variant?: 'app' | 'purple' | 'dark-purple' | 'purple-on-white' | 'transparent-white' | 'gold-flat';
  showBackground?: boolean;
}

export const EkLogo: React.FC<EkLogoProps> = ({
  size = 32,
  className = '',
  showBackground = true,
}) => {
  const sizeNum = typeof size === 'number' ? size : Number(size) || 32;

  return (
    <div
      style={{ width: `${sizeNum}px`, height: `${sizeNum}px` }}
      className={`relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-xl ${
        showBackground ? 'bg-black shadow-2xs' : ''
      } ${className}`}
    >
      <img
        src="/logo_ek.jpg"
        alt="EnKurso EK Logo"
        className="w-full h-full object-cover select-none pointer-events-none"
        loading="eager"
      />
    </div>
  );
};
