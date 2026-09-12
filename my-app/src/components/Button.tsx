import { Link } from 'react-router-dom';
import React from 'react';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function Button({ to, onClick, children, className = '', disabled = false }: ButtonProps) {
  const baseClass = inline-block bg-[#00f5c8] text-[#050816] py-[12px] px-[30px] font-bold rounded-[30px] transition-all duration-250 border-none text-center uppercase tracking-[1px] shadow-[0_0_30px_rgba(0,245,200,0.25)] hover:bg-[#00ddb3] hover:-translate-y-[3px] hover:shadow-[0_0_25px_rgba(0,210,138,0.8)] ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className};

  if (to) {
    return <Link to={to} className={baseClass}>{children}</Link>;
  }

  return (
    <button onClick={onClick} disabled={disabled} className={baseClass}>
      {children}
    </button>
  );
}