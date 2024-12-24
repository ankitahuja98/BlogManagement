import React from 'react';

export const FormInput = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  multiline = false,
}) => {
  const inputClasses = `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    error ? 'border-red-500' : 'border-gray-300'
  }`;

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={onChange}
          className={`${inputClasses} min-h-[100px]`}
          required={required}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={inputClasses}
          required={required}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};