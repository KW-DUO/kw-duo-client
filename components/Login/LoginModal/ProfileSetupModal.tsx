import LoginModal from './LoginModal';
import { departments } from '@/constant/department';
import { techStack } from '@/constant/techStack';
import { positions } from '@/constant/position';
import { useForm } from 'react-hook-form';
import { UserProfileSetupInfo } from '@/types';
import FormField from './FormField';
import FormFieldSelect from './FormFieldSelect';
import { apiUrl } from '@/constant/api';

type ProfileSetupModalProps = {
  onClose: () => void;
};

const ProfileSetupModal = ({ onClose }: ProfileSetupModalProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserProfileSetupInfo>();

  // POST 요청
  const onSubmit = async (data: UserProfileSetupInfo) => {
    try {
      // 임시
      data.oAuthId = '1';
      data.profileImgId = 1;
      data.email = '1';

      data.githubUrl = data.githubUrl === '' ? null : data.githubUrl;
      data.baekjoonId = data.baekjoonId === '' ? null : data.baekjoonId;

      const response = await fetch(`${apiUrl}/members/join`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        alert('가입을 축하드립니다!');
        // handleModalClose();
      } else {
        throw new Error(responseData.message ?? '회원가입 POST 실패');
        alert('서버 응답 에러');
      }
    } catch (error: any) {
      console.error('회원가입 POST 실패 에러 메시지:', error.message);
      alert('네트워크 실패');
    }
  };

  return (
    <LoginModal onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="py-10 px-16">
        <FormField
          label="닉네임"
          isRequired={true}
          register={register}
          name="nickname"
          placeholder="닉네임을 작성해주세요"
          errors={errors}
        />

        <FormFieldSelect
          label="학과"
          isRequired={true}
          options={departments}
          name="department"
          placeholder="학과 선택"
          setValue={setValue}
          errors={errors}
        />

        <FormFieldSelect
          label="기술스택(복수 선택 가능)"
          isRequired={true}
          options={techStack}
          isMulti={true}
          name="techStack"
          placeholder="기술스택 선택"
          setValue={setValue}
          errors={errors}
        />

        <FormFieldSelect
          label="포지션 선택"
          isRequired={true}
          options={positions}
          name="position"
          placeholder="포지션 선택"
          setValue={setValue}
          errors={errors}
        />

        <FormField
          label="깃허브 주소(선택)"
          isRequired={false}
          register={register}
          name="githubUrl"
          placeholder="깃허브 주소를 입력해주세요"
          errors={errors}
        />

        <FormField
          label="백준 ID (선택)"
          isRequired={false}
          register={register}
          name="baekjoonId"
          placeholder="백준 ID를 적어주세요"
          errors={errors}
        />

        <button
          type="submit"
          className="bg-[#D9D9D9] h-14 w-full text-[#767676] font-bold rounded-lg text-2xl"
        >
          가입 완료
        </button>
      </form>
    </LoginModal>
  );
};

export default ProfileSetupModal;
