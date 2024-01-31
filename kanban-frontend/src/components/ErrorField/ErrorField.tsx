import React, { ReactNode } from 'react';

const ErrorField = ({
  children,
  type,
}: {
  children?: ReactNode;
  type: 'client' | 'server';
}) => {
  if (type === 'client') return <p className="text-red-500">{children}</p>;

  return (
    <p>
      <em>{children}</em>
    </p>
  );
};

export default ErrorField;
