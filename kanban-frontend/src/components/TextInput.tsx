import React, { ChangeEventHandler } from 'react';

interface TextInputProps {
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
}
const TextInput = ({ placeholder, value, onChange, type }: TextInputProps) => {
  if (!type) {
    type = 'text';
  }

  return (
    <div className="p-4">
      <div className="group relative">
        <label>
          <input
            type={type}
            className="peer w-full rounded border-2 border-black p-2"
            value={value}
            onChange={onChange}
          />
          <span
            className="text-md pointer-events-none absolute left-3 top-2.5 text-gray-600 
            transition ease-linear peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:px-1 peer-focus:pt-1 
            peer-focus:text-sm peer-[:not([value=''])]:-translate-y-6  peer-[:not([value=''])]:bg-white 
            peer-[:not([value=''])]:px-1 peer-[:not([value=''])]:pt-1 peer-[:not([value=''])]:text-sm"
          >
            {placeholder}
          </span>
        </label>
      </div>
    </div>
  );
};

export default TextInput;
