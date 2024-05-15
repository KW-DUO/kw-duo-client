'use client';
import { apiUrl } from '@/constant/api';
import { userImageURL } from '@/constant/images';
import { ChatRoom } from '@/types';
import { formatDate } from '@/util';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

type SideBarProps = {
  onChangeRoomId: (id: number) => void;
};

export const Sidebar = ({ onChangeRoomId }: SideBarProps) => {
  const [chatRoomData, setChatRoomData] = useState<ChatRoom[]>([]);
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

  // 채팅방 무한스크롤
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver>();
  const lastChatRoomRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const id = 1;

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/chats?q=${id}&page=${page}&size=20`);
        const data = await response.json();
        setChatRoomData((prevRooms) => [...prevRooms, ...data.room]);
        setHasMore(data.hasMore);
        setLoading(false);
      } catch (error) {
        console.error('채팅방 조회 요청 실패', error);
        setLoading(false);
      }
    };

    fetchChatRooms();
  }, [page]);

  // 채팅방 클릭 이벤트
  const handleRoomClick = (room: ChatRoom) => {
    setSelectedRoomId(room.id); // 선택된 채팅방 ID 상태 업데이트
    onChangeRoomId(room.lastChat.id); // 채팅방 변경 콜백 호출
  };

  return (
    <div className="min-w-[280px] border ">
      <label className="flex items-center border h-14 py-4 px-5 bg-white">
        <input type="text" placeholder="검색어를 입력하세요." className="outline-none" />
        <Search className="cursor-pointer" />
      </label>

      {/* 채팅방 */}
      <div className="overflow-y-auto">
        <ul>
          {chatRoomData.map((room, index) => (
            <li
              key={room.id}
              ref={chatRoomData.length === index + 1 ? lastChatRoomRef : null}
              className={`p-5 h-[100px] flex items-center border  ${selectedRoomId === room.id ? 'bg-gray' : 'hover:bg-gray bg-white'}`}
              onClick={() => {
                handleRoomClick(room);
              }}
            >
              <div className="flex-shrink-0 w-[60px]">
                {/* <Image
                  src={userImageURL}
                  alt="user-image"
                  width={60}
                  height={60}
                  className="shadow-md rounded-full"
                /> */}
                <img
                  src="https://avatars.githubusercontent.com/u/12345678?v=4"
                  alt="user_profile_image"
                  className="shadow-md rounded-full w-[60px] h-[60px] cursor-pointer relative"
                />
                <div></div>
                {/* 접속 중인지 확인하는 거 추가하면 좋을듯 */}
              </div>
              <div className="pl-3 flex-grow">
                <div className="font-bold flex gap-2 justify-between items-center">
                  <div className="flex items-center">
                    {room.member.nickname}
                    {room.member.baekjoonTier && (
                      <span className="ml-3 w-5 h-5">
                        <img
                          src={room.member.baekjoonTier ?? '/icons/Algorithm Tier/platinum_4.png'}
                          alt="알고리즘 티어"
                        />
                        {/* <Image
                          src={'/icons/Algorithm Tier/platinum_4.png'}
                          alt="알고리즘 티어"
                          width={20}
                          height={20}
                        /> */}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-normal text-silver">
                    {formatDate(room.lastChat.createdAt)}
                  </span>
                </div>
                {/* <div className="font-bold">{chatRoomData.</div> */}
                <h5 className="line-clamp-1">
                  {/* <span>안녕하세요! 000 팀프로젝트123123123</span> */}
                  <span>{room.lastChat.message}</span>
                </h5>
              </div>
            </li>
          ))}
        </ul>
        {loading && <div className="text-center">데이터 불러오는중..</div>}
      </div>
    </div>
  );
};
