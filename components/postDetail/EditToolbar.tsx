'use client';
import { PostDetailContext } from '@/components/postDetail/store';
import { apiUrl } from '@/constant/api';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ConfirmationModal from './../modal/ConfirmationModal';

export const EditToolbar = () => {
  const post = useContext(PostDetailContext);
  const router = useRouter();
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getApiUrl = (postType: string, postId: number) => {
    switch (postType) {
      case 'FIND_TEAMMATE':
        return `${apiUrl}/posts/find-teammate/${postId}`;
      case 'FIND_TEAM':
        return `${apiUrl}/posts/find-team/${postId}`;
      default:
        throw new Error('Unknown post type');
    }
  };

  if (!post) {
    return <div>{t('editToolbar.loading')}</div>;
  }

  const deletePost = async () => {
    if (!post) {
      throw new Error('post 데이터 없음');
    }

    const url = `${apiUrl}/posts/${post.id}`;

    try {
      const response = await fetch(url, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('post 삭제 요청 실패');
      }
    } catch (error: any) {
      console.error('post 삭제 요청 실패', error.message);
    }
  };

  function onEditClick() {
    if (!post) {
      alert(t('editToolbar.postLoading'));
      return;
    }
    router.push(`/edit/${post.id}`);
  }

  async function onDeleteClick() {
    if (!post) {
      alert(t('editToolbar.postLoading'));
      return;
    }
    setIsModalOpen(true);
  }

  const handleConfirmDelete = async () => {
    await deletePost();
    setIsModalOpen(false);
  };

  return (
    <div className="flex font-bold gap-2 items-center">
      <button onClick={onEditClick}>{t('editToolbar.edit')}</button>
      <div className="w-0.5 h-5 bg-slate-400"></div>
      <button onClick={onDeleteClick}>{t('editToolbar.delete')}</button>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};
