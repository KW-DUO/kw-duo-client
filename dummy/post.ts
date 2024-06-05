import { PostDetail } from '@/types';

export const DUMMY_POST_DETAIL: PostDetail = {
  id: 1,
  postType: 'asd',
  projectType: 'CLASS_PROJECT',
  title: '딥러닝 실습 팀원 구합니다!',
  content:
    '프로젝트 소개: 딥러닝을 활용한 이미지 분류 프로젝트입니다. 팀원을 구합니다. 많은 관심 부탁드립니다.',
  department: 'SOFTWARE',
  wantedPosition: ['BACKEND', 'ANDROID'],
  techStack: ['SPRING', 'PYTHON'],
  interestingField: ['AI', 'BLOCKCHAIN'],
  recruitNumber: 4,
  author: {
    id: 1,
    nickname: 'daewonny',
    profileImgUrl: 'https://avatars.githubusercontent.com/u/44080404?v=4',
  },
  createdAt: '2024-01-01',
  bookmark: {
    isBookmarked: false,
  },
};
