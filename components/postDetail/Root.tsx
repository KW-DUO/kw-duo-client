'use client';
import React from 'react';
import { PostDetailContext } from '@/components/postDetail/store';
import { PostDetail } from '@/types';

type Props = {
  children: React.ReactNode;
  postData: PostDetail;
};

export const Root = ({ children, postData }: Props) => {
  return (
    <PostDetailContext.Provider value={postData}>
      <div className="max-w-[900px] mx-auto py-36">{children}</div>
    </PostDetailContext.Provider>
  );
};
