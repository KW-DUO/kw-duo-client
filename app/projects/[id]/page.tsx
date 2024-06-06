'use client';
import Footer from './../../../components/footer/Footer';
import * as PostDetail from '@/components/postDetail';
import { useQuery } from '@tanstack/react-query';
import { apiUrl } from './../../../constant/api/index';
import { queryKeys } from '@/queries/queryKeys';
import LoadingSpinner from '@/components/loading/LoadingSpinner';
import { HttpClient } from '@/util/HttpClient';
import { useAuthStore } from '@/store/userStore';
import { PostDetail as PostDetailType } from '@/types';

type Props = {
  params: { id: number };
};

const client = new HttpClient({
  baseUrl: apiUrl,
});

const fetchPostDetail = async (postId: number) => {
  return client.fetch<PostDetailType>(`/posts/${postId}`, 'GET', {});
};

const PostDetailPage = ({ params }: Props) => {
  // TODO: 로그인한 사용자의 게시글인지 확인하는 로직 필요

  const { user } = useAuthStore();

  const {
    data: postDetail,
    error,
    isLoading,
  } = useQuery<PostDetailType>({
    queryKey: queryKeys.postDetail(params.id),
    queryFn: () => fetchPostDetail(params.id),
  });

  const isMyPost = user?.id === postDetail?.author.id;

  if (isLoading) return <LoadingSpinner />;
  if (error) return '글 상세 조회 실패: ' + error.message;

  if (!postDetail) return null;

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
