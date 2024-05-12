import Image from 'next/image';

export const KakaoLoginButton = () => {
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
};
