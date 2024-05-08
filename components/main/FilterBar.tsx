'use client';

import { Button } from '@/components/navBar/Button';
import { Select } from '@/components/navBar/Select';
import { useState } from 'react';
import { departments } from '@/constant/department';
import { SearchBar } from '@/components/navBar/SearchBar';
import { wantedPosition } from '@/constant/wantedPosition';
import { useForm } from 'react-hook-form';
import { useProject } from '@/context/ProjectContext';
import { interestingField } from '@/constant/interestingField';
import { departmentClasses } from '@/constant/class';

const FiltersBar = () => {
  // todo: 후에 react-hook-form 사용해보기
  // fixme: API 연동 시, form의 onSubmit 이벤트로 API 호출
  const [searchQuery, setSearchQuery] = useState<string>('');

  const {
    department,
    course,
    position,
    wantedField,
    bookmarkOnly,
    q,
    setDepartment,
    setCourse,
    setPosition,
    setWantedField,
    setBookmarkOnly,
    setQuery,
  } = useProject();

  return (
    <form className="font-bold flex justify-between items-center text-silver mb-8">
      {/* 필터 옵션들 */}
      <div className="flex gap-2.5 h-9">
        <Select title="학과" value={department} onValueChange={setDepartment}>
          {departments.map(({ label, value }) => (
            <Select.Option key={value} value={value}>
              {label}
            </Select.Option>
          ))}
        </Select>
        <Select title="수업" value={course} onValueChange={setCourse}>
          {department &&
            departmentClasses({ department }).map(({ label, value }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
        </Select>
        <Select title="포지션" value={position} onValueChange={setPosition}>
          {wantedPosition.map(({ label, value }) => (
            <Select.Option key={value} value={value}>
              {label}
            </Select.Option>
          ))}
        </Select>
        <Select title="관심분야" value={wantedField} onValueChange={setWantedField}>
          {interestingField.map(({ label, value }) => (
            <Select.Option key={value} value={value}>
              {label}
            </Select.Option>
          ))}
        </Select>
        {/* 추가적인 버튼들 */}
        <Button onClick={() => setBookmarkOnly(!bookmarkOnly)}>❤️ 내 북마크 보기</Button>
        {/* <Button>👀 모집 중만 보기</Button> */}
      </div>
      <SearchBar value={q || ''} onValueChange={setQuery} />
    </form>
  );
};

export default FiltersBar;
