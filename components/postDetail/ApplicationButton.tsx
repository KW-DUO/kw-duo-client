'use client';
import { useContext } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';
import { apiUrl } from '@/constant/api';

export const ApplicationButton = () => {
  const post = useContext(PostDetailContext);

  const postApply = async () => {
    try {
      const response = await fetch(apiUrl + `/apply/${post?.id}`, { method: 'POST' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error: any) {
      console.error('지원하기 요청 실패', error.message);
    }
  };

  const onClickApply = async () => {
    if (!post) {
      alert('게시글 정보를 불러오는 중입니다. 잠시만 기다려주세요.');
      return;
    }
    postApply();
    alert(`${post.id}번 게시글 지원 api 발사`);
  };

  return (
    <button
      onClick={onClickApply}
      className="w-full h-[70px] bg-secondary rounded text-white font-bold text-2xl mb-14"
    >
      지원하기
    </button>
  );
};
