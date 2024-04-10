import ProjectCard from './ProjectCard';
import { PostCard } from '@/types';

type ProjectListProps = {
  posts: PostCard[];
};

const ProjectList = ({ posts }: ProjectListProps) => {
  return (
    <ul className="max-w-maxWidth grid grid-cols-4 gap-7">
      {posts.map((post) => (
        <ProjectCard key={post.id} project={post} />
      ))}
    </ul>
  );
};

export default ProjectList;
