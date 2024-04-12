import Link from 'next/link';

const links = [
  // {
  //   title: "KW DUO",
  //   path: "/"
  // },
  {
    title: '프로젝트 찾기',
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
    title: '새 글 쓰기',
    path: '/create-post',
  },
];

const Links = () => {
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title} className="mr-3">
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
