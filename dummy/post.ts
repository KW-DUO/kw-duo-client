import { PostCard, PostDetail } from '@/types';

export const DUMMY_PROJECTS: PostCard[] = [];

export const DUMMY_POST_DETAIL: PostDetail = {
  id: 1,
  type: 'CLASS_PROJECT',
  title: '딥러닝 실습 팀원 구합니다!',
  content:
    '프로젝트 소개: 딥러닝을 활용한 이미지 분류 프로젝트입니다. 팀원을 구합니다. 많은 관심 부탁드립니다.',
  department: 'SOFTWARE',
  wantedPosition: ['BACKEND', 'ANDROID'],
  techStack: ['SPRING', 'PYTHON'],
  interestField: ['AI', 'BLOCKCHAIN'],
  recruitNumber: 4,
  author: {
    id: 1,
    nickname: 'daewonny',
    profileImgUrl: 'https://avatars.githubusercontent.com/u/44080404?v=4',
  },
  createdAt: new Date('2024-01-01'),
};
