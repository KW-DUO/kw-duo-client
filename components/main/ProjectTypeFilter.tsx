'use client';

import { getProjectTypeValue } from '@/constant/projectType';
import { useProject } from '@/context/ProjectContext';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// type ProjectType = '전체' | '수업 프로젝트' | '졸업 프로젝트' | '사이드 프로젝트';
type ProjectType = 'all' | 'classProject' | 'graduationProject' | 'sideProject';

const projectTypes: ProjectType[] = ['all', 'classProject', 'graduationProject', 'sideProject'];

const ProjectTypeFilter = () => {
  const { t } = useTranslation();
  const { setProjectType } = useProject();
  // 프로젝트 타입 상태 설정
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectType>('all');

  // 클릭 이벤트 핸들러
  const handleProjectTypeChange = (type: ProjectType) => {
    setSelectedProjectType(type);
    console.log(type);
    const value = getProjectTypeValue(`projectTypes.${type}`, t);
    console.log(value);
    setProjectType(value);
  };

  // 스타일 동적 적용 함수
  const clickedTextStyle = (type: ProjectType) =>
    selectedProjectType === type ? 'text-black cursor-pointer' : 'text-gray-500 cursor-pointer';

  return (
    <div className="flex text-2xl font-bold gap-6 mb-8 ml-3">
      {projectTypes.map((type) => (
        <button
          key={type}
          className={clickedTextStyle(type)}
          onClick={() => handleProjectTypeChange(type)}
        >
          {t(`projectTypes.${type}`)}
        </button>
      ))}
    </div>
  );
};

export default ProjectTypeFilter;
