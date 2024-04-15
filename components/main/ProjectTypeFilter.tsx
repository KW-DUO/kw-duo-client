'use client';

import React, { useState } from 'react';

const projectTypes = ['전체', '수업 프로젝트', '졸업 프로젝트', '사이드 프로젝트'];

const ProjectTypeFilter = () => {
  // 프로젝트 타입 상태 설정
  const [selectedProjectType, setSelectedProjectType] = useState('전체');

  // 클릭 이벤트 핸들러
  const handleProjectTypeChange = (type:string) => {
    setSelectedProjectType(type);
  };

  // 스타일 동적 적용 함수
  const clickedTextStyle = (type:string) => {
    return selectedProjectType === type
      ? 'text-black cursor-pointer'
      : 'text-gray-500 cursor-pointer';
  };

  return (
    <div className="flex text-2xl font-bold gap-6 mb-8 ml-3">
      {projectTypes.map((type) => (
        <span key={type} className={clickedTextStyle(type)} onClick={() => handleProjectTypeChange(type)}>
          {type}
        </span>
      ))}
    </div>
  );
};

export default ProjectTypeFilter;
