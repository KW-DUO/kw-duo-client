const Footer = () => {
  return (
    <footer className="bg-lightGray flex justify-center items-center h-[180px]">
      {/* 로고 */}
      <div className="flex flex-col w-[30%]">
        <div className="text-primary text-4xl mb-2 font-semibold">KW DUO</div>
        <div className="text-xs">Contact / kwduo.dev@gmail.com</div>
        <div className="text-xs">Copyright / KW DUO All rights reserved</div>
      </div>
      {/* 약관 관련 */}
      <div className="flex items-center gap-12 font-semibold">
        <p>이용약관</p>
        <p>개인정보처리방침</p>
        <p>서비스소개</p>
      </div>
    </footer>
  );
};

export default Footer;
