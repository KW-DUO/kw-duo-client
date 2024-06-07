'use client';

import { MessageContainer } from './MessageContainer';
import { InputField } from './InputField';
import { useAuthInfo } from '@/hooks/useMemberInfo';

type ChatsProps = {
  roomId: number | null;
};

// 채팅 관련 컴포넌트 (채팅글, 채팅 입력)
export const Chats = ({ roomId }: ChatsProps) => {
  const { memberId } = useAuthInfo(); // ##차후 로그인 구현후 수정필요

  if (!roomId) return;
  return (
    <section className="w-full flex flex-col min-w-[600px]">
      {/* 현재 채팅방 */}
      {/* 차후 userId를 받아야함 */}
      <MessageContainer userId={memberId!!} roomId={roomId} />

      {/* 채팅 밑 */}
      <InputField userId={memberId!!} />
    </section>
  );
};
