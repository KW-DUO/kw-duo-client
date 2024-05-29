'use client';
import { apiUrl } from '@/constant/api';
import { userImageURL } from '@/constant/images';
import { ChatRoom } from '@/types';
import { formatDate } from '@/util';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import algorithmTierImages from '../algorithmTierImages/AlgorithmTierImages';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import ChatRoomItem from './ChatRoomItem';

type ChatSidebarProps = {
  onChangeRoomId: (id: number) => void;
};

type ChatRoomResponse = {
  room: ChatRoom[];
  hasMore: boolean;
};

export const ChatSidebar = ({ onChangeRoomId }: ChatSidebarProps) => {
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

  const { ref, inView } = useInView(); // ref가 연결된 요소가 뷰포트에 들어오면 inView true값으로 변함 -> 변할때 fetchNextPage 호출

  const fetchChatRooms = async ({ pageParam = 0 }) => {
    const id = 1;
    const response = await fetch(`${apiUrl}/chats?q=${id}&page=${pageParam}&size=1`);
    const data = await response.json();
    return data;
  };

  const { data, status, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['chatRoomList'],
    queryFn: fetchChatRooms,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage = lastPage.hasMore ? allPage.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Error: {error.message}</p>;
  }

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
          {data?.pages.map((page: ChatRoomResponse) =>
            page.room.map((room: ChatRoom) => (
              <ChatRoomItem
                key={room.id}
                room={room}
                onClick={() => handleRoomClick(room)}
                isSelected={room.id === selectedRoomId}
              />
            ))
          )}
        </ul>

        <div ref={ref}>
          {isFetchingNextPage && <p className="text-center">데이터 불러오는중..</p>}
        </div>
      </div>
    </div>
  );
};
