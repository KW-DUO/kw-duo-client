import Footer from '@/components/footer/Footer';
import FiltersBar from './../components/main/FilterBar';
import ProjectList from '@/components/main/ProjectList';
import { DUMMY_PROJECTS } from '@/dummy/post';
import ProjectTypeFilter from '@/components/main/ProjectTypeFilter';

export default function Main() {
  return (
    <>
      <main className="pt-10">
        {/* 배너 */}
        <section className="max-w-maxWidth mx-auto mb-10">
          <div className="h-[335px] bg-slate-600 rounded-[30px]"></div>
        </section>
        {/* 내용 */}
        <section className="max-w-maxWidth mx-auto">
          {/* 프로젝트 선택 */}
          <ProjectTypeFilter />
          {/* 필터링 */}
          <FiltersBar />
          {/* 프로젝트 소개 카드 */}
          {/* 🏫 수업 프로젝트 */}
          {/* 🎓 졸업 프로젝트 */}
          {/* 💻 사이드 프로젝트 */}
          <ProjectList posts={DUMMY_PROJECTS} />
          {/*페이지 네이션 */}
          <div className="mt-8 mb-8 flex justify-center">페이지 네이션</div>
        </section>
      </main>

      <Footer />
    </>
  );
}
