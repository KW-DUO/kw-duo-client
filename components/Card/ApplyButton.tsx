import { useRouter } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const ApplyButton = () => {
  const router = useRouter(); // 페이지 이동
  const { t } = useTranslation();
  const handleApplyButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/messages');
  };
  return (
    <button
      onClick={handleApplyButtonClick}
      className="text-sm px-4 py-2 bg-yellow-400 rounded-3xl "
    >
      {t('button.apply')}
    </button>
  );
};
