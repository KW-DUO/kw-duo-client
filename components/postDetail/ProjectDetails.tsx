'use client';

type ProjectDetailsProps = {
  content: string;
};

const ProjectDetails = ({ content }: ProjectDetailsProps) => {
  return (
    <>
      {/* 프로젝트 타이틀 */}
      <h2 className="font-bold text-2xl mb-10">프로젝트 소개</h2>
      <div className="border"></div>

      {/* 프로젝트 내용 */}
      <div className="mt-10 mb-10">{content}</div>
      {/* 지원 버튼 */}
      <button className="w-full h-[70px] bg-secondary rounded text-white font-bold text-2xl mb-14">
        모집 마감하기
      </button>
    </>
  );
};

export default ProjectDetails;
