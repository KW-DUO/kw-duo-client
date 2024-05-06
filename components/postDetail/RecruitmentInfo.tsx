import Image from 'next/image';
import techStackImages from '../techStackImages/TechStackImages';
import { DUMMY_PROJECTS } from '@/dummy/post';

export const RecruitmentInfo = () => {
  // TODO: useContext로 대체
  const projectType = DUMMY_PROJECTS[0].type;
  const position = DUMMY_PROJECTS[0].position;
  const department = DUMMY_PROJECTS[0].department;
  const techStack = DUMMY_PROJECTS[1].techStack;
  const interestField = ['웹', '인공지능'];
  const recruitNumber = '2명';

  return (
    <>
      {/* 기본정보 */}
      <div className="mx-auto w-[800px] mt-14 pl-16 mb-14">
        <ul className="grid grid-cols-2 text-xl gap-y-8">
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '140px' }}>
              프로젝트 구분
            </div>
            <div>{projectType}</div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '120px' }}>
              모집 포지션
            </div>
            <div>{position}</div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '140px' }}>
              모집 학과
            </div>
            <div>{department}</div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '120px' }}>
              모집 인원
            </div>
            <div>{recruitNumber}</div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '140px' }}>
              관심 분야/수업
            </div>
            <div>{interestField.join(', ')}</div>
          </li>
          <li className="flex font-bold items-center ">
            <div className="w-[120px] mr-2 text-gray-500">기술 스택</div>
            <div className="flex items-center gap-2">
              {techStack.map((stack) => (
                <Image
                  key={stack}
                  src={techStackImages[stack]}
                  alt={stack}
                  width={35}
                  height={35}
                />
              ))}
            </div>
          </li>
        </ul>
      </div>
      <hr className="border mb-36" />
    </>
  );
};
