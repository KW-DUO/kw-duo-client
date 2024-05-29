'use client';

import Link from 'next/link';
import Links from './links/Links';
import { UserIcon } from 'lucide-react';
import { useState } from 'react';
import LoginStep from '../Login/LoginStep/LoginStep';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // 모달 표시 상태를 관리합니다.

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true); // 로그인 버튼 클릭 시 모달을 엽니다.
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <nav className="bg-secondary h-20">
        <div className="max-w-maxWidth mx-auto h-full flex text-white justify-between items-center text-xl">
          <Link href="/" className="text-2xl font-semibold">
            KW DUO
          </Link>
          <div className="flex items-center">
            <Links />
            <button onClick={handleLoginButtonClick}>로그인</button>
            <Link href="/mypage">
              <button>
                <UserIcon size={30} />
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {isLoginModalOpen && <LoginStep onClose={handleCloseModal} />}
    </>
  );
};

export default Navbar;
