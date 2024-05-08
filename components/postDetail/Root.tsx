'use client';
import React from 'react';
import { PostDetailContext } from '@/components/postDetail/store';
import { PostDetail } from '@/types';

type Props = {
  children: React.ReactNode;
  postData: PostDetail;
};

export const Root = ({ children, postData }: Props) => {
  return <PostDetailContext.Provider value={postData}>{children}</PostDetailContext.Provider>;
};
