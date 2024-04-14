import Image from 'next/image';
import React from 'react';
import techStackImages from '../techStackImages/TechStackImages';
import { PostCard } from '@/types';
import { toYYYYMMDD } from '@/util';

type ProjectCardProps = {
  project: PostCard;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li className="w-cardWidth h-cardHeight px-6 pt-5 border-2 border-gray rounded-3xl">
      <div className="flex justify-between mb-4">
        <div className="bg-gray text-xs h-fit text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
          {project.type}
        </div>
        <Image src="/icons/red-heart-icon.svg" alt="interested-project" width={25} height={25} />
      </div>
      <div className="text-sm text-silver mb-2">작성일 · {toYYYYMMDD(project.date)}</div>
      <div className="mb-4 font-bold h-10 truncate">{project.title}</div>
      <div className="mb-2">
        <div className="mb-2">
          학과:{' '}
          <span className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
            {project.department}
          </span>
        </div>
        <div className="mb-2">
          수업:{' '}
          <span className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
            {project.course}
          </span>
        </div>
        <div className="mb-2 h-12">
          포지션:{' '}
          {project.position.map((pos, index) => (
            <span
              className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl mr-1 leading-[30px]"
              key={index}
            >
              {pos}
            </span>
          ))}
        </div>
      </div>
      <div className="h-8 flex items-center mt-5 mb-3 gap-2">
        {project.techStack?.map((stack, index) => (
          <Image key={stack} src={techStackImages[stack]} alt="user-image" width={35} height={35} />
        ))}
      </div>

      <div className="border-t-2"></div>
      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <Image src="/icons/user_card_icon.svg" alt="user-image" width={30} height={30} />
          <div className="font-medium">{project.nickname}</div>
        </div>

        <button className="text-sm px-4 py-2 bg-yellow-400 rounded-3xl">메시지 보내기</button>
      </div>
    </li>
  );
};

export default ProjectCard;
