import { ChevronRight, CircleCheck } from 'lucide-react';

type AgreementItemProps = {
  text: string;
  agreed: boolean;
  onClick: () => void;
};

export const AgreementItem = ({ text, agreed, onClick }: AgreementItemProps) => {
  return (
    <div className="flex items-center mb-5 justify-between" onClick={onClick}>
      <div className="flex items-center">
        <CircleCheck size={30} color={agreed ? '#A32828' : '#999999'} />
        <p className="ml-2">{text}</p>
      </div>
      <ChevronRight />
    </div>
  );
};
