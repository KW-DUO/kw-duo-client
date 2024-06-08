type PostCardAuthor = {
  id: number;
  nickname: string;
  profileImgUrl: string | null;
};

type PostDetailAuthor = {
  id: number;
  nickname: string;
  profileImgUrl: string;
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
  wantedField?: string[] | null;
  wantedPosition: string[];
  author: PostCardAuthor;
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
  department?: string;
  className?: string;
  wantedPosition: string[];
  interestingField: string[];
  recruitNumber: number;
  author: PostDetailAuthor;
  bookmark: Bookmark;
  techStack: string[];
  createdAt: string;
};
