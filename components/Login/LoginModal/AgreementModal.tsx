import LoginModal from './LoginModal';
import { CircleCheck } from 'lucide-react';
import { LoginStepProps } from '../LoginStep/LoginStep';
import { useState } from 'react';
import { AgreementItem } from './AgreementItem';

type AgreementProps = {
  text: string;
  agreed: boolean;
};

export type AgreementItemProps = AgreementProps & {
  onClick: () => void;
};

const AgreementModal = ({ onNext, onClose }: LoginStepProps) => {
  const [agreements, setAgreements] = useState<AgreementProps[]>([
    { text: '서비스이용약관 동의 (필수)', agreed: false },
    { text: '개인정보 수집 및 이용 동의 (필수)', agreed: false },
  ]);

  const allAgreed = agreements.every((agreement) => agreement.agreed);

  const handleAgreementClick = (index: number) => {
    const newAgreements = [...agreements];
    newAgreements[index].agreed = !newAgreements[index].agreed;
    setAgreements(newAgreements);
  };

  const handleAllAgree = () => {
    const newAgreements = agreements.map((agreement) => ({ ...agreement, agreed: !allAgreed }));
    setAgreements(newAgreements);
  };

  return (
    <LoginModal onClose={onClose}>
      <section className="font-bold py-7 px-10">
        <h1 className="text-3xl mb-10">약관 동의</h1>
        <div className="text-2xl mb-20">
          <div className="flex items-center mb-5" onClick={handleAllAgree}>
            <CircleCheck size={30} color={allAgreed ? '#A32828' : '#999999'} />{' '}
            <p className="ml-2">모두 동의합니다</p>
          </div>
          <div className="border-b-2 mb-5"></div>
          {agreements.map((agreement, index) => (
            <AgreementItem
              key={index}
              text={agreement.text}
              agreed={agreement.agreed}
              onClick={() => handleAgreementClick(index)}
            />
          ))}
        </div>
        <button
          onClick={onNext}
          className={`h-14 w-full text-white rounded-lg text-2xl outline-none ${
            allAgreed ? 'bg-secondary' : 'bg-[#D9D9D9]'
          }`}
        >
          확인
        </button>
      </section>
    </LoginModal>
  );
};

export default AgreementModal;
