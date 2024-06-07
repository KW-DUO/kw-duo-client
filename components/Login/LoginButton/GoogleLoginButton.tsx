import Image from 'next/image';
import { useTranslation } from 'react-i18next';

type GoogleLoginButtonProps = {
  onClick: () => void;
};

export const GoogleLoginButton = ({ onClick }: GoogleLoginButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      className="bg-white w-[540px] h-[66px] mb-8 rounded-2xl text-black text-2xl flex justify-center items-center relative outline-none border-gray-400 border"
      onClick={onClick}
    >
      <Image
        src={'/icons/LoginIcons/google.svg'}
        width={40}
        height={40}
        alt="sns login for google"
        className="absolute left-10"
      />
      <p>{t('login.googleLogin')}</p>
    </button>
  );
};
