import { useState } from 'react';
import { useAuthInfo } from '@/hooks/useAuthInfo';

const useRequireAuth = () => {
  const { isLoggedIn } = useAuthInfo();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const requireAuth = (callback: () => void) => {
    if (isLoggedIn) {
      callback();
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  return {
    requireAuth,
    isLoginModalOpen,
    handleCloseModal,
  };
};

export default useRequireAuth;
