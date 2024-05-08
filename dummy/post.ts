import { PostCard, PostDetail } from '@/types';

export const DUMMY_PROJECTS: PostCard[] = [
  {
    id: 1,
    type: '🏫 수업 프로젝트',
    date: new Date('2024-01-01'),
    title: '[딥러닝 실습 팀원 구합니다!]',
    department: '소프트웨어학부',
    course: '딥러닝 실습',
    position: ['상관 없음'],
    techStack: ['spring'],
    nickname: '닉네임',
  },
  {
    id: 2,
    type: '🏫 수업 프로젝트',
    date: new Date('2024-01-01'),
    title: '[웹 프로그래밍 팀원 구합니다!]',
    department: '컴퓨터정보공학부',
    course: '웹 프로그래밍',
    position: ['프론트엔드 개발자', '백엔드 개발자'],
    techStack: ['spring', 'spring'],
    nickname: 'daewonny',
  },
  {
    id: 3,
    type: '🏫 수업 프로젝트',
    date: new Date('2024-01-01'),
    title: '[데이터베이스 팀원 구합니다!]',
    department: '정보융합학부',
    course: '데이터베이스',
    position: ['백엔드 개발자'],
    techStack: ['spring'],
    nickname: 'Faker',
  },
  {
    id: 4,
    type: '🏫 수업 프로젝트',
    date: new Date('2024-01-01'),
    title: '[기계학습 팀원 구합니다!]',
    department: '컴퓨터정보공학부',
    course: '기계학습',
    position: ['프론트엔드 개발자', '백엔드 개발자'],
    techStack: ['spring', 'spring'],
    nickname: 'program',
  },
  {
    id: 5,
    type: '🏫 사이드 프로젝트',
    date: new Date('2024-01-01'),
    title:
      '같이 프로덕트를 만들어가실 분을 구합니다 열심히 하시는 분이면 됩니다 환영합니다라가라다라라라',
    department: '소프트웨어학부',
    course: '웹 프로그래밍',
    position: ['프론트엔드 개발자', '백엔드 개발자', '앱 개발자', '게임 개발자'],
    techStack: ['spring', 'spring', 'spring', 'spring', 'spring', 'spring', 'spring'],
    nickname: 'Octoping',
  },
];

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
