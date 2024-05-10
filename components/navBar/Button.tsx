import { useProject } from '@/context/ProjectContext';
import React from 'react';

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const Button = ({ children, onClick }: Props) => {
  const { bookmarkOnly } = useProject();
  return (
    <button
      type="button"
      className={`flex justify-between items-center rounded-3xl px-5 border
                  ${bookmarkOnly && 'border-orange-400 text-orange-400'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
