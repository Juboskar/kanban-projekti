import React, { ChangeEventHandler, forwardRef } from 'react';
import RequiredAsterisk from '../RequiredAsterisk';

interface TextInputProps {
  label?: string;
  name?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: ChangeEventHandler<HTMLInputElement>;
  type?: 'text' | 'password' | 'email';
  required?: boolean;
}
const TextInput = forwardRef(
  ({ label, name, onChange, onBlur, type, required }: TextInputProps, ref) => {
    return (
      <div className="p-4">
        <div className="group relative">
          <label>
            <input
              name={name}
              ref={ref as any}
              type={type ? type : 'text'}
              className="peer w-full rounded border-2 border-black p-2"
              onChange={onChange}
              onBlur={onBlur}
              placeholder=" "
            />
            <span
              className="text-md pointer-events-none absolute left-3 top-2.5 
              text-gray-400 transition peer-focus:-translate-y-6 
              peer-focus:bg-white peer-focus:px-1 peer-focus:pt-1 
              peer-focus:text-sm peer-focus:text-black
              peer-[:not(:placeholder-shown)]:-translate-y-6  
              peer-[:not(:placeholder-shown)]:bg-white 
              peer-[:not(:placeholder-shown)]:px-1 
              peer-[:not(:placeholder-shown)]:pt-1 
              peer-[:not(:placeholder-shown)]:text-sm 
              peer-[:not(:placeholder-shown)]:text-black"
            >
              {label}
              {required && <RequiredAsterisk />}
            </span>
          </label>
        </div>
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
export default TextInput;
