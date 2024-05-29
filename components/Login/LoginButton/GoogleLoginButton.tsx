import Image from 'next/image';

export const GoogleLoginButton = () => {
  return (
    <button className="bg-white w-[540px] h-[66px] mb-8 rounded-2xl text-black text-2xl flex justify-center items-center relative outline-none border-gray-400 border">
      <Image
        src={'/icons/loginIcons/google.svg'}
        width={40}
        height={40}
        alt="sns login for naver"
        className="absolute left-10"
      />
      <p>구글 로그인</p>
    </button>
  );
};
