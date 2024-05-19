'use client';

import { useContext } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';
import { apiUrl } from '@/constant/api';

export const PostCloseButton = () => {
  const post = useContext(PostDetailContext);

  const postClose = async () => {
    if (!post) {
      throw new Error('post 데이터 없음');
    }
    const url = apiUrl + `/posts/${post.id}/close`;
    const response = await fetch(url, { method: 'POST' });

    if (!response.ok) {
      throw new Error('글 모집 마감 요청 실패');
    }

    return response.json();
  };

  const onClickClose = async () => {
    if (!post) {
      alert('게시글 정보를 불러오는 중입니다. 잠시만 기다려주세요.');
      return;
    }

    try {
      await postClose();
      alert(`${post.id}번 게시글이 마감되었습니다.`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <button
      onClick={onClickClose}
      className="w-full h-[70px] bg-secondary rounded text-white font-bold text-2xl mb-14"
    >
      모집 마감하기
    </button>
  );
};
