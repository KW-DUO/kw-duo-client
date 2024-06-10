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
import useRoomStore from '@/store/roomStore';

const userImageURL = '/icons/user_card_icon.svg';

const Chatting = () => {
  // const [roomId, setRoomId] = useState<number | null>(null); // 채팅방 Id
  const { roomId, setRoomId } = useRoomStore(); // 채팅방 Id

  console.log(roomId);

  return (
    <>
      <main className="max-w-[1300px] py-10 mx-auto">
        <section className="border border-gray flex flex-1 h-[80vh] bg-[#fffbfb]">
          {/* 왼쪽 채팅방 */}
          <Chat.ChatSidebar />
          <Chat.Chats roomId={roomId} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Chatting;
