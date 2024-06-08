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
import { client } from './../../util/HttpClient';

type ApiResponse = {
  posts: PostCard[];
  currentPage: number;
  totalCount: number;
  totalPage: number;
};

const fetchPosts = async (url: string): Promise<ApiResponse> => {
  const data = await client.fetch<ApiResponse>(url, 'GET');
  return data;
};

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(20);

  const { projectType, department, course, position, wantedField, q, isBookmarkOnly } =
    useProject();

  const path = usePathname();

  let findType: string = '';
  if (path === '/') findType = 'find-teammate';
  if (path === '/team-members') findType = 'find-team';

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

  const { t } = useTranslation();

  const { data, isLoading, error } = useQuery<ApiResponse>({
    queryKey: queryKeys.projects(queryParams),
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
          page: (currentPage - 1).toString(),
        })
      ),
    enabled: !!findType,
  });

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

  const posts = data?.posts ?? [];
  const totalPages = data?.totalPage ?? 1;

  return (
    <>
      <div className="min-h-[800px]">
        {posts.length === 0 ? (
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
              {posts.map((post, index) => (
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
