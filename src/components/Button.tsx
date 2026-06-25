import React from 'react';

type Variant = 'primary' | 'secondary' | 'danger';
type Size = 'sm' | 'md' | 'lg';

const variantStyles: Record<Variant, string> = {
  primary:   'btn btn-primary',
  secondary: 'btn btn-secondary',
  danger:    'btn btn-danger',
};

const sizeStyles: Record<Size, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}) => {
  const classes = `${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

export default Button;