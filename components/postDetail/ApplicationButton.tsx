'use client';
import { useContext } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';
import { apiUrl } from '@/constant/api';
import { useRouter } from 'next/navigation';

export const ApplicationButton = () => {
  const post = useContext(PostDetailContext);
  const router = useRouter();

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
    await postApply();
    router.push(`/messages`);
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
