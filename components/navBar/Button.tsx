import React from 'react';

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button className="flex justify-between items-center border rounded-3xl px-5" onClick={onClick}>
      {children}
    </button>
  );
};
