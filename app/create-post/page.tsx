'use client';

import { useEffect, useState } from 'react';
import Editor from '@/components/Editor/Editor';
import Select from 'react-select';

// CONSTANT
import { positions } from '@/constant/position';
import { fields } from '@/constant/field/index';
import { projectType } from '@/constant/projectType';
import { departments } from '@/constant/department';
import { techStack } from '@/constant/techStack';
import { memberOptions } from '@/constant/memberOptions';

const CreatePost = () => {
  // 팀원 구하기(true)와 팀 구하기(false) 간의 토글 상태를 관리
  const [isTeamMemberSearch, setIsTeamMemberSearch] = useState<boolean>(true);
  const [selectedProjectType, setSelectedProjectType] = useState<string | undefined>();

  const [inputsDisabled, setInputsDisabled] = useState({
    department: false,
    class: false,
    fields: false,
    positions: false,
    techStack: false,
  });

  // false로 된 값들에 모든 값을 넣었는지 + 제목과 내용을 입력을 했는지 판단하기
  // 넣지 않는 부분에 alert 띄우고 스크롤 이벤트와 focus로 찾아주기

  useEffect(() => {
    switch (selectedProjectType) {
      case 'CLASS_PROJECT':
        setInputsDisabled({
          department: false,
          class: false,
          fields: true,
          positions: false,
          techStack: false,
        });
        break;
      case 'GRADUATION_PROJECT':
        setInputsDisabled({
          department: false,
          class: true,
          fields: false,
          positions: false,
          techStack: false,
        });
        break;
      case 'SIDE_PROJECT':
        setInputsDisabled({
          department: true,
          class: true,
          fields: false,
          positions: false,
          techStack: false,
        });
        break;
      default:
        setInputsDisabled({
          department: false,
          class: false,
          fields: false,
          positions: false,
          techStack: false,
        });
    }
  }, [selectedProjectType]);

  const handleProjectTypeChange = (option: string | undefined) => {
    setSelectedProjectType(option);
  };

  return (
    <main className="w-[1024px] mx-auto pt-24 pb-16">
      {/* 토글 버튼 */}
      <section className="flex gap-5 font-bold text-white mb-8">
        <button
          className={`py-3 rounded-3xl w-[200px] ${isTeamMemberSearch ? 'bg-secondary' : 'bg-[#d9d9d9]'}`}
          onClick={() => setIsTeamMemberSearch(true)}
        >
          팀원 구하기
        </button>
        <button
          className={`py-3 rounded-3xl w-[200px] ${!isTeamMemberSearch ? 'bg-secondary' : 'bg-[#d9d9d9]'}`}
          onClick={() => setIsTeamMemberSearch(false)}
        >
          팀 구하기
        </button>
      </section>

      {/* 기본정보 입력 */}
      <form action="">
        <section className="text-black mb-14">
          <h1 className="py-4 text-2xl font-bold">기본정보를 입력해주세요</h1>
          <div className="border-t-2"></div>
          <ul className="grid grid-cols-2 gap-10 mt-4 mb-5">
            <li className="w-full">
              <label className=" w-full ">
                <div className="mb-2.5">프로젝트 구분</div>

                <Select
                  options={projectType}
                  isDisabled={false}
                  placeholder={'수업 프로젝트 / 졸업 프로젝트 / 사이드 프로젝트'}
                  onChange={(e) => {
                    handleProjectTypeChange(e?.value);
                  }}
                  className="mt-2.5"
                />
              </label>
            </li>
            <li className="w-full">
              {/* label 로 감싸보기 */}
              <label className=" w-full ">
                <div className="mb-2.5">학과 선택</div>
                <Select
                  options={departments}
                  isDisabled={inputsDisabled.department}
                  placeholder={'컴정공/소프트/정융'}
                />
              </label>
            </li>

            <li className="w-full">
              {/* label은 id 설정할 필요없이 태그만 이동하면되니 label로 적용시킴 -> 단점: 태그를 감싸니 font-bold 가 상속됨 */}
              <label className=" w-full ">
                <div className="mb-2.5">수업</div>
                <Select
                  options={projectType}
                  isDisabled={inputsDisabled.class}
                  placeholder={'수업 선택'}
                />
              </label>
            </li>
            <li className="w-full">
              <label className=" w-full ">
                <div className="mb-2.5">관심 분야</div>
                <Select
                  options={fields}
                  isDisabled={inputsDisabled.fields}
                  placeholder={'웹 / 앱 / 인공지능 / 게임 / 블록체인 / 사물인터넷...'}
                  isMulti
                />
              </label>
            </li>
            <li className="w-full">
              <label className=" w-full">
                <div className="mb-2.5"> {isTeamMemberSearch ? '모집 포지션' : '지원 포지션'}</div>
                <Select
                  options={positions}
                  isDisabled={inputsDisabled.positions}
                  placeholder={'프론트엔드 / 백엔드 / 안드로이드 / IOS / 게임...'}
                  isMulti
                />
              </label>
            </li>
            <li className="w-full">
              <label className=" w-full">
                <div className="mb-2.5">기술 스택</div>
                <Select
                  options={techStack}
                  isDisabled={inputsDisabled.techStack}
                  placeholder={'기술 스택'}
                  isMulti
                />
              </label>
            </li>
            {isTeamMemberSearch && (
              <li className="w-full">
                <label className=" w-full">
                  <div className="mb-2.5">모집 인원</div>
                  <Select options={memberOptions} isDisabled={false} placeholder={'인원 설정'} />
                </label>
              </li>
            )}
          </ul>
        </section>
        {/* 프로젝트 소개 */}
        <section className="text-black">
          <h1 className="text-2xl font-bold mb-4">
            {isTeamMemberSearch
              ? '프로젝트에 대해 소개해주세요'
              : '어떤 팀을 원하는지 작성해주세요'}
          </h1>
          <div className="border-t-2"></div>
          <section className="mt-5 mb-2">
            <input
              placeholder="글 제목을 입력해주세요!"
              type="text"
              className="rounded w-full h-14 mb-2 font-bold outline-none text-2xl"
            />
            <Editor />
          </section>

          {/* 제출 버튼 */}
          <button className="bg-secondary text-white w-full h-16 font-bold rounded">
            등록하기
          </button>
        </section>
      </form>
    </main>
  );
};

export default CreatePost;
