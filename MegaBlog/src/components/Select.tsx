import React, { useId, forwardRef } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  label?: React.ReactNode | string;
  className?: string;
  [key: string]: any;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  options,
  label,
  className = '',
  ...props
}, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="inline-block mb-1 pl-1">{label as React.ReactNode}</label>}
      <select
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      >
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
});

export default React.forwardRef(Select);