import { useRouter } from 'next/navigation';
import React from 'react';

export const ApplyButton = () => {
  const router = useRouter();
  const handleApplyButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/messages');
  };
  return <button
            onClick={handleApplyButtonClick}
            className="text-sm px-4 py-2 bg-yellow-400 rounded-3xl "
          >
            지원하기
          </button>;
};
