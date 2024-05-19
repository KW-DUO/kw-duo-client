'use client';
import { toYYYYMMDD } from '@/util';
import { useContext } from 'react';
import { PostDetailContext } from '@/components/postDetail/store';

const DEFAULT_PROFILE_IMG = '/icons/user_card_icon.svg';

export const AuthorInfo = () => {
  const post = useContext(PostDetailContext);

  if (!post) return <>Loading...</>;

  return (
    <div className="flex items-center gap-2">
      {/* TODO: next/image로 변경 */}
      <img
        src={post.author.profileImgUrl ?? DEFAULT_PROFILE_IMG}
        alt="프로필 이미지"
        width={48}
        height={48}
      />
      <div className="font-bold">{post.author.nickname}</div>
      <div className="w-0.5 h-5 bg-slate-400" />
      <div className="text-gray-400">{toYYYYMMDD(new Date(post.createdAt))}</div>
    </div>
  );
};
