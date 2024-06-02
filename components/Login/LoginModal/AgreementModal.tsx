import LoginModal from './LoginModal';
import { CircleCheck } from 'lucide-react';
import { LoginStepProps } from '../LoginStep/LoginStep';
import { AgreementItem } from './AgreementItem';
import { useAgreements } from '@/hooks/useAgreements';
import { useTranslation } from 'react-i18next';

type AgreementProps = {
  id: number;
  text: string;
  agreed: boolean;
};

const AgreementModal = ({ onNext, onClose }: LoginStepProps) => {
  const { t } = useTranslation();

  const initialAgreements: AgreementProps[] = [
    { id: 1, text: t('login.terms.agreeToTermsOfService'), agreed: false },
    { id: 2, text: t('login.terms.agreeToPersonalInformationCollectionAndUse'), agreed: false },
  ];

  const { agreements, allAgreed, handleAgreementClick, handleAllAgree } =
    useAgreements(initialAgreements);

  return (
    <LoginModal onClose={onClose}>
      <section className="font-bold py-7 px-10">
        <h1 className="text-3xl mb-10">{t('login.terms.termsAndConditions')}</h1>
        <div className="text-2xl mb-20">
          <div className="flex items-center mb-5 cursor-pointer" onClick={handleAllAgree}>
            <CircleCheck size={30} color={allAgreed ? '#A32828' : '#999999'} />
            <p className="ml-2">{t('login.terms.agreeToAll')}</p>
          </div>
          <hr className="border-b-2 mb-5"></hr>
          {agreements.map((agreement) => (
            <AgreementItem
              key={agreement.id}
              text={agreement.text}
              agreed={agreement.agreed}
              onClick={() => handleAgreementClick(agreement.id)}
            />
          ))}
        </div>
        <button
          onClick={allAgreed ? onNext : undefined}
          className={`h-14 w-full text-white rounded-lg text-2xl outline-none ${
            allAgreed ? 'bg-secondary cursor-pointer' : 'bg-[#D9D9D9] cursor-not-allowed'
          }`}
          disabled={!allAgreed}
        >
          {t('login.confirm')}
        </button>
      </section>
    </LoginModal>
  );
};

export default AgreementModal;
