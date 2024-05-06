import { DUMMY_PROJECTS } from '@/dummy/post';

export const Title = () => {
  // TODO: useContext로 post 정보 가져오기
  const title = DUMMY_PROJECTS[0].title;

  return <h1 className="text-center font-bold text-3xl mb-20">{title}</h1>;
};
