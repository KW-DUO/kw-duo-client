'use client';
import { positions, getPositionLabel } from '@/constant/position';
import { techStack } from '@/constant/techStack';
import { mypageForm } from '@/types/mypageFormTypes';
import { userImageURL } from '@/constant/images';
import React, { useEffect, useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { apiUrl } from '@/constant/api';
import { getDepartmentLabel } from '@/constant/department';

const animatedComponents = makeAnimated();

const Mypage = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<mypageForm>();

  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState<mypageForm | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      fetch(`${apiUrl}/members/info`)
        .then((response) => response.json())
        .then((data) => {
          const formattedData = {
            ...data,
            department: getDepartmentLabel(data.department),
            position: { label: getPositionLabel(data.position), value: data.position },
            techStack: data.techStack.map((tech: string) => ({ label: tech, value: tech })),
          };
          setProfileData(formattedData);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching profile data:', error);
          setLoading(false);
        });
    }
  }, [isMounted]);

  useEffect(() => {
    if (profileData) {
      for (const key in profileData) {
        if (profileData.hasOwnProperty(key)) {
          setValue(key as keyof mypageForm, profileData[key as keyof mypageForm]);
        }
      }
    }
  }, [profileData, setValue]);

  const onSubmit = async (data: mypageForm) => {
    try {
      const response = await fetch(`${apiUrl}/members/info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: data.nickname,
          profileImgId: data.profileImgId,
          department: data.department,
          position: data.position.value,
          bio: data.bio,
          techStack: data.techStack.map((stack) => stack.value),
          githubUrl: data.githubUrl,
          baekjoonId: data.baekjoonId,
        }),
      });

      if (response.ok) {
        alert('수정완료되었습니다!');
      } else {
        const errorData = await response.json();
        console.error('Error submitting form:', errorData);
        alert('제출 중 오류가 발생했습니다.');
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

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch(`${apiUrl}/file/upload-profile-image`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          setProfileData((prevData) =>
            prevData
              ? { ...prevData, profileImgUrl: result.imageUrl, profileImgId: result.imageId }
              : null
          );
          setValue('profileImgId', result.imageId);
          setValue('profileImgUrl', result.imageUrl);
          alert('이미지 업로드가 성공했습니다!');
        } else {
          const errorData = await response.json();
          console.error('Error uploading image:', errorData);
          alert('이미지 업로드 중 오류가 발생했습니다.');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('이미지 업로드 중 오류가 발생했습니다.');
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <main className="max-w-[500px] mx-auto p-5">
      <div className="flex justify-center items-center mb-10">
        <label className="cursor-pointer" onClick={handleImageClick}>
          <img
            src={profileData?.profileImgUrl ?? userImageURL}
            alt="user-image"
            className="w-[150px] h-[150px] rounded-full"
          />
          <div className="text-center">프로필 사진 변경</div>
        </label>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <label className="mb-5">
          <div className="text-sm font-bold">
            닉네임<span className="text-custom-red">*</span>
          </div>
          <input
            type="text"
            placeholder="닉네임을 입력해주세요."
            {...register('nickname', { required: '닉네임을 입력해주세요.' })}
            className="border w-full py-3 px-3 rounded"
          />
          {errors.nickname && <span className="text-red-500">{errors.nickname.message}</span>}
        </label>

        <label className="mb-5">
          <div className="text-sm font-bold">
            학과<span className="text-custom-red">*</span>
          </div>
          <input
            type="text"
            disabled={true}
            {...register('department')}
            className="border w-full py-3 px-3 rounded bg-gray"
          />
        </label>

        <label className="mb-5">
          <div className="text-sm font-bold">
            포지션<span className="text-custom-red">*</span>
          </div>
          <Controller
            name="position"
            control={control}
            rules={{ required: '포지션을 선택해주세요.' }}
            render={({ field }) => (
              <Select
                {...field}
                closeMenuOnSelect={true}
                components={animatedComponents}
                options={positions}
              />
            )}
          />
          {errors.position && <span className="text-red-500">{errors.position.message}</span>}
        </label>

        <label className="w-full">
          <div className="text-sm font-bold">자기소개</div>
          <textarea
            id="bio"
            {...register('bio')}
            cols={10}
            rows={10}
            placeholder="자기소개 입력"
            className="border rounded py-3 px-3 h-28 w-full resize-none"
          ></textarea>
          {errors.bio && <span className="text-red-500">{errors.bio.message}</span>}
        </label>

        <label className="mb-5">
          <div className="text-sm font-bold">
            기술 스택<span className="text-custom-red">*</span>
          </div>
          <Controller
            name="techStack"
            control={control}
            rules={{ required: '기술 스택을 선택해주세요.' }}
            render={({ field }) => (
              <Select
                {...field}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={techStack}
              />
            )}
          />
          {errors.techStack && <span className="text-red-500">{errors.techStack.message}</span>}
        </label>

        <label className="mb-5">
          <div className="text-sm font-bold">나의 GitHub URL</div>
          <input
            type="text"
            placeholder="깃허브 링크 추가해보세요!"
            {...register('githubUrl')}
            className="border w-full py-3 px-3 rounded"
          />
        </label>

        <label className="mb-5">
          <div className="text-sm font-bold">백준 ID</div>
          <input
            type="text"
            placeholder="백준 ID를 넣어 자신의 티어를 뽐내봐요!"
            {...register('baekjoonId')}
            className="border w-full py-3 px-3 rounded"
          />
        </label>

        <button
          type="submit"
          className="h-12 w-full bg-secondary text-white font-bold text-sm rounded"
        >
          프로필 저장
        </button>
      </form>
    </main>
  );
};

export default Mypage;
