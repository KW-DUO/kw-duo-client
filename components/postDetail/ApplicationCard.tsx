import Image from 'next/image';
import { Applicant } from '@/types/Applicant';
import { useGetDepartmentLabel } from '@/constant/department';
import { userImageURL } from '@/constant/images';

const ApplicationCard = ({ id, nickname, profileImgUrl, department, techStack }: Applicant) => {
  return (
    <li className="w-[250px] h-[340px] flex flex-col items-center p-5 border border-neutral-500 rounded-xl">
      {/* <Image
        src={profileImgUrl}
        alt="유저 이미지"
        width={75}
        height={75}
        className="mb-3"
      /> */}
      <img
        src={profileImgUrl ?? userImageURL}
        alt="유저 이미지"
        className="mb-3 rounded-full w-[75px] h-[75px]"
      />

      <div className="font-bold">{nickname}</div>
      <div className="font-bold mb-5">{useGetDepartmentLabel(department)}</div>
      <ul className="flex flex-wrap text-sm gap-1 overflow-hidden h-[75px]">
        {techStack.map((stack) => (
          <li
            key={stack}
            className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl mr-1 leading-[30px]"
          >
            {stack}
          </li>
        ))}
      </ul>
      <button className="w-full h-10 bg-secondary rounded-lg text-white mt-5">메시지 보내기</button>
    </li>
  );
};

export default ApplicationCard;
