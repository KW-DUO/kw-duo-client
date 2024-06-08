'use client';

import { useContext } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';
import { apiUrl } from '@/constant/api';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { client } from './../../util/HttpClient';
import useRequireAuth from '@/hooks/useRequireAuth';
import LoginStep from '../Login/LoginStep/LoginStep';

const postApply = async (postId: number) => {
  return await client.fetch(`/apply/${postId}`, 'POST');
};

export const ApplicationButton = () => {
  const post = useContext(PostDetailContext);
  const router = useRouter();
  const { t } = useTranslation();
  const { requireAuth, isLoginModalOpen, handleCloseModal } = useRequireAuth();

  const onClickApply = async () => {
    if (!post) {
      alert(t('button.loadingPost'));
      return;
    }
    await postApply(post?.id);
    router.push(`/messages`);
  };

  // 로그인되어있는지 확인
  const handleApplyClick = () => {
    requireAuth(onClickApply);
  };

  return (
    <>
      <button
        onClick={handleApplyClick}
        className="w-full h-[70px] bg-secondary rounded text-white font-bold text-2xl mb-14"
      >
        {t('button.apply')}
      </button>
      {isLoginModalOpen && <LoginStep onClose={handleCloseModal} />}
    </>
  );
};
