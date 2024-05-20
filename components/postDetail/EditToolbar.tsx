'use client';
import { PostDetailContext } from '@/components/postDetail/store';
import { apiUrl } from '@/constant/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export const EditToolbar = () => {
  const post = useContext(PostDetailContext);
  const queryClient = useQueryClient();
  const router = useRouter();

  const getApiUrl = (postType: string, postId: number) => {
    switch (postType) {
      case 'FIND_TEAMMATE':
        return `${apiUrl}/posts/find-teammate/${postId}`;
      case 'FIND_TEAM':
        return `${apiUrl}/posts/find-team/${postId}`;
      default:
        throw new Error('Unknown post type');
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  const deletePost = async () => {
    if (!post) {
      throw new Error('post 데이터 없음');
    }

    const url = `${apiUrl}/posts/${post.id}`;

    try {
      const response = await fetch(url, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('post 삭제 요청 실패');
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('unknown 에러 발생');
      }
    }
  };

  function onEditClick() {
    if (!post) {
      alert('게시글 정보를 불러오는 중입니다. 잠시만 기다려주세요.');
      return;
    }
    router.push(`/edit/${post.id}`);
    alert(`${post.id}번 게시글 수정 페이지로 이동`);
  }

  async function onDeleteClick() {
    if (!post) {
      alert('게시글 정보를 불러오는 중입니다. 잠시만 기다려주세요.');
      return;
    }
    deletePost();

    alert(`${post.id}번 게시글 삭제 api 발사`);
  }

  return (
    <div className="flex font-bold gap-2 items-center">
      <button onClick={onEditClick}>수정</button>
      <div className="w-0.5 h-5 bg-slate-400"></div>
      <button onClick={onDeleteClick}>삭제</button>
    </div>
  );
};
