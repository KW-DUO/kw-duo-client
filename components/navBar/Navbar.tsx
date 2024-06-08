'use client';

import Link from 'next/link';
import { Bell, UserIcon } from 'lucide-react';
import { useState } from 'react';
import LoginStep from '../Login/LoginStep/LoginStep';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../multiLanguage/LanguageSwitcher';
import Dropdown from './Dropdown';
import { useRouter } from 'next/navigation';
import { useAuthInfo } from '@/hooks/useMemberInfo';

const Navbar = () => {
  const { t } = useTranslation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isLoggedIn } = useAuthInfo();

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
            <Link href="/team-members">{t('nav.findTeam')}</Link>
            <Link href="/">{t('nav.findTeamMembers')}</Link>
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
  const router = useRouter();

  const { revalidate } = useAuthInfo();

  const handleLogout = () => {
    // remove token from localstorage
    localStorage.removeItem('accessToken');
    revalidate();
    router.push('/');
  };

  const userDropdownItems = [
    { title: t('nav.myPage'), path: '/mypage' },
    { title: t('nav.logout'), onClick: handleLogout },
  ];

  return <Dropdown trigger={<UserIcon size={30} />} items={userDropdownItems} />;
};
