'use client';

import AgreementModal from '@/components/Login/LoginModal/AgreementModal';
import EmailVerificationModal from '@/components/Login/LoginModal/EmailVerificationModal';
import ProfileSetupModal from '@/components/Login/LoginModal/ProfileSetupModal';
import SocialLoginModal from '@/components/Login/LoginModal/SocialLoginModal';
import { useMultistepForm } from '@/hooks/useMultistepForm';

export type LoginStepProps = {
  onNext: () => void;
};

const LoginStep = () => {
  const { step, next } = useMultistepForm([
    <SocialLoginModal key="social" onNext={handleNext} />,
    <AgreementModal key="agreement" onNext={handleNext} />,
    <EmailVerificationModal key="email" onNext={handleNext} />,
    <ProfileSetupModal key="profile" />,
  ]);

  function handleNext() {
    next();
  }

  return <>{step}</>;
};

export default LoginStep;
