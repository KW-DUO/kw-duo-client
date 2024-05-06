import Footer from './../../../components/footer/Footer';
import * as PostDetail from '@/components/postDetail';

const PostDetailPage = () => {
  // TODO: 로그인한 사용자의 게시글인지 확인하는 로직 필요
  const isMyPost = true;

  return (
    <>
      <PostDetail.Root>
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
        <PostDetail.ApplicantList />
      </PostDetail.Root>
      <Footer />
    </>
  );
};

export default PostDetailPage;
