import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    bgColor?: string;
    textColor?: string;
    className?: string;
    [key: string]: unknown;
}

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button