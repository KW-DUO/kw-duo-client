'use client';

import { Button } from '@/components/navBar/Button';
import { Select } from '@/components/navBar/Select';
import { useState } from 'react';
import { departments } from '@/constant/department';
import { SearchBar } from '@/components/navBar/SearchBar';

const FiltersBar = () => {
  // todo: 후에 react-hook-form 사용해보기
  // fixme: API 연동 시, form의 onSubmit 이벤트로 API 호출
  const [department, setDepartment] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
        <Select title="수업">
          <Select.Option value="CAPSTONE_DESIGN">캡스톤</Select.Option>
          <Select.Option value="MOBILE_PROGRAMMING">모바일</Select.Option>
          <Select.Option value="WEB_PROGRAMMING">웹프</Select.Option>
        </Select>
        <Select title="포지션">
          <Select.Option value="FRONTEND">프론트엔드</Select.Option>
          <Select.Option value="BACKEND">백엔드</Select.Option>
          <Select.Option value="ANDROID">안드로이드</Select.Option>
        </Select>
        <Select title="관심분야">
          <Select.Option value="AI">인공지능</Select.Option>
          <Select.Option value="BLOCKCHAIN">블록체인</Select.Option>
          <Select.Option value="IOT">사물인터넷</Select.Option>
        </Select>
        {/* 추가적인 버튼들 */}
        <Button>❤️ 내 북마크 보기</Button>
        <Button>👀 모집 중만 보기</Button>
      </div>
      <SearchBar value={searchQuery} onValueChange={setSearchQuery} />
    </form>
  );
};

export default FiltersBar;
