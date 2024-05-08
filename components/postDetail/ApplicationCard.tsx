import Image from 'next/image';

const userImageURL = '/icons/user_card_icon.svg';
const nickname = 'kw-duo';
const position = '프론트엔드';
const techStack = ['TypeScript', 'JavaScript', 'React', 'React', 'React'];

const ApplicationCard = () => {
  return (
    <li className="w-[250px] h-[340px] flex flex-col  items-center p-5  border border-neutral-500 rounded-xl">
      <Image src={userImageURL} alt="유저 이미지" width={75} height={75} className="mb-3" />
      <div className="font-bold ">{nickname}</div>
      <div className="font-bold mb-5">{position}</div>
      <ul className="flex flex-wrap text-sm gap-1 overflow-hidden h-[75px]">
        {techStack.map((stack, index) => {
          return (
            <li
              key={index}
              className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl mr-1 leading-[30px]"
            >
              {stack}
            </li>
          );
        })}
      </ul>
      <button className="w-full h-10 bg-secondary rounded-lg text-white mt-5">메시지 보내기</button>
    </li>
  );
};

export default ApplicationCard;
