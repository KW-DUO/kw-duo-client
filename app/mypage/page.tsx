'use client';
import { userImageURL } from '@/constant/images';
import { positions } from '@/constant/position';
import { techStack } from '@/constant/techStack';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const Mypage = () => {
  const {} = useForm();

  return (
    <main className="max-w-[500px] mx-auto p-5">
      {/* 이미지 */}
      <div className="flex justify-center items-center mb-10">
        <label className="cursor-pointer">
          <Image src={userImageURL} alt="user-image" width={150} height={150} />
          <div className="text-center">프로필 사진 변경</div>
        </label>
      </div>

      <form action="" className="flex flex-col gap-4">
        {/* 닉네임 */}
        <label className="mb-5">
          <div className="text-sm font-bold">
            닉네임<span className="text-custom-red">*</span>
          </div>
          <input
            type="text"
            placeholder="닉네임을 입력해주세요."
            className="border w-full py-3 px-3 rounded"
          />
        </label>
        {/* 학과 */}
        <label className="mb-5">
          <div className="text-sm font-bold">
            학과<span className="text-custom-red">*</span>
          </div>
          <input
            type="text"
            disabled={true}
            value={'kw-duo'}
            className="border w-full py-3 px-3 rounded bg-gray"
          />
        </label>

        {/* 포지션 */}
        <label className="mb-5">
          <div className="text-sm font-bold">
            포지션<span className="text-custom-red">*</span>
          </div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={positions}
            className=""
          />
        </label>

        {/* 자기소개 */}
        <label className="w-full">
          <div className="text-sm font-bold">
            자기소개<span className="text-custom-red">*</span>
          </div>
          <textarea
            name=""
            id=""
            cols={10}
            rows={10}
            placeholder="자기소개 입력"
            className="border rounded py-3 px-3 h-28 w-full resize-none"
          ></textarea>
        </label>
        {/* 기술스택 */}
        <label className="mb-5">
          <div className="text-sm font-bold">
            기술 스택<span className="text-custom-red">*</span>
          </div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={techStack}
          />
        </label>

        {/* 나의 GitHub URL */}
        <label className="mb-5">
          <div className="text-sm font-bold">나의 GitHub URL</div>
          <input
            type="text"
            placeholder="깃허브 링크 추가해보세요!"
            className="border w-full py-3 px-3 rounded"
          />
        </label>
        {/* 백준 ID */}
        <label className="mb-5">
          <div className="text-sm font-bold">백준 ID</div>
          <input
            type="text"
            placeholder="백준 ID를 넣어 자신의 티어를 뽐내봐요!"
            className="border w-full py-3 px-3 rounded"
          />
        </label>
        <button className="h-12 w-full bg-secondary text-white font-bold text-sm rounded">
          프로필 저장
        </button>
      </form>
    </main>
  );
};

export default Mypage;
