export type PostCard = {
  id: number;
  type: string;
  date: Date;
  title: string;
  department: '컴퓨터정보공학부' | '소프트웨어학부' | '정보융합학부';
  course: string;
  position: string[];
  techStack: string[];
  nickname: string;
};

export type PostDetail = {
  id: number;
  type: string;
  title: string;
  content: string;
  department: string;
  wantedPosition: string[];
  techStack: string[];
  interestField: string[];
  recruitNumber: number;
  author: {
    id: number;
    nickname: string;
    profileImgUrl: string | null;
  };
  createdAt: Date;
};
