// components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'ghost' | 'default';
  size?: 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'default', size = 'lg', className = '', onClick }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
  const variantStyles = variant === 'ghost' ? 'bg-muted-foreground' : 'bg-[#ff6347] text-white hover:bg-[#ff6347]/90';
  const sizeStyles = size === 'sm' ? 'px-3 py-1' : 'px-4 py-2';

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
