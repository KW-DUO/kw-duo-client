'use client';

import { useQuery } from '@tanstack/react-query';
import ApplicationCard from './ApplicationCard';
import { PostDetailContext } from '@/components/postDetail/store';
import { useContext } from 'react';
import { Applicant } from '@/types/applicant';
import { queryKeys } from '@/queries/queryKeys';
import { apiUrl } from '@/constant/api';

const fetchApplicants = async (postId: number): Promise<Applicant[]> => {
  const response = await fetch(`${apiUrl}/posts/${postId}/applicant`);
  if (!response.ok) {
    throw new Error('지원자들 조회 요청 실패');
  }
  const data = await response.json();
  return data.applicants;
};

export const ApplicantList = () => {
  const post = useContext(PostDetailContext);

  const {
    data: applicants,
    isLoading,
    error,
  } = useQuery<Applicant[]>({
    queryKey: queryKeys.applicants(post?.id as number),

    queryFn: () => fetchApplicants(post!.id),
    enabled: !!post?.id,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  if (!applicants || applicants.length === 0) {
    return <div>지원자가 없습니다.</div>;
  }

  return (
    <section>
      <div className="text-2xl font-bold mb-5">지원자 목록</div>
      <ul className="grid grid-cols-3 gap-5">
        {applicants.map((applicant) => (
          <ApplicationCard key={applicant.id} {...applicant} />
        ))}
      </ul>
    </section>
  );
};
