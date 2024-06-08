'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const PageTitle = () => {
  const path = usePathname();

  let findType: string = '';
  if (path === '/') findType = 'find-teammate';
  if (path === '/team-members') findType = 'find-team';
  return (
    <section className="text-center my-10">
      {findType === 'find-team' && (
        <>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">팀 찾기</h1>
          <h2 className="text-2xl text-gray-600">팀원을 찾고 있는 팀들을 위한 페이지입니다.</h2>
        </>
      )}
      {findType === 'find-teammate' && (
        <>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">팀원 모집</h1>
          <h2 className="text-2xl text-gray-600">팀원 모집을 위한 구인 페이지입니다.</h2>
        </>
      )}
    </section>
  );
};

export default PageTitle;
