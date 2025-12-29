import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withIcon = true,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 uppercase font-display";
  
  const variants = {
    primary: "bg-white text-black hover:bg-zairo-accent hover:text-white",
    outline: "border border-white/20 text-white hover:bg-white hover:text-black",
    ghost: "text-zairo-muted hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};