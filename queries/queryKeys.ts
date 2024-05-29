export const queryKeys = {
  applicants: (postId: number) => ['applicants', postId],
  profileData: () => ['profileData'],
  projects: (params: {
    findType: string;
    q?: string;
    projectType?: string;
    department?: string;
    course?: string;
    position?: string;
    wantedField?: string;
    isBookmarkOnly: boolean;
    currentPage: number;
  }) => ['projects', params],
  postDetail: (postId: number) => ['postDetail', postId],
};
