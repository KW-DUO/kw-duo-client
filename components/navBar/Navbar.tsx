'use client';

import Link from 'next/link';
import { Bell, UserIcon } from 'lucide-react';
import { useState } from 'react';
import LoginStep from '../Login/LoginStep/LoginStep';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../multiLanguage/LanguageSwitcher';

// todo
// 로그인 상태 관리 적용
const Navbar = () => {
  const isLoggedIn = true; // 로그인 여부
  const { t } = useTranslation(); // 언어
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // 모달 표시 상태를 관리합니다.
  const pathname = usePathname();

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true); // 로그인 버튼 클릭 시 모달을 엽니다.
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const dropdownItems = [
    { title: t('nav.stats'), path: '/survey' },
    { title: t('nav.guidelines'), path: '/guidelines' },
  ];

  const notificationItems = [
    { title: '거래 알림', path: '/notifications/transaction' },
    { title: '크몽 알림', path: '/notifications/crow' },
  ];

  return (
    <>
      <nav className="bg-secondary h-20">
        <div className="max-w-maxWidth mx-auto h-full flex text-white justify-between items-center text-xl">
          <Link href="/" className="text-2xl font-semibold">
            KW DUO
          </Link>
          <div className="flex items-center gap-3 ">
            <Link href="/">{t('nav.findTeam')}</Link>
            <Link href="/team-members">{t('nav.findTeamMembers')}</Link>
            {isLoggedIn && <Link href="/messages">{t('nav.messages')}</Link>}
            {isLoggedIn && <Link href="/create-post">{t('nav.createPost')}</Link>}
            <Dropdown title={t('nav.resources')} items={dropdownItems} />
            {isLoggedIn && <ScrollableDropdown title={<Bell />} items={notificationItems} />}
            {isLoggedIn ? (
              <LoginUser />
            ) : (
              <button onClick={handleLoginButtonClick}>{t('nav.login')}</button>
            )}
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {isLoginModalOpen && <LoginStep onClose={handleCloseModal} />}
    </>
  );
};

export default Navbar;

const LoginUser = () => {
  return (
    <Link href="/mypage">
      <button>
        <UserIcon size={30} />
      </button>
    </Link>
  );
};

type DropdownProps = {
  title: string;
  items: string[];
};

const Dropdown = ({ title, items }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button onClick={toggleDropdown} className="text-white">
        {title}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded">
          {items.map((item: any) => (
            <Link href={item.path} key={item.title}>
              <div className="block px-4 py-2 hover:bg-gray-200">{item.title}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const ScrollableDropdown = ({ title, items }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button onClick={toggleDropdown} className="text-white">
        {title}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded max-h-60 overflow-y-auto">
          {items.map((item: any) => (
            <Link href={item.path} key={item.title}>
              <div className="block px-4 py-2 hover:bg-gray-200">{item.title}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
