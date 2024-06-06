'use client';

import AgreementModal from '@/components/Login/LoginModal/AgreementModal';
import EmailVerificationModal from '@/components/Login/LoginModal/EmailVerificationModal';
import ProfileSetupModal from '@/components/Login/LoginModal/ProfileSetupModal';
import SocialLoginModal from '@/components/Login/LoginModal/SocialLoginModal';
import { useMultistepForm } from '@/hooks/useMultistepForm';

export type LoginStepProps = {
  onNext?: () => void;
  onClose: () => void;
};

const LoginStep = ({ onClose }: LoginStepProps) => {
  const { step, next } = useMultistepForm([
    <SocialLoginModal key="social" onNext={handleNext} onClose={onClose} />,
    <AgreementModal key="agreement" onNext={handleNext} onClose={onClose} />,
    // <EmailVerificationModal key="email" onNext={handleNext} onClose={onClose} />,
    <ProfileSetupModal key="profile" onClose={onClose} />,
  ]);

  function handleNext() {
    next();
  }

  return <>{step}</>;
};

export default LoginStep;
