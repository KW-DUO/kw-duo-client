import { PostCard } from '@/types';

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
    title: '같이 프로덕트를 만들어가실 분을 구합니다',
    department: '소프트웨어학부',
    course: '웹 프로그래밍',
    position: ['프론트엔드 개발자', '백엔드 개발자'],
    techStack: ['spring'],
    nickname: 'Octoping',
  },
];
