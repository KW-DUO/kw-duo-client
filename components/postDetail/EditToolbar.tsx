'use client';
import { PostDetailContext } from '@/components/postDetail/store';
import { apiUrl } from '@/constant/api';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ConfirmationModal from './../modal/ConfirmationModal';
import { client } from './../../util/HttpClient';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/queries/queryKeys';

export const EditToolbar = () => {
  const post = useContext(PostDetailContext);
  const router = useRouter();
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  if (!post) {
    return <div>{t('editToolbar.loading')}</div>;
  }

  const deletePost = async () => {
    if (!post) {
      throw new Error('post 데이터 없음');
    }

    try {
      const response = await client.fetch(`/posts/${post.id}`, 'DELETE');
      if (!response) {
        throw new Error('post 삭제 요청 실패');
      }
      // queryKey 배열을 사용하여 쿼리 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: queryKeys.projects({
          findType: post.postType,
          q: '',
          projectType: '',
          department: '',
          course: '',
          position: '',
          wantedField: '',
          isBookmarkOnly: false,
          currentPage: 1,
        }),
      });
      if (post?.postType === 'FIND_TEAMMATE') {
        router.push(`/`);
      }
      if (post?.postType === 'FIND_TEAM') {
        router.push(`/team-members`);
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
        title={t('editToolbar.confirmDelete')}
        message={t('editToolbar.confirmDeleteMessage')}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};
