import React from 'react';
import LoginModal from './LoginModal';
import { LoginStepProps } from '../LoginStep/LoginStep';
import { GoogleLoginButton } from '../LoginButton';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const SocialLoginModal = ({ onNext, onClose }: LoginStepProps) => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await fetchUserInfo(tokenResponse.access_token);
      // const sendToken = await postToken(tokenResponse.access_token);
      console.log(userInfo);
      if (onNext) {
        onNext();
      }
    },
  });

  return (
    <LoginModal onClose={onClose}>
      <div className="flex justify-center items-center h-[440px]">
        <div>
          <h1 className="text-center mb-14 text-3xl font-bold">간편 로그인 후 이용 가능합니다!</h1>
          <GoogleLoginButton onClick={login} />
          {/* <GoogleLogin
            onSuccess={(credentialResponse: any) => {
              let credentialResponseDecoded = jwtDecode(credentialResponse.credential);
              console.log(credentialResponse);
              console.log(credentialResponseDecoded);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          /> */}
          {/* <NaverLoginButton /> */}
          {/* <KakaoLoginButton /> */}
        </div>
      </div>
    </LoginModal>
  );
};

export default SocialLoginModal;

// 사용자 정보를 가져오는 헬퍼 함수
async function fetchUserInfo(accessToken: string) {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`
  );
  const data = await response.json();
  return data;
}

async function postToken(accessToken: string) {
  const response = await fetch('/api/auth/google', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: accessToken }),
  });

  if (!response.ok) {
    throw new Error('요청 실패');
  }

  const data = await response.json();
  return data;
}
