'use client';

import { getProjectTypeLabel } from '@/constant/projectType';
import { client } from '@/util/HttpClient';
import { Heart } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoginStep from '../Login/LoginStep/LoginStep';
import useRequireAuth from '@/hooks/useRequireAuth';

type InfoHeaderProps = {
  projectType: string;
  projectId: number;
  bookmark: { isBookmarked: boolean };
};

export const InfoHeader = ({ projectType, projectId, bookmark }: InfoHeaderProps) => {
  const isBookmarked = bookmark.isBookmarked;
  const [isChecked, setIsChecked] = useState<boolean>(isBookmarked);
  const { t } = useTranslation();
  const { requireAuth, isLoginModalOpen, handleCloseModal } = useRequireAuth();

  const handleBookmarkClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    requireAuth(async () => {
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
    });
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

export const addBookmark = async (projectId: number) => {
  try {
    const response = await client.fetch(`/bookmarks/${projectId}`, 'POST');
    return response;
  } catch (error) {
    console.error('북마크 추가 실패:', error);
    throw error;
  }
};

export const removeBookmark = async (projectId: number) => {
  try {
    const response = await client.fetch(`/bookmarks/${projectId}`, 'DELETE');
    return response;
  } catch (error) {
    console.error('북마크 삭제 실패:', error);
    throw error;
  }
};
