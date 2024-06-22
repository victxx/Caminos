// components/ui/avatar.tsx
import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback }) => {
  return (
    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
      {src ? (
        <img className="w-full h-full rounded-full" src={src} alt={alt || 'Avatar'} />
      ) : (
        <span className="text-lg font-bold">{fallback}</span>
      )}
    </div>
  );
};

export const AvatarImage: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => (
  <img className="w-full h-full rounded-full" src={src} alt={alt || 'Avatar'} />
);

export const AvatarFallback: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-lg font-bold">{children}</span>
);
