type Member = {
  id: number;
  nickname: string;
  profileImgUrl: string | null;
  baekjoonTier: string | null;
};

type LastChat = {
  id: number;
  message: string;
  member: Member;
  createdAt: string;
};

export type ChatRoom = {
  id: number;
  member: Member;
  lastChat?: LastChat | null;
};
