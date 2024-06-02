'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

type LoginModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const LoginModal = ({ children, onClose }: LoginModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // 대화 상자를 보이게 하는 코드
    dialogRef.current?.showModal();
    // 모달이 열려 있을 때 body 스크롤 비활성화
    document.body.style.overflow = 'hidden';

    // 모달이 닫힐 때 body 스크롤 복원
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // dialog 바깥 클릭 모달 닫기
  const handleOutsideClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      className="w-[700px] rounded-lg outline-none overflow-hidden"
      ref={dialogRef}
      onClick={handleOutsideClick}
    >
      <nav className="w-full bg-primary text-white font-bold text-3xl h-[60px] flex justify-between items-center px-5">
        <h1>KW DUO</h1>
        <X size={38} onClick={onClose} className="cursor-pointer" />
      </nav>
      {children}
    </dialog>
  );
};

export default LoginModal;
