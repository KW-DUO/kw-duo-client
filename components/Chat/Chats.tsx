'use client';

import { ChatRoom } from './ChatRoom ';
import { useAuthInfo } from '@/hooks/useAuthInfo';

type ChatsProps = {
  roomId: number | null;
};

// 채팅 관련 컴포넌트 (채팅글, 채팅 입력)
export const Chats = ({ roomId }: ChatsProps) => {
  const { memberId } = useAuthInfo(); // ##차후 로그인 구현후 수정필요
  console.log('#', roomId);

  if (!roomId) return;
  return (
    <section className="w-full flex flex-col min-w-[600px]">
      {/* 현재 채팅방 */}
      <ChatRoom userId={memberId!!} roomId={roomId} />
    </section>
  );
};
