'use client';

import Editor from '@/components/Editor/Editor';

const CreatePost = () => {
  return (
    <main className="w-[1024px] mx-auto pt-24 pb-16">
      {/* 토글 버튼 */}
      <section className="flex gap-5 font-bold text-white mb-8">
        <button className="bg-secondary py-3 rounded-3xl w-[200px]">팀원 구하기</button>
        <button className="bg-[#d9d9d9] py-3 rounded-3xl w-[200px]">팀 구하기</button>
      </section>

      {/* 기본정보 입력 */}
      <form action="">
        <section className="text-black mb-14">
          <h1 className="py-4 text-2xl font-bold">기본정보를 입력해주세요</h1>
          <div className="border-t-2"></div>
          <ul className="grid grid-cols-2 gap-10 mt-4 mb-5">
            <li className="w-full">
              {/* label 로 감싸보기 */}
              <label className="font-bold w-full ">
                학과 선택
                <select
                  name=""
                  id=""
                  className="border border-gray-400 px-4 py-2 mt-2 rounded w-full text-silver font-normal"
                >
                  <option value="">컴정공/소프트/정융</option>
                </select>
              </label>
            </li>
            <li className="w-full">
              {/* label for 적용해보기 */}
              <label htmlFor="projectType" className="font-bold w-full ">
                프로젝트 구분
              </label>
              <select
                name=""
                id="projectType"
                className="border border-gray-400 px-4 py-2 mt-2 rounded w-full text-silver"
              >
                <option value="">수업 프로젝트 / 졸업 프로젝트 / 사이드 프로젝트</option>
              </select>
            </li>
            <li className="w-full">
              {/* label은 id 설정할 필요없이 태그만 이동하면되니 label로 적용시킴 -> 단점: 태그를 감싸니 font-bold가 상속됨 */}
              <label className="font-bold w-full ">
                수업
                <select
                  name=""
                  id=""
                  className="border border-gray-400 px-4 py-2 mt-2 rounded w-full text-silver font-normal"
                >
                  <option value="">수업 선택</option>
                </select>
              </label>
            </li>
            <li className="w-full">
              <label className="font-bold w-full ">
                관심 분야
                <select
                  name=""
                  id=""
                  className="border border-gray-400 px-4 py-2 mt-2 rounded w-full text-silver font-normal"
                >
                  <option value="">웹 / 앱 / 인공지능 / 게임 / 그래픽 / 블록체인 / 기타</option>
                </select>
              </label>
            </li>
            <li className="w-full">
              <label className="font-bold w-full">
                모집 포지션
                <select
                  name=""
                  id=""
                  className="border border-gray-400 px-4 py-2 mt-2 rounded w-full text-silver font-normal"
                >
                  <option value="">프론트엔드 / 백엔드 / 안드로이드 / IOS / 게임 </option>
                </select>
              </label>
            </li>
            <li className="w-full">
              <label className="font-bold w-full">
                기술 스택
                <select
                  name=""
                  id=""
                  className="border border-gray-400 px-4 py-2 mt-2 rounded w-full text-silver font-normal"
                >
                  <option value="">기술 스택 선택</option>
                </select>
              </label>
            </li>
            <li className="w-full">
              <label className="font-bold w-full">
                모집 인원
                <select
                  name=""
                  id=""
                  className="border border-gray-400 px-4 py-2 mt-2 rounded w-full text-silver font-normal"
                >
                  <option value="">최대 인원</option>
                </select>
              </label>
            </li>
          </ul>
        </section>
        {/* 프로젝트 소개 */}
        <section className="text-black">
          <h1 className="text-2xl font-bold mb-4">프로젝트에 대해 소개해주세요</h1>
          <div className="border-t-2"></div>
          <section className="mt-5 mb-2">
            <input
              placeholder="글 제목을 입력해주세요!"
              type="text"
              className="rounded w-full h-14 mb-2 font-bold outline-none text-2xl"
            />
            <Editor />
          </section>

          {/* 제출 버튼 */}
          <button className="bg-secondary text-white w-full h-16 font-bold rounded">
            등록하기
          </button>
        </section>
      </form>
    </main>
  );
};

export default CreatePost;
