export type mypageForm = {
  id?: number;
  profileImgUrl?: string;
  profileImgId?: number;
  nickname: string;
  department: string;
  position: { label: string; value: string };
  bio?: string | null;
  techStack: { label: string; value: string }[];
  githubUrl?: string | null;
  baekjoonId?: string | null;
};
