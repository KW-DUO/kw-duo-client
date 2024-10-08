'use client';
import { ChatRoom } from '@/types';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import ChatRoomItem from './ChatRoomList';
import { client } from '@/util/HttpClient';
import LoadingSpinner from '../loading/LoadingSpinner';
import { useDebounce } from '@/hooks/useDebounce';
import useRoomStore from './../../store/roomStore';

type ChatRoomResponse = {
  room: ChatRoom[];
  hasMore: boolean;
};

export const ChatSidebar = () => {
  const [query, setQuery] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');
  const debouncedQuery = useDebounce(query, 300);
  const { roomId, setRoomId } = useRoomStore();

  const { ref, inView } = useInView(); // ref가 연결된 요소가 뷰포트에 들어오면 inView true값으로 변함 -> 변할때 fetchNextPage 호출

  // 검색

  const fetchChatRooms = async ({ q = '', page = 0 }) => {
    return await client.fetch<ChatRoomResponse>(`/chats`, 'GET', {
      params: {
        q,
        page,
      },
    });
  };

  const { data, status, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['chatRoomList', debouncedQuery],
    queryFn: () => fetchChatRooms({}),
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

  // 채팅방 클릭 이벤트
  const handleRoomClick = (room: ChatRoom) => {
    setRoomId(room.id); // 채팅방 변경 콜백 호출,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setQuery(searchInput);
    }
  };

  // 로딩 스피너를 부모 기준으로 중앙에 배치하는 경우
  if (status === 'pending') {
    return (
      <div className="min-w-[280px] w-[280px]">
        <label className="flex items-center border h-14 py-4 px-5 bg-white">
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            className="outline-none"
            value={searchInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <Search className="cursor-pointer" />
        </label>
        <LoadingSpinner height="h-[650px]" />
      </div>
    );
  }

  if (status === 'error') {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="min-w-[280px] w-[280px] border ">
      <label className="flex items-center border h-14 py-4 px-5 bg-white">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className="outline-none"
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Search className="cursor-pointer" />
      </label>

      {/* 채팅방 */}
      <div className="overflow-y-auto">
        <ul>
          {data?.pages.map((page: ChatRoomResponse) =>
            page.room
              .slice()
              .reverse()
              .map((room: ChatRoom) => (
                <ChatRoomItem
                  key={room.id}
                  room={room}
                  onClick={() => handleRoomClick(room)}
                  isSelected={room.id === roomId}
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
