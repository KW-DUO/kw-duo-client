import LoginModal from './LoginModal';
import { departments, useGetDepartmentOptions } from '@/constant/department';
import { techStack } from '@/constant/techStack';
import { positions, usePositionOptions } from '@/constant/position';
import { useForm } from 'react-hook-form';
import { UserProfileSetupInfo } from '@/types';
import FormField from './FormField';
import FormFieldSelect from './FormFieldSelect';
import { apiUrl } from '@/constant/api';
import { useTranslation } from 'react-i18next';
import { useCodingTestOptions } from '@/constant/codingTestLanguages';

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
  const { t } = useTranslation();

  // POST 요청
  const onSubmit = async (data: UserProfileSetupInfo) => {
    try {
      // 임시
      data.oAuthId = '1';
      // data.profileImgId = 1;
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

      // 응답 본문이 비어 있는지 확인
      const text = await response.text();
      const responseData = text ? JSON.parse(text) : {};

      if (response.ok) {
        alert(t('login.profileSetup.submitSuccess'));
        // handleModalClose();
        onClose();
      } else {
        throw new Error(responseData.message ?? '회원가입 POST 실패');
        alert('서버 응답 에러');
      }
    } catch (error: any) {
      console.error('회원가입 POST 실패 에러 메시지:', error.message);
      alert('네트워크 실패');
    }
  };

  const departmentOptions = useGetDepartmentOptions();
  const positionOptions = usePositionOptions();
  const codingTestLaguageOptions = useCodingTestOptions();

  return (
    <LoginModal onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="py-10 px-16">
        <FormField
          label={t('login.profileSetup.nickname')}
          isRequired={true}
          register={register}
          name="nickname"
          placeholder={t('login.profileSetup.nicknamePlaceholder')}
          errors={errors}
        />

        <FormFieldSelect
          label={t('login.profileSetup.department')}
          isRequired={true}
          options={departmentOptions}
          name="department"
          placeholder={t('login.profileSetup.departmentPlaceholder')}
          setValue={setValue}
          errors={errors}
        />

        <FormFieldSelect
          label={t('login.profileSetup.techStack')}
          isRequired={true}
          options={techStack}
          isMulti={true}
          name="techStack"
          placeholder={t('login.profileSetup.techStackPlaceholder')}
          setValue={setValue}
          errors={errors}
        />

        <FormFieldSelect
          label={t('login.profileSetup.position')}
          isRequired={true}
          options={positionOptions}
          name="position"
          placeholder={t('login.profileSetup.positionPlaceholder')}
          setValue={setValue}
          errors={errors}
        />

        <FormFieldSelect
          label={t('login.profileSetup.codingTestLanguage')}
          isRequired={true}
          options={codingTestLaguageOptions}
          name="codingTestLanguage"
          placeholder={t('login.profileSetup.codingTestLanguagePlaceholder')}
          setValue={setValue}
          errors={errors}
        />

        <FormField
          label={t('login.profileSetup.githubUrl')}
          isRequired={false}
          register={register}
          name="githubUrl"
          placeholder={t('login.profileSetup.githubUrlPlaceholder')}
          errors={errors}
        />

        <FormField
          label={t('login.profileSetup.baekjoonId')}
          isRequired={false}
          register={register}
          name="baekjoonId"
          placeholder={t('login.profileSetup.baekjoonIdPlaceholder')}
          errors={errors}
        />

        <button
          type="submit"
          className="bg-[#D9D9D9] h-14 w-full text-[#767676] font-bold rounded-lg text-2xl"
        >
          {t('login.profileSetup.submit')}
        </button>
      </form>
    </LoginModal>
  );
};

export default ProfileSetupModal;
