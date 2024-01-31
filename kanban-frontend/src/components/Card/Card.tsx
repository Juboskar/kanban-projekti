import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div
      className="m-auto max-w-sm rounded-lg border-2 border-gray-600 bg-white 
      p-6"
    >
      {children}
    </div>
  );
};

export default Card;
