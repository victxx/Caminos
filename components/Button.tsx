// components/Button.tsx
import React from 'react';

interface ButtonProps {
  variant: 'ghost' | 'solid';
  size: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, size, className, children }) => {
  return (
    <button className={`${variant} ${size} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
