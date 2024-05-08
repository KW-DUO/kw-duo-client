'use client';
import { useContext } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';

export const Title = () => {
  const postDetail = useContext(PostDetailContext);

  if (!postDetail) return <>Loading...</>;

  return <h1 className="text-center font-bold text-3xl mb-20">{postDetail.title}</h1>;
};
