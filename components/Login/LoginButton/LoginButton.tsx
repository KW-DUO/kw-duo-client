import Image from 'next/image';

export function NaverLoginButton() {
  return (
    <button className="bg-[#57BC63] w-[540px] h-[66px] mb-8 rounded-2xl text-white text-2xl flex justify-center items-center relative outline-none">
      <Image
        src={'/icons/LoginIcons/naver.svg'}
        width={40}
        height={40}
        alt="sns login for naver"
        className="absolute left-10"
      />
      <p>네이버 로그인</p>
    </button>
  );
}

export function KakaoLoginButton() {
  return (
    <button className="bg-[#FFD600] w-[540px] h-[66px] rounded-2xl text-[#341C15] text-2xl flex justify-center items-center relative">
      <Image
        src={'/icons/LoginIcons/kakao.svg'}
        width={40}
        height={40}
        alt="sns login for kakao"
        className="absolute left-10"
      />
      <p>카카오톡 로그인</p>
    </button>
  );
}
