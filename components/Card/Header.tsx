'use client';

import { apiUrl } from '@/constant/api';
import { getProjectTypeLabel } from '@/constant/projectType';
import { getCookie, HttpClient } from '@/util/HttpClient';
import { Heart } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '@/store/userStore';
import LoginStep from '../Login/LoginStep/LoginStep';

type InfoHeaderProps = {
  projectType: string;
  projectId: number;
};

export const InfoHeader = ({ projectType, projectId }: InfoHeaderProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const handleBookmarkClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }

    try {
      if (isChecked) {
        await removeBookmark(projectId);
      } else {
        await addBookmark(projectId);
      }
      setIsChecked((prev) => !prev);
    } catch (error) {
      console.error('북마크 토글 실패:', error);
    }
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="flex justify-between mb-4 h-6">
      <div className="bg-gray text-xs h-fit text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
        {getProjectTypeLabel(projectType, t)}
      </div>
      <button onClick={handleBookmarkClick}>{isChecked ? <Heart fill="red" /> : <Heart />}</button>
      {isLoginModalOpen && <LoginStep onClose={handleCloseModal} />}
    </div>
  );
};

const client = new HttpClient({
  baseUrl: apiUrl,
  makeBearerAuth: () => getCookie('accessToken'),
});

export const addBookmark = async (projectId: number) => {
  try {
    const response = await client.fetch(`/bookmarks/${projectId}`, 'POST', {});
    return response;
  } catch (error) {
    console.error('북마크 추가 실패:', error);
    throw error;
  }
};

export const removeBookmark = async (projectId: number) => {
  try {
    const response = await client.fetch(`/bookmarks/${projectId}`, 'DELETE', {});
    return response;
  } catch (error) {
    console.error('북마크 삭제 실패:', error);
    throw error;
  }
};
