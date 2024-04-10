import ProjectCard from './ProjectCard';
import { PostCard } from '@/types';

type ProjectListProps = {
  posts: PostCard[];
};

const ProjectList = ({ posts }: ProjectListProps) => {
  return (
    <ul className="max-w-maxWidth grid grid-cols-4 gap-7">
      {posts.map((post, idx) => (
        // 실제 데이터에선 id가 제대로 올테니 key값을 id로 설정해주면 됨
        <ProjectCard key={idx} project={post} />
      ))}
    </ul>
  );
};

export default ProjectList;
