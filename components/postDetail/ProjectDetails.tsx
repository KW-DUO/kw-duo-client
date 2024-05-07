'use client';

import { useContext } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';

export const ProjectDetails = () => {
  const post = useContext(PostDetailContext);

  if (!post) return <>Loading...</>;

  return (
    <>
      <h2 className="font-bold text-2xl mb-10">프로젝트 소개</h2>
      <div className="border" />
      <div className="mt-10 mb-10">{post.content}</div>
    </>
  );
};
