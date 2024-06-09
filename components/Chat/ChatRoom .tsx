import { ChatMessage } from '@/types';
import { toYYYYMMDD } from '@/util';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import LoadingSpinner from '../loading/LoadingSpinner';
import { client } from '../../util/HttpClient';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { apiUrl } from '@/constant/api';
import { useForm } from 'react-hook-form';

type Props = {
  userId: number;
  roomId: number;
};

// MessageContainer 컴포넌트: 주어진 userId와 roomId에 따라 채팅 메시지를 가져오고, 표시하는 컴포넌트
export const ChatRoom = ({ userId, roomId }: Props) => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]); // 채팅 메시지 목록을 관리하는 상태
  const [page, setPage] = useState(0); // 채팅 이전 대화 내역 페이지 관리하는 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 관리하는 상태
  const containerRef = useRef<HTMLDivElement>(null); // 채팅 메시지 컨테이너의 참조를 저장하는 ref

  const stompClient = useRef<CompatClient | null>(null);

  const { register, handleSubmit, reset, watch } = useForm<{ message: string }>();
  const message = watch('message');

  // 여기에 구독 관련 로직이 추가될 것으로 보임

  // 웹소켓 연결 및 구독 핸들러
  function connectHandler() {
    const socket = new SockJS(apiUrl + '/ws-chat');
    stompClient.current = Stomp.over(socket);
    stompClient.current.connect(undefined, () => {
      stompClient.current?.subscribe(`/chat/${roomId}`, (message) => {
        // 구독해둔 채팅방에서 채팅이 올라왔을 경우
        setChatHistory((prev) => [...prev, JSON.parse(message.body)]);
      });
    });
  }

  // 채팅 메시지 전송 함수
  function sendChat(data: { message: string }) {
    if (stompClient.current && stompClient.current.connected) {
      stompClient.current.send(
        `/app/${roomId}`,
        undefined,
        JSON.stringify({
          requestMemberId: userId,
          message: data.message,
        })
      );
    }
    reset();
  }

  // roomId가 변경될 때마다 웹소켓 연결
  useEffect(() => {
    connectHandler();
    return () => {
      stompClient.current?.disconnect(); // 새 채팅 구독, 기존 구독 끊어주기
    };
  }, [roomId]);

  // 메시지 목록이 업데이트될 때마다, 컨테이너의 스크롤을 가장 아래로 이동시킴
  useLayoutEffect(() => {
    if (containerRef.current) {
      const element = containerRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [chatHistory]);

  // roomId와 page가 변경될 때마다, 채팅 메시지를 가져오는 함수
  useEffect(() => {
    setIsLoading(true);
    const fetchChats = async () => {
      try {
        // 서버로부터 채팅 메시지를 가져옴
        const data = await client.fetch<{ chat: ChatMessage[] }>(`/chats/${roomId}`, 'GET', {
          params: { page },
        });
        // 페이지가 0이면 새로 가져온 메시지로 덮어쓰고, 아니면 기존 메시지 앞에 붙임
        setChatHistory((prev) => (page === 0 ? data.chat : [...data.chat, ...prev]));
      } catch (error) {
        console.error('Failed to fetch messages', error);
      }
      setIsLoading(false);
    };
    if (roomId) {
      fetchChats();
    }
  }, [roomId, page]);

  // 날짜를 'YYYY-MM-DD' 형식으로 변환하는 함수
  const getFormattedDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return toYYYYMMDD(date);
  };

  // 시간을 'HH:MM AM/PM' 형식으로 변환하는 함수
  const getFormattedTime = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // 날짜와 시간을 포맷하여 JSX로 반환하는 함수
  const renderFormattedDate = (isoDate: string) => {
    const formattedDate = getFormattedDate(isoDate);
    const formattedTime = getFormattedTime(isoDate);
    return (
      <>
        <div>{formattedDate}</div>
        <div>{formattedTime}</div>
      </>
    );
  };

  // 현재 메시지와 다음 메시지가 같은 날에 보내졌는지 확인하여 타임스탬프 표시 여부 결정하는 함수
  const shouldShowTimestamp = (index: number): boolean => {
    const currentChat = chatHistory[index];
    const nextChat = chatHistory[index + 1];
    if (nextChat && currentChat.member.id === nextChat.member.id) {
      const currentDate = new Date(currentChat.createdAt).toDateString();
      const nextDate = new Date(nextChat.createdAt).toDateString();
      if (currentDate === nextDate) {
        return false;
      }
    }
    return true;
  };

  // 타임스탬프를 렌더링하는 함수
  const renderTimestamp = (index: number) => {
    if (shouldShowTimestamp(index)) {
      const chat = chatHistory[index];
      return (
        <div
          className={`text-xs opacity-75 ${chat.member.id === userId ? 'mr-2 text-right' : 'ml-2 text-left'}`}
        >
          {renderFormattedDate(chat.createdAt)}
        </div>
      );
    }
    return null;
  };

  // 로딩 중일 때 로딩 스피너를 표시
  if (isLoading) return <LoadingSpinner />;

  // 채팅 메시지 목록을 렌더링
  return (
    <>
      <div ref={containerRef} className="flex-1 overflow-y-auto flex flex-col gap-5 p-5">
        {chatHistory.map((chat, index) => (
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
      {/* 채팅 밑 */}
      <div className="w-full h-[144px] border p-5 bg-white">
        <form onSubmit={handleSubmit(sendChat)}>
          <textarea
            {...register('message')}
            className="pl-3 pt-4 pr-4 pb-4 text-sm outline-none border w-full h-14 mb-3 rounded resize-none"
          />
          <button
            type="submit"
            className={`w-20 h-10 font-bold rounded float-right ${message && message.trim() ? 'bg-primary text-white' : 'bg-gray text-silver'}`}
          >
            전송
          </button>
        </form>
      </div>
    </>
  );
};
