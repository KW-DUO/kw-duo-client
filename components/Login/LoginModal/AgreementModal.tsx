import LoginModal from './LoginModal';
import Image from 'next/image';
import { CircleCheck, ChevronRight } from 'lucide-react';
import { LoginStepProps } from '@/app/loginStep/page';

// todo
// 클릭시, 이벤트 추가하기
// 버튼 색상 이벤트
// 동의서 자세히 보기 클릭시 아래로 향하기 애니메이션 및 동의 내용 보이도록 구현

const AgreementModal = ({ onNext }: LoginStepProps) => {
  return (
    <LoginModal>
      <section className="font-bold py-7 px-10">
        <h1 className="text-3xl mb-10">약관 동의</h1>
        <div className="text-2xl mb-20">
          <div className="flex items-center mb-5">
            <CircleCheck size={30} color="#999999" /> <p className="ml-2">모두 동의합니다</p>
          </div>
          <div className="border-b-2 mb-5"></div>
          <div className="flex items-center mb-5 justify-between">
            <div className="flex items-center">
              <CircleCheck size={30} color="#999999" />
              <p className="ml-2">서비스이용약관 동의 (필수)</p>{' '}
            </div>
            <ChevronRight />
          </div>
          <div className="flex items-center mb-5 justify-between">
            <div className="flex items-center">
              <CircleCheck size={30} color="#999999" />{' '}
              <p className="ml-2">개인정보 수집 및 이용 동의 (필수)</p>
            </div>
            <ChevronRight />
          </div>
        </div>
        {/* <button className="bg-primary h-14 w-full text-white rounded-lg text-2xl">확인</button> */}
        <button
          onClick={onNext}
          className="bg-[#D9D9D9] h-14 w-full text-white rounded-lg text-2xl outline-none"
        >
          확인
        </button>
      </section>
    </LoginModal>
  );
};

export default AgreementModal;
