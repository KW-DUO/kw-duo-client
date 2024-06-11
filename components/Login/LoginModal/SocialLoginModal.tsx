import React from 'react';
import LoginModal from './LoginModal';
import { LoginStepProps } from '../LoginStep/LoginStep';
import { GoogleLoginButton } from '../LoginButton';
import { useGoogleLogin } from '@react-oauth/google';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '@/store/userStore';
import { client } from '@/util/HttpClient';
import { useAuthInfo } from '@/hooks/useAuthInfo';
import { MyPageForm } from '@/types/mypageFormTypes';

// todo
// oauth 토큰을 전달하고 받은 데이터로 회원인지 아닌지 판단
// 1. 회원일 경우: 모달창 닫기
// 2. 회원이 아닐경우: 회원가입 스텝 이동

export const getMemberInfo = async (): Promise<MyPageForm> => {
  const userInfo = await client.fetch<MyPageForm>('/members/info', 'GET', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return userInfo;
};

const SocialLoginModal = ({ onNext, onClose }: LoginStepProps) => {
  const { t } = useTranslation();
  const { setUserInfo } = useUserStore();
  const { revalidate } = useAuthInfo();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // oauth token 서버로 전달
      const { isSignup, oAuthId, accessToken } = await fetchToken(tokenResponse.access_token);

      if (isSignup) {
        setUserInfo({
          nickname: '',
          department: '',
          techStack: [],
          codingTestLanguage: '',
          position: '',
          email: '',
          githubUrl: '',
          baekjoonId: '',
          oAuthId: oAuthId,
        });
        if (onNext) {
          onNext();
        }
      } else {
        localStorage.setItem('accessToken', accessToken!!);
        revalidate();
        try {
        } catch (error) {
          console.error('유저 정보 조회 실패:', error);
        }
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

type TokenResponse = { oAuthId: string; isSignup: boolean; accessToken: string | null };
async function fetchToken(accessToken: string) {
  return await client.fetch<TokenResponse>(`/auth/google`, 'GET', {
    params: { code: accessToken },
  });
}
