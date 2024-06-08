'use client';

import { Button } from '@/components/navBar/Button';
import { Select } from '@/components/navBar/Select';
import { useState } from 'react';
import { useDepartmentsFilterOptions } from '@/constant/department';
import { SearchBar } from '@/components/navBar/SearchBar';
import { useWantedPositionFilterOptions } from '@/constant/wantedPosition';
import { useProject } from '@/context/ProjectContext';
import { useInterestingFieldFilterOptions } from '@/constant/interestingField';
import { departmentClasses, getDepartmentCode } from '@/constant/class';
import { useTranslation } from 'react-i18next';
import useRequireAuth from '@/hooks/useRequireAuth';
import LoginStep from '../Login/LoginStep/LoginStep';

const FiltersBar = () => {
  const {
    department,
    course,
    position,
    wantedField,
    isBookmarkOnly,
    setDepartment,
    setCourse,
    setPosition,
    setWantedField,
    setIsBookmarkOnly,
    setQuery,
  } = useProject();

  const { t } = useTranslation();
  const departmentsFilterOptions = useDepartmentsFilterOptions();
  const wantedPositionFilterOptions = useWantedPositionFilterOptions();
  const interestingFieldFilterOptions = useInterestingFieldFilterOptions();

  const { requireAuth, isLoginModalOpen, handleCloseModal } = useRequireAuth();

  const handleBookmarkClick = () => {
    requireAuth(() => {
      setIsBookmarkOnly(!isBookmarkOnly);
    });
  };

  return (
    <>
      <form className="font-bold flex justify-between items-center text-silver mb-8">
        {/* 필터 옵션들 */}
        <div className="flex gap-2.5 h-9">
          <Select title={t('filters.department')} value={department} onValueChange={setDepartment}>
            {departmentsFilterOptions.map(({ label, value }) => (
              <Select.Option key={value} value={getDepartmentCode(label, t)}>
                {label}
              </Select.Option>
            ))}
          </Select>
          <Select
            title={t('filters.course')}
            value={course}
            onValueChange={setCourse}
            disabled={department === ''}
          >
            {department &&
              departmentClasses({ department }, t).map(({ label, value }) => (
                <Select.Option key={value} value={value}>
                  {label}
                </Select.Option>
              ))}
          </Select>
          <Select title={t('filters.position')} value={position} onValueChange={setPosition}>
            {wantedPositionFilterOptions.map(({ label, value }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
          </Select>
          <Select
            title={t('filters.fieldOfInterest')}
            value={wantedField}
            onValueChange={setWantedField}
          >
            {interestingFieldFilterOptions.map(({ label, value }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
          </Select>
          {/* 추가적인 버튼들 */}
          <Button onClick={handleBookmarkClick}>{t('filters.bookmark')}</Button>
          {/* <Button>👀 모집 중만 보기</Button> */}
        </div>
        <SearchBar onValueChange={setQuery} />
      </form>
      {isLoginModalOpen && <LoginStep onClose={handleCloseModal} />}
    </>
  );
};

export default FiltersBar;
