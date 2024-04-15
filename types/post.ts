export type PostCard = {
  id: number;
  type: string;
  date: Date;
  title: string;
  department: '컴퓨터정보공학부' | '소프트웨어학부' | '정보융합학부';
  course: string;
  position: string[];
  techStack: string[];
  nickname: string;
};
