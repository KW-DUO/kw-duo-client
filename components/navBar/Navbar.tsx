'use client';

import Link from 'next/link';
import { Bell, UserIcon } from 'lucide-react';
import { useState } from 'react';
import LoginStep from '../Login/LoginStep/LoginStep';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../multiLanguage/LanguageSwitcher';
import Dropdown from './Dropdown';
import { useAuthStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';
import { InfoHeader } from './../Card/Header';
import * as Card from '@/components/Card';

const Navbar = () => {
  const { t } = useTranslation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const toggleLogin = useAuthStore((state) => state.toggleLogin);

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true);
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
          <div className="flex items-center gap-3">
            <Link href="/">{t('nav.findTeam')}</Link>
            <Link href="/team-members">{t('nav.findTeamMembers')}</Link>
            {isLoggedIn && <Link href="/messages">{t('nav.messages')}</Link>}
            {isLoggedIn && <Link href="/create-post">{t('nav.createPost')}</Link>}
            <ResourcesDropdown />
            {isLoggedIn && <NotificationsDropdown />}
            {isLoggedIn ? (
              <UserDropdown />
            ) : (
              <button onClick={handleLoginButtonClick}>{t('nav.login')}</button>
            )}
            <LanguageSwitcher />
            <Card.InfoHeader projectType={'CLASS_PROJECT'} projectId={5} />
            <button onClick={toggleLogin} className="ml-4">
              (토글 로그인 테스트)
            </button>
          </div>
        </div>
      </nav>
      {isLoginModalOpen && <LoginStep onClose={handleCloseModal} />}
    </>
  );
};

export default Navbar;

const ResourcesDropdown = () => {
  const { t } = useTranslation();
  const dropdownItems = [
    { title: t('nav.stats'), path: '/survey' },
    { title: t('nav.guidelines'), path: '/guidelines' },
  ];

  return <Dropdown trigger={t('nav.resources')} items={dropdownItems} />;
};

const NotificationsDropdown = () => {
  const dropdownItems = [{ title: '알람', path: '#' }];

  return <Dropdown trigger={<Bell />} items={dropdownItems} />;
};

const UserDropdown = () => {
  const { t } = useTranslation();
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const userDropdownItems = [
    { title: t('nav.myPage'), path: '/mypage' },
    { title: t('nav.logout'), onClick: handleLogout },
  ];

  return <Dropdown trigger={<UserIcon size={30} />} items={userDropdownItems} />;
};
