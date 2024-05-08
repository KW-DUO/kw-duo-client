import { LoginStepProps } from '@/app/loginStep/page';
import LoginModal from './LoginModal';

// todo
// post 요청 처리
// 인증번호 숫자만 입력할 수 있도록 하기

const EmailVerificationModal = ({ onNext }: LoginStepProps) => {
  return (
    <LoginModal>
      <section className="font-bold px-10 py-16 text-2xl">
        <h1 className="text-3xl mb-14">광운대학교 웹메일 인증</h1>
        <div className="flex items-center justify-between mb-10">
          <label className="flex items-center">
            <input
              type="text"
              className="border bg-[#D9D9D9] outline-none px-3 py-2 rounded-lg w-1/2 mr-5"
            />
            <div>@ kw.ac.kr</div>
          </label>
          <button className="bg-[#D9D9D9] px-3 py-2 rounded w-[148px] h-[50px]">인증하기</button>
        </div>
        <div className="mb-10 flex justify-between">
          <label>
            <input type="text" placeholder="인증코드 6자리 입력" className="border-2 px-3 py-2" />
          </label>
          <button className="bg-[#D9D9D9] px-3 py-2 rounded w-[140px] h-[50px]">확인</button>
        </div>
        <button
          onClick={onNext}
          className="bg-[#D9D9D9] h-14 w-full text-white rounded-lg text-2xl"
        >
          다음
        </button>
      </section>
    </LoginModal>
  );
};

export default EmailVerificationModal;
