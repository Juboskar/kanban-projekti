import React, { ChangeEventHandler } from 'react';
import RequiredAsterisk from '../RequiredAsterisk';

interface TextInputProps {
  label?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  required?: boolean;
}
const TextInput = ({
  label,
  value,
  onChange,
  type,
  required,
}: TextInputProps) => {
  if (!type) {
    type = 'text';
  }

  return (
    <div className="p-4">
      <div className="group relative">
        <label>
          <input
            required={required}
            type={type}
            className="peer w-full rounded border-2 border-black p-2"
            value={value}
            onChange={onChange}
          />
          <span
            className="text-md pointer-events-none absolute left-3 top-2.5 
              text-gray-400 transition peer-focus:-translate-y-6 
              peer-focus:bg-white peer-focus:px-1 peer-focus:pt-1 
              peer-focus:text-sm peer-focus:text-black 
              peer-[:not([value=''])]:-translate-y-6  
              peer-[:not([value=''])]:bg-white  peer-[:not([value=''])]:px-1 
              peer-[:not([value=''])]:pt-1 peer-[:not([value=''])]:text-sm 
              peer-[:not([value=''])]:text-black"
          >
            {label}
            {required && <RequiredAsterisk />}
          </span>
        </label>
      </div>
    </div>
  );
};

export default TextInput;
