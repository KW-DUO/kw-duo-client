import React from 'react';
import LoginModal from './LoginModal';
import { KakaoLoginButton, NaverLoginButton } from '../LoginButton/LoginButton';
import { LoginStepProps } from '../LoginStep/LoginStep';

const SocialLoginModal = ({ onNext }: LoginStepProps) => {
  return (
    <LoginModal>
      <div className="flex justify-center items-center h-[440px]">
        <div>
          <h1 className="text-center mb-14 text-3xl font-bold">간편 로그인 후 이용 가능합니다!</h1>
          <button onClick={onNext}>onNext</button>
          <NaverLoginButton />
          <KakaoLoginButton />
        </div>
      </div>
    </LoginModal>
  );
};

export default SocialLoginModal;
