'use client';
import Image from 'next/image';
import techStackImages from '../techStackImages/TechStackImages';
import { PostDetailContext } from '@/components/postDetail/store';
import { useContext } from 'react';
import { departments } from '@/constant/department';
import { projectType } from '@/constant/projectType';
import { positions } from '@/constant/position';
import { fields } from '@/constant/field';

export const RecruitmentInfo = () => {
  const post = useContext(PostDetailContext);

  if (!post) return <>Loading...</>;

  // TODO: 어울리는 어딘가로 옮겨야 함
  const MAXIMUM_RECRUIT_NUMBER = 7;

  return (
    <>
      {/* 기본정보 */}
      <div className="mx-auto w-[800px] mt-14 pl-16 mb-14">
        <ul className="grid grid-cols-2 text-xl gap-y-8">
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '140px' }}>
              프로젝트 구분
            </div>
            <div>{projectType.find((t) => t.value === post.type)?.label}</div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '120px' }}>
              모집 포지션
            </div>
            <div>
              {post.wantedPosition
                .map((p) => positions.find((pos) => pos.value === p)?.label)
                .join(', ')}
            </div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '140px' }}>
              모집 학과
            </div>
            <div>{departments.find((d) => d.value === post.department)?.label}</div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '120px' }}>
              모집 인원
            </div>
            <div>
              {post.recruitNumber}명 {post.recruitNumber === MAXIMUM_RECRUIT_NUMBER ? '이상' : ''}
            </div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '140px' }}>
              관심 분야/수업
            </div>
            <div>
              {post.interestField.map((p) => fields.find((f) => f.value === p)?.label).join(', ')}
            </div>
          </li>
          <li className="flex font-bold items-center ">
            <div className="w-[120px] mr-2 text-gray-500">기술 스택</div>
            <div className="flex items-center gap-2">
              {post.techStack.map((stack) => (
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
