// components/ChatRoomItem.tsx
import { ChatRoom } from '@/types';
import { formatDate } from '@/util';
import Image from 'next/image';
import { userImageURL } from '@/constant/images';
import algorithmTierImages from '../algorithmTierImages/AlgorithmTierImages';

type ChatRoomListProps = {
  room: ChatRoom;
  onClick: () => void;
  isSelected: boolean;
};

const ChatRoomList = ({ room, onClick, isSelected }: ChatRoomListProps) => {
  return (
    <li
      className={`p-5 h-[100px] flex items-center border ${isSelected ? 'bg-gray' : 'hover:bg-gray bg-white'}`}
      onClick={onClick}
    >
      <div className="flex-shrink-0 w-[60px]">
        <img
          src={room.member.profileImgUrl ?? userImageURL}
          alt="user_profile_image"
          className="shadow-md rounded-full w-[60px] h-[60px] cursor-pointer relative"
        />
      </div>
      <div className="pl-3 flex-grow">
        <div className="font-bold flex gap-2 justify-between items-center">
          <div className="flex items-center">
            {room.member.nickname}
            {room.member.baekjoonTier && algorithmTierImages[room.member.baekjoonTier] && (
              <span className="ml-3 w-5 h-5">
                <Image
                  src={algorithmTierImages[room.member.baekjoonTier] ?? null}
                  alt="algorithm_tier_image"
                  width={14}
                  height={14}
                />
              </span>
            )}
          </div>
          <span className="text-xs font-normal text-silver">
            {room.lastChat && formatDate(room.lastChat.createdAt)}
          </span>
        </div>
        <h5 className="line-clamp-1">
          <span>{room.lastChat?.message}</span>
        </h5>
      </div>
    </li>
  );
};

export default ChatRoomList;
