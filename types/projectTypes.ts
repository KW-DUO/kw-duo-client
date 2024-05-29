export type ProjectState = {
  projectType: string;
  department: string;
  course: string;
  position: string;
  wantedField: string;
  isBookmarkOnly: boolean;
  notClosedOnly: boolean;
  page: number;
  size: number;
  q?: string;
};

export type ProjectContextType = ProjectState & {
  setProjectType: (projectType: string) => void;
  setDepartment: (department: string) => void;
  setCourse: (className: string) => void;
  setPosition: (position: string) => void;
  setWantedField: (wantedField: string) => void;
  setIsBookmarkOnly: (bookmarkOnly: boolean) => void;
  setNotClosedOnly: (notClosedOnly: boolean) => void;
  setPage: (page: number) => void;
  setSize: (size: number) => void;
  setQuery: (query: string) => void;
};
