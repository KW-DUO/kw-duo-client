import Image from 'next/image';
import { toYYYYMMDD } from '@/util';

export const AuthorInfo = () => {
  // TODO: useContext로 user 정보 가져오기
  const userImageURL = '/icons/user_card_icon.svg';
  const nickname = 'kw-duo';
  const date = new Date('2024-05-07');

  return (
    <div className="flex items-center gap-2">
      <Image src={userImageURL} alt="user-image" width={48} height={48} />
      <div className="font-bold">{nickname}</div>
      <div className="w-0.5 h-5 bg-slate-400" />
      <div className="text-gray-400">{toYYYYMMDD(date)}</div>
    </div>
  );
};
