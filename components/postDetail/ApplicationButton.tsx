'use client';

import { useContext } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';
import { apiUrl } from '@/constant/api';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { client } from './../../util/HttpClient';

export const ApplicationButton = () => {
  const post = useContext(PostDetailContext);
  const router = useRouter();
  const { t } = useTranslation();

  const postApply = async () => {
    await client.fetch(`/apply/${post?.id}`, 'POST');
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
