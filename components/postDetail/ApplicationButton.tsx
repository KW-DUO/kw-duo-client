'use client';

import { useContext } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';
import { apiUrl } from '@/constant/api';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export const ApplicationButton = () => {
  const post = useContext(PostDetailContext);
  const router = useRouter();
  const { t } = useTranslation();

  const postApply = async () => {
    try {
      const response = await fetch(apiUrl + `/apply/${post?.id}`, { method: 'POST' });
      if (!response.ok) {
        throw new Error(t('button.applicationFailed'));
      }
    } catch (error: any) {
      console.error(t('button.applicationFailed'), error.message);
    }
  };

  const onClickApply = async () => {
    if (!post) {
      alert(t('button.loadingPost'));
      return;
    }
    await postApply();
    router.push(`/messages`);
  };

  return (
    <button
      onClick={onClickApply}
      className="w-full h-[70px] bg-secondary rounded text-white font-bold text-2xl mb-14"
    >
      {t('button.apply')}
    </button>
  );
};
