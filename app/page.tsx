import Footer from '@/components/footer/Footer';
import FiltersBar from '../components/main/FilterBar';
import ProjectList from '@/components/main/ProjectList';
import ProjectTypeFilter from '@/components/main/ProjectTypeFilter';
import { Pagination } from '@mui/material';
import ScrollToTop from './../components/main/ScrollToTop';
import { useEffect, useState } from 'react';
import { PostCard } from '@/types';
import { apiUrl } from '@/constant/api';
import { ProjectProvider } from '@/context/ProjectContext';

export default function Main() {
  return (
    <>
      <main className="pt-10">
        {/* 배너 */}
        {/* <section className="max-w-maxWidth mx-auto mb-10">
          <div className="h-[335px] bg-black rounded-[30px]">
            <div className="text-white">
              팀 프로젝트와 팀원을 빨리 찾기를 원한다면 KW DUO에서 함께할 팀원들을 찾아보세요!
            </div>
          </div>
        </section> */}
        {/* 내용 */}
        <ProjectProvider>
          <section className="max-w-maxWidth mx-auto">
            {/* 프로젝트 선택 */}
            <ProjectTypeFilter />
            {/* 필터링 */}
            <FiltersBar />
            {/* 프로젝트 소개 카드 */}
            {/* 🏫 수업 프로젝트 */}
            {/* 🎓 졸업 프로젝트 */}
            {/* 💻 사이드 프로젝트 */}
            <ProjectList />
          </section>
        </ProjectProvider>
        <ScrollToTop />
      </main>

      <Footer />
    </>
  );
}
