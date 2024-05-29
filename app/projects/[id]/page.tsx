'use client';
import Footer from './../../../components/footer/Footer';
import * as PostDetail from '@/components/postDetail';
import { useQuery } from '@tanstack/react-query';
import { apiUrl } from './../../../constant/api/index';
import { queryKeys } from '@/queries/queryKeys';

type Props = {
  params: { id: number };
};

const fetchPostDetail = async (postId: number) => {
  const response = await fetch(`${apiUrl}/posts/${postId}`, { method: 'GET' });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostDetailPage = ({ params }: Props) => {
  // TODO: 로그인한 사용자의 게시글인지 확인하는 로직 필요
  const isMyPost = true;

  const {
    data: postDetail,
    error,
    isLoading,
  } = useQuery({
    queryKey: queryKeys.postDetail(params.id),
    queryFn: () => fetchPostDetail(params.id),
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
          {isMyPost && <PostDetail.ApplicantList />}
        </PostDetail.Root>
      </main>
      <Footer />
    </>
  );
};

export default PostDetailPage;
