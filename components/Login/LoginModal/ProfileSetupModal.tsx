'use client';

import React from 'react';
import LoginModal from './LoginModal';
import { useForm, UseFormRegister } from 'react-hook-form';
import Select from 'react-select';
import { departments } from '@/constant/department';
import { techStack } from '@/constant/techStack';
import { positions } from '@/constant/position';

type UserProfileSetupInfo = {
  oAuthId: string;
  profileImgId: number;
  nickname: string;
  department: string;
  techStack: string[];
  position: string;
  githubUrl?: string;
  baekjoonId?: string;
};

type FormFieldProps = {
  label: string;
  isRequired: boolean;
  register: UseFormRegister<UserProfileSetupInfo>;
  name: keyof UserProfileSetupInfo;
  placeholder: string;
};

type FormFieldSelectProps = {
  label: string;
  isRequired: boolean;
  options: any;
  isMulti?: boolean;
  name: keyof UserProfileSetupInfo;
  placeholder: string;
  setValue: (name: keyof UserProfileSetupInfo, value: any) => void;
};

type SelectedOptionsProps = {
  name: string;
  options: string | string[];
};

const ProfileSetupModal = () => {
  const { register, handleSubmit, setValue } = useForm<UserProfileSetupInfo>();

  const onSubmit = (data: any) => {
    console.log(data); // Submit form data to your backend or state management
  };

  // POST 요청
  // const onSubmit = async (data: any) => {
  //   try {
  //     const response = await fetch('https://kw-duo-server.onrender.com/members/join', {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json',
  //         // 'Authorization': `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     const responsData = await response.json();
  //     if (response.ok) {
  //       console.log('User created:', responsData);
  //     } else {
  //       throw new Error(responsData.message || 'Failed to create the post');
  //     }
  //   } catch (error: any) {
  //     console.error('Error creating post:', error.message);
  //   }
  // };

  return (
    <LoginModal>
      <form onSubmit={handleSubmit(onSubmit)} className="py-10 px-16">
        <FormField
          label="닉네임"
          isRequired={true}
          register={register}
          name="nickname"
          placeholder="닉네임을 작성해주세요"
        />

        <FormFieldSelect
          label="학과"
          isRequired={true}
          options={departments}
          name="department"
          placeholder="학과 선택"
          setValue={setValue}
        />

        <FormFieldSelect
          label="기술스택(복수 선택 가능)"
          isRequired={true}
          options={techStack}
          isMulti={true}
          name="techStack"
          placeholder="기술스택 선택"
          setValue={setValue}
        />

        <FormFieldSelect
          label="포지션 선택"
          isRequired={true}
          options={positions}
          name="position"
          placeholder="포지션 선택"
          setValue={setValue}
        />

        <FormField
          label="깃허브 주소(선택)"
          register={register}
          name="githubUrl"
          placeholder="깃허브 주소를 입력해주세요"
        />

        <FormField
          label="백준 ID (선택)"
          register={register}
          name="baekjoonId"
          placeholder="백준 ID를 적어주세요"
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

const FormField = ({ label, isRequired, register, name, placeholder }: any) => (
  <div className="mb-5">
    <label>
      <p>
        {label}
        {isRequired && <span className="text-[#0038FF]">(*필수)</span>}
      </p>
      <input
        {...register(name)}
        type="text"
        placeholder={placeholder}
        className="border border-[#CCCCCC] rounded px-2 py-1 mr-5"
      />
    </label>
    {label === '닉네임' && (
      <button className="bg-[#D9D9D9] px-4 py-1 rounded font-bold">중복 확인</button>
    )}
  </div>
);

const FormFieldSelect = ({
  label,
  isRequired,
  options,
  isMulti = false,
  name,
  placeholder,
  setValue,
}: FormFieldSelectProps) => {
  // 선택 변경 시 호출될 함수
  const onChange = (selectedOption: any) => {
    // 선택된 값 설정
    setValue(
      name,
      isMulti ? selectedOption.map((option: any) => option.value) : selectedOption.value
    );
  };

  return (
    <div className="mb-5">
      <label>
        <p>
          {label}
          {isRequired && <span className="text-[#0038FF]">(*필수)</span>}
        </p>
        <Select
          options={options}
          isMulti={isMulti}
          placeholder={placeholder}
          instanceId={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default ProfileSetupModal;
