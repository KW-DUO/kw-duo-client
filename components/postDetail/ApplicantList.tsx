'use client';

import { useQuery } from '@tanstack/react-query';
import ApplicationCard from './ApplicationCard';
import { PostDetailContext } from '@/components/postDetail/store';
import { useContext } from 'react';
import { Applicant } from '@/types/Applicant';

const fetchApplicants = async (postId: number) => {
  const response = await fetch(`https://kw-duo-server.onrender.com/posts/${postId}/applicant`);
  if (!response.ok) {
    throw new Error('Failed to fetch applicants');
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
  } = useQuery({
    queryKey: ['applicants', post?.id],
    queryFn: () => fetchApplicants(post!.id), // non-null assertion 사용
    enabled: !!post?.id,
  });

  console.log(applicants);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  if (!applicants || applicants.length === 0) {
    return <div>No applicants found.</div>;
  }

  return (
    <section>
      <div className="text-2xl font-bold mb-5">지원자 목록</div>
      <ul className="grid grid-cols-3 gap-5">
        {applicants.map((applicant: Applicant) => (
          <ApplicationCard key={applicant.id} {...applicant} />
        ))}
      </ul>
    </section>
  );
};
