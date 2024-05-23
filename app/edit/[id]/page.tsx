'use client';

import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

// COMPONENTS
import Editor from '@/components/Editor/Editor';

// CONSTANTS
import { wantedPosition } from '@/constant/wantedPosition';
import { interestingField } from '@/constant/interestingField';
import { projectType } from '@/constant/projectType';
import { departments } from '@/constant/department';
import { techStack } from '@/constant/techStack';
import { recruitNumber } from '@/constant/recruitNumber';
import { departmentClasses } from '@/constant/class';
import { apiUrl } from '@/constant/api';
import SelectField from '@/components/createPost/SelectField';
import { useRouter } from 'next/navigation';

// todo: 넣지 않는 부분에 alert 띄우고 스크롤 이벤트와 focus로 찾아주기

type FormFields = {
  projectType: string;
  department?: string | null;
  class?: string | null;
  interestingField?: string[];
  wantedPosition: string[];
  techStack: string[];
  recruitNumber?: number | null;
  title: string;
  content: string;
};

const DEFAULT_VALUES = {
  projectType: '',
  department: null,
  class: null,
  interestingField: [],
  wantedPosition: [],
  techStack: [],
  recruitNumber: null,
  title: '',
  content: '',
};

type Props = {
  params: { id: number };
};

type PostType = 'FIND_TEAMMATE' | 'FIND_TEAM';

const EditPost = ({ params }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  // https://github.com/JedWatson/react-select/issues/5459 에러 해결
  const router = useRouter();

  // 팀원 구하기(true)와 팀 구하기(false) 간의 토글 상태를 관리
  const [postType, setPostType] = useState<PostType>('FIND_TEAMMATE');
  const [selectedProjectType, setSelectedProjectType] = useState<string | undefined>();

  // input 활성화 관리
  const [formFieldsDisabled, setFormFieldsDisabled] = useState({
    department: true,
    class: true,
    interestingField: true,
    wantedPosition: true,
    techStack: true,
    recruitNumber: true,
  });

  // 프로젝트 구분 선택에 따른 input 활성화 처리
  useEffect(() => {
    switch (selectedProjectType) {
      case 'CLASS_PROJECT':
        setFormFieldsDisabled({
          department: false,
          class: false,
          interestingField: true,
          wantedPosition: false,
          techStack: false,
          recruitNumber: postType !== 'FIND_TEAMMATE',
        });
        break;
      case 'GRADUATION_PROJECT':
        setFormFieldsDisabled({
          department: false,
          class: true,
          interestingField: false,
          wantedPosition: false,
          techStack: false,
          recruitNumber: postType !== 'FIND_TEAMMATE',
        });
        break;
      case 'SIDE_PROJECT':
        setFormFieldsDisabled({
          department: true,
          class: true,
          interestingField: false,
          wantedPosition: false,
          techStack: false,
          recruitNumber: postType !== 'FIND_TEAMMATE',
        });
        break;
      default:
        setFormFieldsDisabled({
          department: true,
          class: true,
          interestingField: true,
          wantedPosition: true,
          techStack: true,
          recruitNumber: true,
        });
    }
  }, [selectedProjectType, postType]);

  // 프로젝트 타입 변경 처리 함수
  const handleProjectTypeChange = (option: string | undefined) => {
    setSelectedProjectType(option);
    reset({
      ...DEFAULT_VALUES, // 현재 폼의 모든 값들을 유지
      projectType: option, // `projectType`만 변경
    });
  };

  // react-select 버그 수정
  useEffect(() => setIsMounted(true), []);

  // react-hook-form
  const { control, handleSubmit, watch, reset, register } = useForm<FormFields>({
    defaultValues: DEFAULT_VALUES,
  });

  const selectedprojectType = watch('projectType');
  const title = watch('title');
  const content = watch('content');

  // 학과 선택에 따른 수업 정보 처리
  const selectedDepartment = watch('department');
  const classesOptions = departmentClasses({ department: selectedDepartment });

  // POST 요청
  const onSubmit = async (data: FormFields) => {
    // 필수 필드가 비어 있는지 확인
    let errorMessage = '';
    if (selectedprojectType === '') errorMessage += '프로젝트 구분을 선택해주세요.\n';
    if (!data.department && !formFieldsDisabled.department)
      errorMessage += '학과를 선택해주세요.\n';
    if (!data.class && !formFieldsDisabled.class) errorMessage += '수업을 선택해주세요.\n';
    if (data.interestingField?.length === 0 && !formFieldsDisabled.interestingField)
      errorMessage += '관심 분야를 선택해주세요.\n';
    if (data.wantedPosition.length === 0 && !formFieldsDisabled.wantedPosition)
      errorMessage += '원하는 포지션을 선택해주세요.\n';
    if (data.techStack.length === 0 && !formFieldsDisabled.techStack)
      errorMessage += '기술 스택을 선택해주세요.\n';
    if (!data.recruitNumber && !formFieldsDisabled.recruitNumber)
      errorMessage += '모집 인원을 선택해주세요.\n';
    if (selectedprojectType !== '') {
      if (title === '') errorMessage += '제목을 입력해주세요.\n';
      if (content === '') errorMessage += '내용을 입력해주세요.\n';
    }

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    let postURL;
    if (postType) {
      postURL = apiUrl + `/posts/find-teammate`;
    } else {
      postURL = apiUrl + '/posts/find-team';
    }

    try {
      // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      const response = await fetch(postURL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const responsData = await response.json();
      if (response.ok) {
        alert('글 수정이 완료되었어요!');
        router.push(`/projects/${params.id}`);
      } else {
        throw new Error(responsData.message || '수정 요청 실패');
      }
    } catch (error: any) {
      console.error('네트워크 수정 실패:', error.message);
    }
  };

  // 해당 글 정보 GET 요청
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/posts/${params.id}`);
        if (!response.ok) {
          throw new Error('글 상세페이지 값 요청 실패');
        }
        const data = await response.json();

        setPostType(postType);
        setSelectedProjectType(data.projectType); // 프로젝트 타입 선택 적용
        reset(data);
      } catch (error: any) {
        console.error('네트워크 실패', error.message);
      }
    };

    fetchData();
  }, [params.id, reset]);

  return (
    <main className="w-[1024px] mx-auto pt-24 pb-16">
      {/* 토글 버튼 */}
      {isMounted ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="flex gap-5 font-bold text-white mb-8 ">
            {postType === 'FIND_TEAMMATE' ? (
              <button
                type="button"
                className={`py-3 rounded-3xl w-[200px] ${postType === 'FIND_TEAMMATE' ? 'bg-secondary' : 'bg-[#d9d9d9]'}`}
                onClick={() => {
                  setPostType('FIND_TEAMMATE');
                  handleProjectTypeChange('');
                }}
              >
                팀원 구하기
              </button>
            ) : (
              <button
                type="button"
                className={`py-3 rounded-3xl w-[200px] ${postType === 'FIND_TEAM' ? 'bg-secondary' : 'bg-[#d9d9d9]'}`}
                onClick={() => {
                  setPostType('FIND_TEAM');
                  handleProjectTypeChange('');
                }}
              >
                팀 구하기
              </button>
            )}
          </section>

          {/* 기본정보 입력 */}

          <section className="text-black mb-14">
            <h1 className="py-4 text-2xl font-bold">기본정보를 입력해주세요</h1>
            <div className="border-t-2"></div>
            <ul className="grid grid-cols-2 gap-10 mt-4 mb-5">
              <SelectField
                control={control}
                label="1. 프로젝트 구분"
                name="projectType"
                options={projectType}
                isDisabled={false}
                placeholder={'수업 프로젝트 / 졸업 프로젝트 / 사이드 프로젝트'}
                handleProjectTypeChange={handleProjectTypeChange}
              />
              {/* label 로 감싸보기 */}
              <SelectField
                control={control}
                label="2. 학과 선택"
                name="department"
                options={departments}
                isDisabled={formFieldsDisabled.department}
                placeholder={'컴정공/소프트/정융'}
              />
              {/* label은 id 설정할 필요없이 태그만 이동하면되니 label로 적용시킴 -> 단점: 태그를 감싸니 font-bold 가 상속됨 */}
              <SelectField
                control={control}
                label="3. 수업"
                name="class"
                options={classesOptions}
                isDisabled={formFieldsDisabled.class}
                placeholder={'수업 선택'}
              />
              <SelectField
                control={control}
                label="4. 관심 분야"
                name="interestingField"
                options={interestingField}
                isDisabled={formFieldsDisabled.interestingField}
                placeholder={'웹 / 앱 / 인공지능 / 게임 / 블록체인 / 사물인터넷...'}
                isMulti={true}
              />
              <SelectField
                control={control}
                label={postType ? '5. 모집 포지션' : '5. 지원 포지션'}
                name="wantedPosition"
                options={wantedPosition}
                isDisabled={formFieldsDisabled.wantedPosition}
                placeholder={'웹 / 앱 / 인공지능 / 게임 / 블록체인 / 사물인터넷...'}
                isMulti={true}
              />
              <SelectField
                control={control}
                label={'6. 기술 스택'}
                name="techStack"
                options={techStack}
                isDisabled={formFieldsDisabled.techStack}
                placeholder="기술 스택"
                isMulti={true}
              />
              {postType && (
                <SelectField
                  control={control}
                  label={'7. 모집 인원'}
                  name="recruitNumber"
                  options={recruitNumber}
                  isDisabled={formFieldsDisabled.recruitNumber}
                  placeholder="인원 설정"
                />
              )}
            </ul>
          </section>
          {/* 프로젝트 소개 */}
          <section className="text-black">
            <h1 className="text-2xl font-bold mb-4">
              {postType ? '프로젝트에 대해 소개해주세요' : '어떤 팀을 원하는지 작성해주세요'}
            </h1>
            <div className="border-t-2"></div>
            <section className="mt-5 mb-2">
              <input
                {...register('title')}
                placeholder="글 제목을 입력해주세요!"
                type="text"
                className="rounded w-full h-14 mb-2 font-bold outline-none text-2xl"
              />
              <Controller
                control={control}
                name="content"
                render={({ field }) => (
                  <Editor
                    {...field}
                    toggleState={postType === 'FIND_TEAMMATE'}
                    onChange={(newContent) => field.onChange(newContent)}
                  />
                )}
              />
            </section>

            {/* 제출 버튼 */}
            <button type="submit" className="bg-secondary text-white w-full h-16 font-bold rounded">
              등록하기
            </button>
          </section>
        </form>
      ) : null}
    </main>
  );
};

export default EditPost;
