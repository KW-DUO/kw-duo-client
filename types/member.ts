export type UserProfileSetupInfo = {
  oAuthId: string;
  nickname: string;
  department: string;
  techStack: string[];
  position: string;
  codingTestLanguage: string;
  githubUrl?: string | null;
  baekjoonId?: string | null;
  email: string;
};
