import useRequireAuth from '@/hooks/useRequireAuth';
import { useAuthInfo } from '@/hooks/useAuthInfo';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LoginStep from '../Login/LoginStep/LoginStep';
import { postApply } from '../postDetail';
import useRoomStore from '@/store/roomStore';

type ApplyButtonProps = {
  projectId: number;
  authorId: number;
};

export const ApplyButton = ({ projectId, authorId }: ApplyButtonProps) => {
  const router = useRouter(); // 페이지 이동
  const { memberId } = useAuthInfo();
  const isMyPost = memberId === authorId;
  const { setRoomId } = useRoomStore();

  const { t } = useTranslation();
  const { requireAuth, isLoginModalOpen, handleCloseModal } = useRequireAuth();
  const handleApplyButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 이벤트 전파 막기
    e.preventDefault(); // 이벤트 전파 막기
    requireAuth(async () => {
      const { roomId } = await postApply(projectId);
      setRoomId(roomId);
      router.push('/messages');
    });
  };
  return (
    <>
      {/* 자신의 글일때는 지원하기 버튼 없앰 */}
      {!isMyPost && (
        <button
          onClick={handleApplyButtonClick}
          className="text-sm px-4 py-2 bg-yellow-400 rounded-3xl "
        >
          {t('button.apply')}
        </button>
      )}
      {isLoginModalOpen && <LoginStep onClose={handleCloseModal} />}
    </>
  );
};
