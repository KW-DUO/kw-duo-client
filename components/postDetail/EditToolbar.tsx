'use client';
import { PostDetailContext } from '@/components/postDetail/store';
import { useContext } from 'react';

export const EditToolbar = () => {
  const post = useContext(PostDetailContext);

  function onEditClick() {
    if (!post) {
      alert('게시글 정보를 불러오는 중입니다. 잠시만 기다려주세요.');
      return;
    }

    alert(`${post.id}번 게시글 수정 페이지로 이동`);
  }

  async function onDeleteClick() {
    if (!post) {
      alert('게시글 정보를 불러오는 중입니다. 잠시만 기다려주세요.');
      return;
    }

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
