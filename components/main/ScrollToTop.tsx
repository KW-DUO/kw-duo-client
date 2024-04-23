import { ArrowUp, ArrowUp10Icon, ArrowUpCircleIcon, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false); // 스크롤 중인지 상태 관리

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsScrolling(true); // 스크롤 시작 상태 설정
    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 1); // 여기서 1000은 스크롤 애니메이션 시간에 맞춰 조정 가능
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    const onScrollHandler = () => {
      setIsScrolling(true);
    };

    const onScrollEndHandler = () => {
      setIsScrolling(false);
    };

    document.addEventListener('scroll', onScrollHandler);
    document.addEventListener('scrollend', onScrollEndHandler);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      document.removeEventListener('scroll', onScrollHandler);
      document.removeEventListener('scrollend', onScrollEndHandler);
    };
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-10 right-10 cursor-pointer">
        <button
          onClick={scrollToTop}
          disabled={isScrolling} // 스크롤 중 버튼 비활성화
          className={`text-lg px-5 py-2.5 bg-rose-600 text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 rounded-full h-20 w-20
          flex flex-col justify-center items-center ${isScrolling ? 'opacity-80' : 'opacity-100'}`}
        >
          <ChevronUp scale={100} />
          Top
        </button>
      </div>
    )
  );
};

export default ScrollToTop;
