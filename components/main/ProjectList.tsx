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
import LoadingSpinner from '../loading/LoadingSpinner';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
    return (
      <div className="text-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="text-center min-h-[800px]">{t('loadingError')}</div>;
  }

  return (
    <>
      <div className="min-h-[800px]">
        {currentPosts.length === 0 ? (
          <div className="text-center flex flex-col items-center justify-center h-full text-3xl">
            <Image
              src="/images/write_image.jpg"
              alt="No posts"
              className="mb-4"
              width={300}
              height={300}
            />
            {t('noPosts.message')}
          </div>
        ) : (
          <>
            <ul className="max-w-maxWidth grid grid-cols-4 gap-7 ">
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
          </>
        )}
      </div>
    </>
  );
};

export default ProjectList;
