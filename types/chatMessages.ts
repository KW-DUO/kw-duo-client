type Member = {
  id: number;
  nickname: string;
  profileImgUrl: string | null;
  baekjoonTier: string | null;
};

export type ChatMessage = {
  id: number;
  message: string;
  member: Member;
  createdAt: string;
};
