'use client';

import { useContext, useState } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';
import { useTranslation } from 'react-i18next';
import ConfirmationModal from '../modal/ConfirmationModal';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { client } from './../../util/HttpClient';
import { queryKeys } from '@/queries/queryKeys';

export const PostCloseButton = () => {
  const post = useContext(PostDetailContext);
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();

  const postClose = async () => {
    if (!post) {
      throw new Error('post 데이터 없음');
    }
    const response = await client.fetch(`/posts/${post.id}/close`, 'POST');

    if (!response) {
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

      // queryKey 배열을 사용하여 쿼리 캐시 무효화
      // queryClient.invalidateQueries(
      //   queryKeys.projects({
      //     findType: post.postType,
      //     q: '',
      //     projectType: '',
      //     department: '',
      //     course: '',
      //     position: '',
      //     wantedField: '',
      //     isBookmarkOnly: false,
      //     currentPage: 1,
      //   })
      // );
      alert(t('button.postClosed', { postId: post.id }));
      setIsModalOpen(false);

      // 게시물 타입에 따라 다른 페이지로 이동
      if (post?.postType === 'FIND_TEAMMATE') {
        router.push(`/`);
      } else if (post?.postType === 'FIND_TEAM') {
        router.push(`/team-members`);
      }
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
