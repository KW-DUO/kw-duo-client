'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const LoginModal = ({ children }: any) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // 대화 상자를 보이게 하는 코드
    dialogRef.current?.showModal();
  }, []);

  const handleClose = () => {
    dialogRef.current?.close();
  };

  // dialog 바깥 클릭 모달 닫기
  const handleOutsideClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      handleClose();
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
        <X size={38} onClick={handleClose} className="cursor-pointer" />
      </nav>
      {children}
    </dialog>
  );
};

export default LoginModal;
