'use client';

import { useContext } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';

export const PostCloseButton = () => {
  const post = useContext(PostDetailContext);

  async function onClickClose() {
    if (!post) {
      alert('게시글 정보를 불러오는 중입니다. 잠시만 기다려주세요.');
      return;
    }

    alert(`${post.id}번 게시글 마감 api 발사`);
  }

  return (
    <button
      onClick={onClickClose}
      className="w-full h-[70px] bg-secondary rounded text-white font-bold text-2xl mb-14"
    >
      모집 마감하기
    </button>
  );
};
