import { create } from 'zustand';

// 회원가입시, 회원정보 관리
type UserInfo = {
  nickname: string;
  department: string;
  techStack: string[];
  codingTestLanguage: string;
  position: string;
  email: string;
  githubUrl: string;
  baekjoonId: string;
  oauthId: string;
};

type UserState = {
  userInfo: UserInfo | null;
  setUserInfo: (userInfo: UserInfo) => void;
  clearUserInfo: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
  clearUserInfo: () => set({ userInfo: null }),
}));
