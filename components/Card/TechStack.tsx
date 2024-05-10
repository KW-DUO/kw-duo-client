import Image from 'next/image';
import techStackImages from '../techStackImages/TechStackImages';

type TechStackProps = {
  techStack: string[];
};

export const TechStack = ({ techStack }: TechStackProps) => (
  <div className="h-8 flex items-center mb-4 gap-2">
    {techStack.slice(0, 6).map((stack) => (
      <Image key={stack} src={techStackImages[stack]} alt="tech-stack" width={35} height={35} />
    ))}
  </div>
);
