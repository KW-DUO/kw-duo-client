export * from './Footer';

const Footer = () => {
  return (
    <footer className="bg-lightGray flex justify-center items-center h-[180px]">
      {/* 로고 */}
      <div className="flex flex-col w-[30%]">
        <div className="text-primary text-4xl mb-2 font-semibold">KW DUO</div>
        <div className="text-xs">Contact</div>
        <div className="text-xs">Copyright KW DUO All rights reserved</div>
      </div>
      {/* 약관 관련 */}
      <div className="flex items-center gap-12 font-semibold">
        <a href="">이용약관</a>
        <a href="">개인정보처리방침</a>
        <a href="">서비스소개</a>
      </div>
    </footer>
  );
};

export default Footer;
