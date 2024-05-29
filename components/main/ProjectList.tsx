'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiUrl } from '@/constant/api';
import ProjectCard from '../Card/ProjectCard';
import { PostCard } from '@/types';
import { Pagination } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useProject } from '@/context/ProjectContext';
import { addQueryParams } from '@/util';
import { queryKeys } from '@/queries/queryKeys';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async (url: string): Promise<PostCard[]> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  const data = await response.json();
  return data.posts;
};

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(20);

  const { projectType, department, course, position, wantedField, q, isBookmarkOnly } =
    useProject();

  const path = usePathname();

  let findType: string = '';
  if (path === '/') findType = 'find-team';
  if (path === '/team-members') findType = 'find-teammate';

  const queryParams = {
    findType,
    q: q ?? '',
    projectType: projectType ?? '',
    department: department ?? '',
    course: course ?? '',
    position: position ?? '',
    wantedField: wantedField ?? '',
    isBookmarkOnly: isBookmarkOnly ?? false,
    currentPage,
  };

  const queryKey = queryKeys.projects(queryParams);

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<PostCard[]>({
    queryKey: queryKey,
    queryFn: () =>
      fetchPosts(
        addQueryParams(apiUrl + `/posts/${findType}`, {
          q: q ?? '',
          projectType: projectType ?? '',
          department: department ?? '',
          class: course ?? '',
          position: position ?? '',
          wantedField: wantedField ?? '',
          bookmarkOnly: isBookmarkOnly.toString(),
          page: currentPage.toString(),
        })
      ),
    enabled: !!findType,
  });

  // posts의 전체 길이에 대한 값도 주나?

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts?.slice(firstPostIndex, lastPostIndex) ?? []; // 어차피 page size로 자를테니 차후 수정할 예정
  let totalPages = posts ? Math.ceil(posts.length / postsPerPage) : 1;

  const handleChangePage = (page: number): void => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">로딩 에러</div>;
  }

  return (
    <>
      <div>
        <ul className="max-w-maxWidth grid grid-cols-4 gap-7">
          {currentPosts?.map((post, index) => (
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
