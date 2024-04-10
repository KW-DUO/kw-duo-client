import Image from "next/image";

const FiltersBar = () => {
  return (
    <div className="font-bold flex justify-between items-center text-silver mb-8">
      {/* 필터 옵션들 */}
      <div className="flex gap-2.5 h-9">
        {['학과', '수업', '포지션', '관심분야'].map((filter, index) => (
          <div key={index} className="flex justify-between items-center border rounded-3xl px-2 w-[120px] pl-4 pr-3">
            <div>{filter}</div>
            <Image src={"/icons/down_arrow_icon.svg"} alt="필터링 펼치기" width={11} height={6} />
          </div>
        ))}
        {/* 추가적인 버튼들 */}
        <div className="flex justify-between items-center border rounded-3xl px-5">
          <div>❤️ 내 북마크 보기</div>
        </div>
        <div className="flex justify-between items-center border rounded-3xl px-5">
          <div>👀 모집 중만 보기</div>
        </div>
      </div>
      {/* 검색 바 */}
      <div className="w-[300px] bg-gray flex items-center rounded-3xl px-5 gap-2.5">
        <Image src={"/icons/search_icon.svg"} alt="search-bar" width={18} height={18} />
        <input type="text" placeholder="제목을 검색해보세요." className="border-none outline-none bg-transparent h-10" />
      </div>
    </div>
  );
};

export default FiltersBar;