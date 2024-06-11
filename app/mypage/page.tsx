'use client';
import { usePositionOptions } from '@/constant/position';
import { techStack } from '@/constant/techStack';
import { MyPageForm } from '@/types/mypageFormTypes';
import { userImageURL } from '@/constant/images';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import makeAnimated from 'react-select/animated';
import { getDepartmentLabel } from '@/constant/department';
import { queryKeys } from '@/queries/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import LoadingSpinner from '@/components/loading/LoadingSpinner';
import SelectField from '@/components/createPost/SelectField';
import { client } from '@/util/HttpClient';

const animatedComponents = makeAnimated();

const Mypage = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<MyPageForm>();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  const {
    data: profileData,
    error,
    isLoading,
  } = useQuery<MyPageForm>({
    queryKey: queryKeys.profileData(),
    queryFn: () => {
      return client.fetch<MyPageForm>('/members/info', 'GET');
    },
  });

  const positionOptions = usePositionOptions();

  useEffect(() => {
    if (!profileData) return;

    reset(profileData);
  }, [profileData, reset, t]);

  const onSubmit = async (data: MyPageForm) => {
    try {
      const response = await client.fetch('/members/info', 'POST', {
        body: {
          nickname: data.nickname,
          department: data.department,
          position: data.position,
          bio: data.bio,
          techStack: data.techStack,
          githubUrl: data.githubUrl,
          baekjoonId: data.baekjoonId,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        alert('수정완료되었습니다!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('제출 중 오류가 발생했습니다.');
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (isLoading) return <LoadingSpinner />;

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="max-w-[500px] mx-auto p-5 limark list-none">
      <div className="flex justify-center items-center mb-10">
        <label className="cursor-pointer" onClick={handleImageClick}>
          <img src={userImageURL} alt="user-image" className="w-[150px] h-[150px] rounded-full" />
          <div className="text-center">{t('mypage.profileImageChange')}</div>
        </label>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          // onChange={handleImageChange}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <label className="mb-5">
          <div className="text-sm font-bold">
            {t('mypage.nickname')}
            <span className="text-custom-red">{t('mypage.required')}</span>
          </div>
          <input
            type="text"
            placeholder={t('mypage.nicknamePlaceholder')}
            {...register('nickname', { required: t('mypage.errorMessage.nickname') })}
            className="border w-full py-3 px-3 rounded"
          />
          {errors.nickname && <span className="text-red-500">{errors.nickname.message}</span>}
        </label>

        <label className="mb-5">
          <div className="text-sm font-bold">
            {t('mypage.department')}
            <span className="text-custom-red">{t('mypage.required')}</span>
          </div>
          <input
            type="text"
            disabled={true}
            value={getDepartmentLabel(profileData?.department || '', t)}
            className="border w-full py-3 px-3 rounded bg-gray"
          />
        </label>

        <label className="mb-5">
          <div className="text-sm font-bold">
            {t('mypage.position')}
            <span className="text-custom-red">{t('mypage.required')}</span>
          </div>
          <SelectField
            control={control}
            // label={t('mypage.positionPlaceholder')}
            name="position"
            options={positionOptions}
            placeholder={t('mypage.positionPlaceholder')}
          />

          {errors.position && <span className="text-red-500">{errors.position.message}</span>}
        </label>

        <label className="w-full">
          <div className="text-sm font-bold">{t('mypage.bio')}</div>
          <textarea
            id="bio"
            {...register('bio')}
            cols={10}
            rows={10}
            placeholder={t('mypage.bioPlaceholder')}
            className="border rounded py-3 px-3 h-28 w-full resize-none"
          ></textarea>
          {errors.bio && <span className="text-red-500">{errors.bio.message}</span>}
        </label>

        <label className="mb-5">
          <div className="text-sm font-bold">
            {t('mypage.techStack')}
            <span className="text-custom-red">{t('mypage.required')}</span>
          </div>

          <SelectField
            control={control}
            // label={t('mypage.positionPlaceholder')}
            name="techStack"
            options={techStack}
            placeholder={t('mypage.techStackPlaceholder')}
            isMulti={true}
          />

          {errors.techStack && <span className="text-red-500">{errors.techStack.message}</span>}
        </label>

        <label className="mb-5">
          <div className="text-sm font-bold">{t('mypage.githubUrl')}</div>
          <input
            type="text"
            placeholder={t('mypage.githubUrlPlaceholder')}
            {...register('githubUrl')}
            className="border w-full py-3 px-3 rounded"
          />
        </label>

        <label className="mb-5">
          <div className="text-sm font-bold">{t('mypage.baekjoonId')}</div>
          <input
            type="text"
            placeholder={t('mypage.baekjoonIdPlaceholder')}
            {...register('baekjoonId')}
            className="border w-full py-3 px-3 rounded"
          />
        </label>

        <button
          type="submit"
          className="h-12 w-full bg-secondary text-white font-bold text-sm rounded"
        >
          {t('mypage.submit')}
        </button>
      </form>
    </main>
  );
};

export default Mypage;
