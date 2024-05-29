export type UserProfileSetupInfo = {
  oAuthId: string;
  profileImgId: number | null;
  nickname: string;
  department: string;
  techStack: string[];
  position: string;
  githubUrl?: string | null;
  baekjoonId?: string | null;
  email: string;
};
