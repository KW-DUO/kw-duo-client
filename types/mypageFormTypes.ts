export type MyPageForm = {
  id?: number;
  profileImgUrl?: string;
  profileImgId?: number;
  nickname: string;
  department: string;
  position: { label: string; value: string };
  bio: string;
  techStack: { label: string; value: string }[];
  githubUrl?: string | null;
  baekjoonId?: string | null;
};
