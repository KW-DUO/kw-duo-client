'use client';

import { useContext, useState } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';
import { apiUrl } from '@/constant/api';
import { useTranslation } from 'react-i18next';
import ConfirmationModal from '../modal/ConfirmationModal';

export const PostCloseButton = () => {
  const post = useContext(PostDetailContext);
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const postClose = async () => {
    if (!post) {
      throw new Error('post 데이터 없음');
    }
    const url = apiUrl + `/posts/${post.id}/close`;
    const response = await fetch(url, { method: 'POST' });

    if (!response.ok) {
      throw new Error(t('button.closeRecruitmentError'));
    }
  };

  const onClickClose = async () => {
    if (!post) {
      alert(t('button.loadingPost'));
      return;
    }

    try {
      await postClose();
      alert(t('button.postClosed', { postId: post.id }));
      setIsModalOpen(false);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleConfirmClose = () => {
    onClickClose();
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full h-[70px] bg-secondary rounded text-white font-bold text-2xl mb-14"
      >
        {t('button.closeRecruitment')}
      </button>
      <ConfirmationModal
        isOpen={isModalOpen}
        title={t('editToolbar.confirmClose')}
        message={t('editToolbar.confirmCloseMessage')}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmClose}
      />
    </>
  );
};
