import React from 'react';
import LoginModal from './LoginModal';
import { LoginStepProps } from '../LoginStep/LoginStep';
import { GoogleLoginButton } from '../LoginButton';

const SocialLoginModal = ({ onNext, onClose }: LoginStepProps) => {
  return (
    <LoginModal onClose={onClose}>
      <div className="flex justify-center items-center h-[440px]">
        <div>
          <h1 className="text-center mb-14 text-3xl font-bold">간편 로그인 후 이용 가능합니다!</h1>
          <button onClick={onNext}>onNext</button>
          <GoogleLoginButton />
          {/* <NaverLoginButton /> */}
          {/* <KakaoLoginButton /> */}
        </div>
      </div>
    </LoginModal>
  );
};

export default SocialLoginModal;
