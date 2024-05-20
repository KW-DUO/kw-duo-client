'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiUrl } from '@/constant/api';
import ProjectCard from '../Card/ProjectCard';
import { PostCard } from '@/types';
import { Pagination } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useProject } from '@/context/ProjectContext';

const ProjectList = () => {
  const [posts, setPosts] = useState<PostCard[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(20);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false); // 북마크 상태

  const { projectType, department, course, position, wantedField, q } = useProject();

  const path = usePathname();

  let findType: string = '';
  if (path === '/') findType = 'find-team';
  if (path === '/team-members') findType = 'find-teammate';

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          apiUrl +
            `/posts/${findType}?${q && `q=${q}&`}projectType=${projectType}&department=${department}&class=${course}&position=${position}&wantedField=${wantedField}&bookmarkOnly=${isBookmarked}&page=${currentPage}`
        );
        const data = await res.json();
        // setPosts(data.posts);
        const repeatedPosts = Array(30).fill(data.posts).flat(); // 페이지네이션 효과 보기위해서 일부러 늘린 것
        setPosts(repeatedPosts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [
    isBookmarked,
    currentPage,
    projectType,
    department,
    course,
    position,
    wantedField,
    q,
    findType,
  ]);

  // posts의 전체 길이에 대한 값도 주나?

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex); // 어차피 page size로 자를테니 차후 수정할 예정
  let totalPages = Math.ceil(posts.length / postsPerPage);

  const handleChangePage = (page: number): void => {
    setCurrentPage(page);
  };

  const router = useRouter();

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <div>
        <ul className="max-w-maxWidth grid grid-cols-4 gap-7">
          {currentPosts.map((post, index) => (
            <Link key={index} href={`/projects/${post.id}`}>
              <ProjectCard project={post} />
            </Link>
          ))}
        </ul>
        {/*페이지 네이션 */}
        <Pagination
          className="mt-8 mb-8 flex justify-center"
          count={totalPages}
          page={currentPage}
          onClick={(e) => {
            const eventTarget = e.target as HTMLElement;
            let page = parseInt(eventTarget.innerText);
            handleChangePage(page);
          }}
        />
      </div>
    </>
  );
};

export default ProjectList;
