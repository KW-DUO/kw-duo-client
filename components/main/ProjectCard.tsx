import Image from "next/image";
import React from "react";
import techStackImages from "../techStackImages/TechStackImages";

interface ProjectCardProps {
  type: string;
  date: string;
  title: string;
  department: string;
  position: string[];
  nickname: string;
  techStack?: string[];
  course?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  type,
  date,
  title,
  department,
  course,
  position,
  techStack,
  nickname,
}) => {
  

  return (
    <li className="w-cardWidth h-cardHeight px-6 pt-5 border-2 border-gray rounded-3xl">
      <div className="flex justify-between mb-4">
        <div className="bg-gray text-xs h-fit text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
          {type}
        </div>
        <Image
          src="/icons/red-heart-icon.svg"
          alt="interested-project"
          width={25}
          height={25}
        />
      </div>
      <div className="text-sm text-silver mb-2">작성일 · {date}</div>
      <div className="mb-4 font-bold">{title}</div>
      <div className="mb-2">
        <div className="mb-2">
          학과:{" "}
          <span className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
            {department}
          </span>
        </div>
        <div className="mb-2">
          수업:{" "}
          <span className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
            {course}
          </span>
        </div>
        <div className="mb-2">
          포지션:{" "}
          <span className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
            {position}
          </span>
        </div>
      </div>
      <div className="h-8 flex items-center mt-3 mb-3">
        {techStack?.map((stack, index) => {
          const imageUrl =
            techStackImages[stack];
          return (
            <Image key={index} src={imageUrl} alt="user-image" width={35} height={35} />
          );
        })}
        
      </div>

      <div className="border-t-2"></div>
      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <Image
            src="/icons/user_card_icon.svg"
            alt="user-image"
            width={30}
            height={30}
          />
          <div className="font-medium">{nickname}</div>
        </div>

        <button className="text-sm px-4 py-2 bg-yellow-400 rounded-3xl">
          메시지 보내기
        </button>
      </div>
    </li>
  );
};

export default ProjectCard;
