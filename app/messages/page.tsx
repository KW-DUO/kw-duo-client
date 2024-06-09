'use client';

import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';

import { Search } from 'lucide-react';
import Image from 'next/image';
import { apiUrl } from '@/constant/api';
import { formatDate } from '@/util/formatDate';
import { ChatSidebar } from '@/components/Chat/ChatSidebar';
import * as Chat from '@/components/Chat';
import { ChatRoom } from '@/types';
import LoadingSpinner from '@/components/loading/LoadingSpinner';

const userImageURL = '/icons/user_card_icon.svg';

const Chatting = () => {
  const [roomId, setRoomId] = useState<number | null>(null); // 채팅방 Id
  const [status, setStatus] = useState<string>('idle'); // 상태를 관리하는 상태값

  // sidebar에 클릭한 채팅방 id 변경
  const handleChangeRoomId = (id: number) => {
    setRoomId(id);
  };

  return (
    <>
      <main className="max-w-[1300px] py-10 mx-auto">
        {status === 'pending' && <LoadingSpinner />}
        <section className="border border-gray flex flex-1 h-[80vh] bg-[#fffbfb]">
          {/* 왼쪽 채팅방 */}
          <Chat.ChatSidebar onChangeRoomId={handleChangeRoomId} onStatusChange={setStatus} />
          <Chat.Chats roomId={roomId} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Chatting;
