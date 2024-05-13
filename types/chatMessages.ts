type Member = {
  id: number;
  nickname: string;
  profileImgUrl: string;
  baekjoonTier: string | null;
};

export type ChatMessage = {
  id: number;
  message: string;
  member: Member;
  createdAt: string;
};
