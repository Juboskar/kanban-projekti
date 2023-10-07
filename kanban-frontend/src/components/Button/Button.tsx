import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <div className="p-4">
      <button
        className=" hover rounded border-2 border-black p-2 text-black 
          transition ease-in-out hover:scale-110 hover:bg-gray-200 
          hover:shadow-md hover:shadow-gray-500"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
