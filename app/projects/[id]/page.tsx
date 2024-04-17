import Image from 'next/image';
import Footer from './../../../components/footer/Footer';
import ApplicantList from '@/components/postDetail/ApplicantList';
import { DUMMY_PROJECTS } from '@/dummy/post';
import ProjectDetails from '@/components/postDetail/ProjectDetails';
import { toYYYYMMDD } from '@/util';
import techStackImages from '@/components/techStackImages/TechStackImages';

const position = DUMMY_PROJECTS[0].position;
const department: string = DUMMY_PROJECTS[0].department;
const recruitNumber: string = '2명';
const course = DUMMY_PROJECTS[0].course;
const interestField = '웹, 인공지능';
const techStack = DUMMY_PROJECTS[1].techStack;
const title = DUMMY_PROJECTS[0].title;
const userImageURL = '/icons/user_card_icon.svg';
const nickname = DUMMY_PROJECTS[0].nickname;
const date = toYYYYMMDD(DUMMY_PROJECTS[0].date);
const projectType = DUMMY_PROJECTS[0].type;

const infoItems = [
  { label: '프로젝트 구분', value: projectType, width: '140px' },
  { label: '모집 포지션', value: position, width: '120px' },
  { label: '모집 학과', value: department, width: '140px' },
  { label: '모집 인원', value: recruitNumber, width: '120px' },
  { label: '관심 분야/수업', value: interestField, width: '140px' },
];

const contentData: string = `
    프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,프로젝트에 대한 내용,
  `;

const PostDetail = () => {
  return (
    <>
      <main className="max-w-[900px] mx-auto py-36">
        <section>
          {/* 제목 타이틀 */}
          <h1 className="text-center font-bold text-3xl mb-20">{title}</h1>

          {/* 닉네임 및 수정 삭제 */}
          <div className="flex justify-between items-center mb-14">
            <div className="flex items-center gap-2">
              <Image src={userImageURL} alt="user-image" width={48} height={48} />
              <div className="font-bold">{nickname}</div>
              <div className="w-0.5 h-5 bg-slate-400"></div>
              <div className="text-gray-400">{date}</div>
            </div>
            <div className="flex font-bold gap-2 items-center">
              <button>수정</button>
              <div className="w-0.5 h-5 bg-slate-400"></div>
              <button>삭제</button>
            </div>
          </div>
          <div className="border"></div>
          {/* 모집 요약 */}
          <RecruitmentInfo />
        </section>

        {/* 프로젝트 정보 */}
        <ProjectDetails content={contentData} />

        {/* 지원자 목록 */}
        <ApplicantList />
      </main>
      <Footer />
    </>
  );
};

export default PostDetail;

const RecruitmentInfo = () => {
  return (
    <>
      {/* 기본정보 */}
      <div className="mx-auto w-[800px] mt-14 pl-16 mb-14">
        <ul className="grid grid-cols-2 text-xl gap-y-8">
          {infoItems.map((item, index) => (
            <li key={index} className="flex font-bold items-center">
              <div className="mr-2  text-gray-500" style={{ width: item.width }}>
                {item.label}
              </div>
              <div>{item.value}</div>
            </li>
          ))}
          <li className="flex font-bold items-center ">
            <div className="w-[120px] mr-2 text-gray-500">기술 스택</div>
            <div className="flex items-center gap-2">
              {techStack.map((stack, index) => (
                <Image
                  key={stack}
                  src={techStackImages[stack]}
                  alt="user-image"
                  width={35}
                  height={35}
                />
              ))}
            </div>
          </li>
        </ul>
      </div>
      <div className="border mb-36"></div>
    </>
  );
};
