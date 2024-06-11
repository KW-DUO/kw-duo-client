import LoginModal from './LoginModal';
import { useGetDepartmentOptions } from '@/constant/department';
import { techStack } from '@/constant/techStack';
import { usePositionOptions } from '@/constant/position';
import { useForm } from 'react-hook-form';
import { UserProfileSetupInfo } from '@/types';
import FormField from './FormField';
import FormFieldSelect from './FormFieldSelect';
import { useTranslation } from 'react-i18next';
import { useCodingTestOptions } from '@/constant/codingTestLanguages';
import { useUserStore } from '@/store/userStore';
import { client } from '@/util/HttpClient';
import { MyPageForm } from '@/types/mypageFormTypes';

type ProfileSetupModalProps = {
  onClose: () => void;
};

const fetchProfileData = async () => {
  return client.fetch<MyPageForm>('/members/info', 'GET');
};

const ProfileSetupModal = ({ onClose }: ProfileSetupModalProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserProfileSetupInfo>();
  const { t } = useTranslation();
  const userInfo = useUserStore((state) => state.userInfo);

  // POST 요청
  const onSubmit = async (data: UserProfileSetupInfo) => {
    const responseData = {
      oAuthId: userInfo?.oAuthId,
      email: userInfo?.email,
      githubUrl: data.githubUrl === '' ? null : data.githubUrl,
      baekjoonId: data.baekjoonId === '' ? null : data.baekjoonId,
    };

    try {
      const response = await client.fetch(`/members/join`, 'POST', {
        body: responseData,
        headers: {
          'Content-type': 'application/json',
        },
      });

      // 응답 본문이 비어 있는지 확인
      // const text = await response.text();
      // const responseData = text ? JSON.parse(text) : {};

      if (response) {
        alert(t('login.profileSetup.submitSuccess'));
        await fetchProfileData();
        onClose();
      } else {
        throw new Error('회원가입 POST 실패');
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
