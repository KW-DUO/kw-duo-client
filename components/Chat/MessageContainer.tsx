import { apiUrl } from '@/constant/api';
import { ChatMessage } from '@/types';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const MessageContainer = ({ userId, roomId }: any) => {
  const [messageList, setMessageList] = useState<ChatMessage[]>([]);
  const [page, setPage] = useState(0); // 채팅 이전 대화 내역
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const element = containerRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [messageList]);

  useEffect(() => {
    setLoading(true);
    const fetchChats = async () => {
      try {
        const response = await fetch(`${apiUrl}/chats/${roomId}?page=${page}&size=20`);
        const data = await response.json();
        setMessageList((prev) => (page === 0 ? data.chat : [...data.chat, ...prev]));
      } catch (error) {
        console.error('Failed to fetch messages', error);
      }
      setLoading(false);
    };
    if (roomId) {
      fetchChats();
    }
  }, [roomId, page]);

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const formattedDate = `${date.getFullYear().toString().substr(-2)}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
      <>
        <div>{formattedDate}</div>
        <div>{formattedTime}</div>
      </>
    );
  };

  const renderTimestamp = (index: number) => {
    const currentChat = messageList[index];
    const nextChat = messageList[index + 1];

    if (nextChat && currentChat.member.id === nextChat.member.id) {
      const currentDate = new Date(currentChat.createdAt).toDateString();
      const nextDate = new Date(nextChat.createdAt).toDateString();
      if (currentDate === nextDate) {
        return null;
      }
    }
    return (
      <div
        className={`text-xs opacity-75 ${currentChat.member.id === userId ? 'mr-2 text-right' : 'ml-2 text-left'}`}
      >
        {formatDate(currentChat.createdAt)}
      </div>
    );
  };

  if (loading) return <p className="flex-1 flex justify-center items-center">Loading...</p>;

  return (
    <div ref={containerRef} className="flex-1 overflow-y-auto flex flex-col gap-5 p-5">
      {messageList.map((chat, index) => (
        <div
          key={chat.id}
          className={`flex items-end ${chat.member.id === userId ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <div
            className={`p-2 rounded-lg ${chat.member.id === userId ? 'bg-primary rounded-tr-none text-white' : 'bg-white rounded-tl-none text-black'}`}
            style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          >
            <p>{chat.message}</p>
          </div>
          {renderTimestamp(index)}
        </div>
      ))}
    </div>
  );
};
