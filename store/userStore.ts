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
  oAuthId: string;
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

// 로그인 상태 관리

export type AuthUser = {
  id: number;
  nickname: string;
  department: string;
  position: string;
  bio: string;
  techStack: string[];
  githubUrl?: string | null;
  baekjoonId?: string | null;
};

export type AuthState = {
  isLoggedIn: boolean;
  user: AuthUser | null;
  setLogin: (user: AuthUser) => void;
  logout: () => void;
  toggleLogin: () => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  isLoggedIn: !!localStorage.getItem('accessToken'),
  user: null,
  setLogin: (user) => set({ isLoggedIn: true, user }),
  logout: () => {
    // 로컬스토리지에서 액세스토큰 삭제
    localStorage.removeItem('accessToken');
    set({ isLoggedIn: false, user: null });
  },
  toggleLogin: () => set({ isLoggedIn: !get().isLoggedIn }),
}));
