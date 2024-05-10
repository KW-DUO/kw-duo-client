'use client';

import { PostCard } from '@/types';
import * as Card from '@/components/Card';

type ProjectCardProps = {
  project: PostCard;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li className="w-cardWidth h-cardHeight px-6 pt-5 border-2 border-gray rounded-3xl">
      <Card.InfoHeader projectType={project.projectType} />
      <Card.PostDate createdAt={project.createdAt} />
      <Card.Title title={project.title} />
      {project.interestingField}
      <Card.MetaData
        department={project.department ?? ''}
        course={project.class ?? ''}
        wantedPosition={project.wantedPosition}
        interestingField={project.interestingField ?? ''}
      />

      <Card.TechStack techStack={project.techStack} />
      <hr className="border" />

      <div className="mt-4 flex justify-between items-center">
        <Card.AuthorInfo nickname={project.author.nickname} />
        <Card.ApplyButton />
      </div>
    </li>
  );
};

export default ProjectCard;
