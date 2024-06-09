import useRequireAuth from '@/hooks/useRequireAuth';
import { useAuthInfo } from '@/hooks/useAuthInfo';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LoginStep from '../Login/LoginStep/LoginStep';

export const ApplyButton = () => {
  const router = useRouter(); // 페이지 이동

  const { t } = useTranslation();
  const { requireAuth, isLoginModalOpen, handleCloseModal } = useRequireAuth();
  const handleApplyButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 이벤트 전파 막기
    requireAuth(() => {
      router.push('/messages');
    });
  };
  return (
    <>
      <button
        onClick={handleApplyButtonClick}
        className="text-sm px-4 py-2 bg-yellow-400 rounded-3xl "
      >
        {t('button.apply')}
      </button>
      {isLoginModalOpen && <LoginStep onClose={handleCloseModal} />}
    </>
  );
};
