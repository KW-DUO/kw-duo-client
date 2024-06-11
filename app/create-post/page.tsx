'use client';

import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

// COMPONENTS
import Editor from '@/components/Editor/Editor';
import SelectField from './../../components/createPost/SelectField';

// CONSTANTS
import { useWantedPositionOptions } from '@/constant/wantedPosition';
import { useGetInterestingFieldOptions } from '@/constant/interestingField';
import { useGetProjectTypeOptions } from '@/constant/projectType';
import { useGetDepartmentOptions } from '@/constant/department';
import { techStack } from '@/constant/techStack';
import { useGetRecruitNumberOptions } from '@/constant/recruitNumber';
import { departmentClasses } from '@/constant/class';
import { useTranslation } from 'react-i18next';
import { client } from '@/util/HttpClient';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/queries/queryKeys';

// todo:
// - 넣지 않는 부분에 alert 띄우고 스크롤 이벤트와 focus로 찾아주기

type FormFields = {
  projectType: string;
  department?: string | null;
  className?: string | null;
  interestingField?: string[];
  wantedPosition: string[];
  techStack: string[];
  recruitNumber?: number | null;
  title: string;
  content: string;
};

type EditorMethods = {
  resetContent: () => void;
};

const DEFAULT_VALUES = {
  projectType: '',
  department: null,
  className: null,
  interestingField: [],
  wantedPosition: [],
  techStack: [],
  recruitNumber: null,
  title: '',
  content: '',
};

const CreatePost = () => {
  const [isMounted, setIsMounted] = useState(false);
  // https://github.com/JedWatson/react-select/issues/5459 에러 해결
  const queryClient = useQueryClient();

  // 팀원 구하기(true)와 팀 구하기(false) 간의 토글 상태를 관리
  const [isTeamMemberSearch, setIsTeamMemberSearch] = useState<boolean>(true);
  const [selectedProjectType, setSelectedProjectType] = useState<string | undefined>();

  const router = useRouter();

  // input 활성화 관리
  const [formFieldsDisabled, setFormFieldsDisabled] = useState({
    department: true,
    className: true,
    interestingField: true,
    wantedPosition: true,
    techStack: true,
    recruitNumber: true,
  });

  const { t } = useTranslation();

  // 프로젝트 구분 선택에 따른 input 활성화 처리
  useEffect(() => {
    switch (selectedProjectType) {
      case 'CLASS_PROJECT':
        setFormFieldsDisabled({
          department: false,
          className: false,
          interestingField: true,
          wantedPosition: false,
          techStack: false,
          recruitNumber: !isTeamMemberSearch,
        });
        break;
      case 'GRADUATION_PROJECT':
        setFormFieldsDisabled({
          department: false,
          className: true,
          interestingField: false,
          wantedPosition: false,
          techStack: false,
          recruitNumber: !isTeamMemberSearch,
        });
        break;
      case 'SIDE_PROJECT':
        setFormFieldsDisabled({
          department: true,
          className: true,
          interestingField: false,
          wantedPosition: false,
          techStack: false,
          recruitNumber: !isTeamMemberSearch,
        });
        break;
      default:
        setFormFieldsDisabled({
          department: true,
          className: true,
          interestingField: true,
          wantedPosition: true,
          techStack: true,
          recruitNumber: true,
        });
    }
  }, [selectedProjectType, isTeamMemberSearch]);

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
  const classesOptions = departmentClasses({ department: selectedDepartment }, t);

  // POST 요청
  const onSubmit = async (data: FormFields) => {
    // 필수 필드가 비어 있는지 확인
    let errorMessage = '';
    if (selectedprojectType === '') errorMessage += '프로젝트 구분을 선택해주세요.\n';
    if (!data.department && !formFieldsDisabled.department)
      errorMessage += '학과를 선택해주세요.\n';
    if (!data.className && !formFieldsDisabled.className) errorMessage += '수업을 선택해주세요.\n';
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

    const postURL = isTeamMemberSearch ? '/posts/find-teammate' : '/posts/find-team';

    try {
      const response = await client.fetch<{ postId: number }>(postURL, 'POST', {
        body: data,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.projects({
          findType: isTeamMemberSearch ? 'find-teammate' : 'find-team',
          isBookmarkOnly: false,
          currentPage: 0,
        }),
      });

      router.push(`/projects/${response.postId}`);
    } catch (error: any) {
      alert('포스트 생성 중 오류가 발생했습니다.');
    }
  };

  const projectTypeOptions = useGetProjectTypeOptions();
  const departmentOptions = useGetDepartmentOptions();
  const interestingFieldOptions = useGetInterestingFieldOptions();
  const wantedPositionOptions = useWantedPositionOptions();
  const recruitNumberOptions = useGetRecruitNumberOptions();

  return (
    <main className="w-[1024px] mx-auto pt-24 pb-16">
      {/* 토글 버튼 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex gap-5 font-bold text-white mb-8 ">
          <button
            type="button"
            className={`py-3 rounded-3xl w-[200px] ${isTeamMemberSearch ? 'bg-secondary' : 'bg-[#d9d9d9]'}`}
            onClick={() => {
              setIsTeamMemberSearch(true);
              handleProjectTypeChange('');
            }}
          >
            {t('form.findTeammate')}
          </button>
          <button
            type="button"
            className={`py-3 rounded-3xl w-[200px] ${!isTeamMemberSearch ? 'bg-secondary' : 'bg-[#d9d9d9]'}`}
            onClick={() => {
              setIsTeamMemberSearch(false);
              handleProjectTypeChange('');
            }}
          >
            {t('form.findTeam')}
          </button>
        </section>

        {/* 기본정보 입력 */}
        <section className="text-black mb-14">
          <h1 className="py-4 text-2xl font-bold">{t('form.enterBasicInfo')}</h1>
          <hr className="border-t-2" />
          <ul className="grid grid-cols-2 gap-10 mt-4 mb-5">
            {isMounted && (
              <>
                <SelectField
                  control={control}
                  label={`1. ${t('form.projectType')}`}
                  name="projectType"
                  options={projectTypeOptions}
                  isDisabled={false}
                  placeholder={t('form.projectTypePlaceholder')}
                  handleProjectTypeChange={handleProjectTypeChange}
                />
                {/* label 로 감싸보기 */}
                <SelectField
                  control={control}
                  label={`2. ${t('form.departmentSelection')}`}
                  name="department"
                  options={departmentOptions}
                  isDisabled={formFieldsDisabled.department}
                  placeholder={t('form.departmentPlaceholder')}
                />
                {/* label은 id 설정할 필요없이 태그만 이동하면되니 label로 적용시킴 -> 단점: 태그를 감싸니 font-bold 가 상속됨 */}
                <SelectField
                  control={control}
                  label={`3. ${t('form.classSelection')}`}
                  name="className"
                  options={classesOptions}
                  isDisabled={formFieldsDisabled.className}
                  placeholder={t('form.classPlaceholder')}
                />

                <SelectField
                  control={control}
                  label={`4. ${t('form.fieldOfInterestSelection')}`}
                  name="interestingField"
                  options={interestingFieldOptions}
                  isDisabled={formFieldsDisabled.interestingField}
                  placeholder={t('form.fieldOfInterestPlaceholder')}
                  isMulti={true}
                  closeMenuOnSelect={false}
                />
                <SelectField
                  control={control}
                  label={
                    isTeamMemberSearch
                      ? `5. ${t('form.wantedPositionSelectionRecruit')}`
                      : `5. ${t('form.wantedPositionSelectionApply')}`
                  }
                  name="wantedPosition"
                  options={wantedPositionOptions}
                  isDisabled={formFieldsDisabled.wantedPosition}
                  placeholder={t('form.wantedPositionPlaceholder')}
                  isMulti={true}
                  closeMenuOnSelect={false}
                />
                <SelectField
                  control={control}
                  label={`6. ${t('form.techStackSelection')}`}
                  name="techStack"
                  options={techStack}
                  isDisabled={formFieldsDisabled.techStack}
                  placeholder={t('form.techStackPlaceholder')}
                  isMulti={true}
                  closeMenuOnSelect={false}
                />
                {isTeamMemberSearch && (
                  <SelectField
                    control={control}
                    label={`7. ${t('form.recruitNumberSelection')}`}
                    name="recruitNumber"
                    options={recruitNumberOptions}
                    isDisabled={formFieldsDisabled.recruitNumber}
                    placeholder={t('form.recruitNumberPlaceholder')}
                  />
                )}
              </>
            )}
          </ul>
        </section>
        {/* 프로젝트 소개 */}
        <section className="text-black">
          <h1 className="text-2xl font-bold mb-4">
            {isTeamMemberSearch ? t('form.projectDescription') : t('form.teamDescription')}
          </h1>
          <hr className="border-t-2" />
          <section className="mt-5 mb-2">
            <input
              {...register('title')}
              placeholder={t('form.titlePlaceholder')}
              type="text"
              className="rounded w-full h-14 mb-2 font-bold outline-none text-2xl"
            />
            <Controller
              control={control}
              name="content"
              render={({ field }) => (
                <Editor
                  {...field}
                  toggleState={isTeamMemberSearch}
                  onChange={(newContent) => field.onChange(newContent)}
                />
              )}
            />
          </section>
          {/* 제출 버튼 */}
          <button type="submit" className="bg-secondary text-white w-full h-16 font-bold rounded">
            {t('button.submit')}
          </button>
        </section>
      </form>
    </main>
  );
};

export default CreatePost;
