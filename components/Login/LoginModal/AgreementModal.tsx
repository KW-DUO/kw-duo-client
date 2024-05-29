import LoginModal from './LoginModal';
import { CircleCheck } from 'lucide-react';
import { LoginStepProps } from '../LoginStep/LoginStep';
import { AgreementItem } from './AgreementItem';
import { useAgreements } from '@/hooks/useAgreements';

type AgreementProps = {
  id: number;
  text: string;
  agreed: boolean;
};

const initialAgreements: AgreementProps[] = [
  { id: 1, text: '서비스이용약관 동의 (필수)', agreed: false },
  { id: 2, text: '개인정보 수집 및 이용 동의 (필수)', agreed: false },
];

const AgreementModal = ({ onNext, onClose }: LoginStepProps) => {
  const { agreements, allAgreed, handleAgreementClick, handleAllAgree } =
    useAgreements(initialAgreements);

  return (
    <LoginModal onClose={onClose}>
      <section className="font-bold py-7 px-10">
        <h1 className="text-3xl mb-10">약관 동의</h1>
        <div className="text-2xl mb-20">
          <div className="flex items-center mb-5 cursor-pointer" onClick={handleAllAgree}>
            <CircleCheck size={30} color={allAgreed ? '#A32828' : '#999999'} />
            <p className="ml-2">모두 동의합니다</p>
          </div>
          <div className="border-b-2 mb-5"></div>
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
          확인
        </button>
      </section>
    </LoginModal>
  );
};

export default AgreementModal;
