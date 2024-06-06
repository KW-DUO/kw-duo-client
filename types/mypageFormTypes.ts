export type MyPageForm = {
  id: number;
  nickname: string;
  department: string;
  position: string;
  bio: string;
  techStack: string[];
  githubUrl?: string | null;
  baekjoonId?: string | null;
};
