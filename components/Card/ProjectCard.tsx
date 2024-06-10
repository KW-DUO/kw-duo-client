'use client';

import { PostCard } from '@/types';
import * as Card from '@/components/Card';

type ProjectCardProps = {
  project: PostCard;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li className="w-cardWidth h-cardHeight px-6 pt-5 border-2 border-gray rounded-3xl">
      <Card.InfoHeader
        projectType={project.projectType}
        projectId={project.id}
        bookmark={project.bookmark}
      />
      <Card.PostDate createdAt={project.createdAt} />
      <Card.Title title={project.title} />
      <Card.MetaData
        department={project.department ?? undefined}
        course={project.className ?? undefined}
        wantedPosition={project.wantedPosition}
        wantedField={project.wantedField ?? undefined}
      />

      <Card.TechStack techStack={project.techStack} />
      <hr className="border" />

      <div className="mt-4 flex justify-between items-center">
        <Card.AuthorInfo nickname={project.author.nickname} />
        <Card.ApplyButton authorId={project.author.id} />
      </div>
    </li>
  );
};

export default ProjectCard;
