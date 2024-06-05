import React from 'react';
import LoginModal from './LoginModal';
import { LoginStepProps } from '../LoginStep/LoginStep';
import { GoogleLoginButton } from '../LoginButton';
import { useGoogleLogin } from '@react-oauth/google';
import { useTranslation } from 'react-i18next';
import { apiUrl } from '@/constant/api';
import { useUserStore } from '@/store/userStore';

// todo
// oauth 토큰을 전달하고 받은 데이터로 회원인지 아닌지 판단
// 1. 회원일 경우: 모달창 닫기
// 2. 회원이 아닐경우: 회원가입 스텝 이동

const SocialLoginModal = ({ onNext, onClose }: LoginStepProps) => {
  const { t } = useTranslation();
  const { setUserInfo } = useUserStore();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // oauth token 서버로 전달
      const fetchedTokenResponse = await fetchToken(tokenResponse.access_token);

      if (fetchedTokenResponse.isSignup) {
        setUserInfo({
          nickname: '',
          department: '',
          techStack: [],
          codingTestLanguage: '',
          position: '',
          email: '',
          githubUrl: '',
          baekjoonId: '',
          oauthId: fetchedTokenResponse.oauthId,
        });
        if (onNext) {
          onNext();
        }
      } else {
        onClose();
      }
    },
  });

  return (
    <LoginModal onClose={onClose}>
      <div className="flex justify-center items-center h-[440px]">
        <div>
          <h1 className="text-center mb-14 text-3xl font-bold">{t('login.loginMessage')}</h1>
          <GoogleLoginButton onClick={login} />
          {/* <NaverLoginButton /> */}
          {/* <KakaoLoginButton /> */}
        </div>
      </div>
    </LoginModal>
  );
};

export default SocialLoginModal;

// oauth 토큰 전달 함수
async function fetchToken(accessToken: string) {
  const response = await fetch(`${apiUrl}/auth/google?code=${accessToken}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`oauth 로그인 요청 실패: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
