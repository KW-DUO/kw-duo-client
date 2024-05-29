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
  }, []);

  // dialog 바깥 클릭 모달 닫기
  const handleOutsideClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      className="w-[700px] rounded-lg outline-none"
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
