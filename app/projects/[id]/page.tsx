import Footer from './../../../components/footer/Footer';
import * as PostDetail from '@/components/postDetail';
import { DUMMY_POST_DETAIL } from '@/dummy/post';
import { ApplicantList } from '@/components/postDetail/ApplicantList';

const PostDetailPage = () => {
  // TODO: api fetch로 받아와야 함
  const postDetail = DUMMY_POST_DETAIL;

  // TODO: 로그인한 사용자의 게시글인지 확인하는 로직 필요
  const isMyPost = true;

  return (
    <>
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
      <Footer />
    </>
  );
};

export default PostDetailPage;
