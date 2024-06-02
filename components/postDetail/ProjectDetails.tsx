'use client';

import { useContext } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';
import { useTranslation } from 'react-i18next';

export const ProjectDetails = () => {
  const post = useContext(PostDetailContext);
  const { t } = useTranslation();

  if (!post) return <>{t('projectDetails.loading')}</>;

  return (
    <>
      <h2 className="font-bold text-2xl mb-10">{t('projectDetails.title')}</h2>
      <hr className="border" />
      <div className="mt-10 mb-10">{post.content}</div>
    </>
  );
};
