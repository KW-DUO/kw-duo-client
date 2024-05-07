import Link from 'next/link';

const links = [
  {
    title: '팀 찾기',
    path: '/',
  },
  {
    title: '팀원 찾기',
    path: '/team-members',
  },
  {
    title: '메시지',
    path: '/messages',
  },
  {
    title: '알림',
    path: '/',
  },
  {
    title: '새 글 쓰기',
    path: '/create-post',
  },
  {
    title: '자료',
    path: '/',
  },
];

const Links = () => {
  return (
    <>
      {links.map((link) => (
        <Link href={link.path} key={link.title} className="mr-3">
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Links;
