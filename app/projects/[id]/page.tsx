'use client';
import Footer from './../../../components/footer/Footer';
import * as PostDetail from '@/components/postDetail';
import { DUMMY_POST_DETAIL } from '@/dummy/post';
import { ApplicantList } from '@/components/postDetail/ApplicantList';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPostDetail = async () => {
  const response = await fetch('https://kw-duo-server.onrender.com/posts/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostDetailPage = () => {
  // const postDetail = DUMMY_POST_DETAIL;

  // TODO: 로그인한 사용자의 게시글인지 확인하는 로직 필요
  const isMyPost = true;

  const {
    data: postDetail,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['postDetail'],
    queryFn: fetchPostDetail,
  });

  if (isLoading) return 'Loading...';
  if (error) return '글 상세 조회 실패: ' + error.message;

  return (
    <>
      <main className="max-w-[900px] mx-auto py-36">
        <PostDetail.Root postData={postDetail}>
          <PostDetail.Title />
          <div className="flex justify-between items-center mb-14">
            <PostDetail.AuthorInfo />
            {isMyPost && <PostDetail.EditToolbar />}
          </div>
          <hr className="border" />
          <PostDetail.RecruitmentInfo />
          <PostDetail.ProjectDetails />
          {isMyPost && <PostDetail.PostCloseButton />}
          {!isMyPost && <PostDetail.ApplicationButton />}
        </PostDetail.Root>
        <ApplicantList />
      </main>
      <Footer />
    </>
  );
};

export default PostDetailPage;
