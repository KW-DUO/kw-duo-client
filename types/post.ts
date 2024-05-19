type Author = {
  id: number;
  nickname: string;
  profileImgUrl: string | null;
};

type Bookmark = {
  isBookmarked: boolean;
};

export type PostCard = {
  id: number;
  postType: string;
  projectType: string;
  title: string;
  department?: string | null;
  class?: string | null;
  interestingField?: string[] | null;
  wantedPosition: string[];
  author: Author;
  bookmark: Bookmark;
  techStack: string[];
  createdAt: string;
};

export type PostDetail = {
  id: number;
  postType: string;
  projectType: string;
  title: string;
  content: string;
  department?: string | null;
  class?: string | null;
  wantedPosition: string[];
  interestingField: string[] | null;
  recruitNumber: number;
  author: {
    id: number;
    nickname: string;
    profileImgUrl: string | null;
  };
  techStack: string[];
  createdAt: string;
};
