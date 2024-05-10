import { userImageURL } from '@/constant/images';
import { PostCard } from '@/types';
import Image from 'next/image';

type AuthorInfoProps = {
  nickname: string;
};

export const AuthorInfo = ({ nickname }: AuthorInfoProps) => (
  <div className="flex items-center gap-2.5">
    <Image src={userImageURL} alt="user-image" width={30} height={30} />
    <div className="font-medium">{nickname}</div>
  </div>
);
