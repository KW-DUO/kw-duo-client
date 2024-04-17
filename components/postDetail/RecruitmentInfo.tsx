import Image from 'next/image';
import techStackImages from '../techStackImages/TechStackImages';

type InfoItem = {
  label: string;
  value: string | string[];
  width: string;
};

type RecruitmentInfoProps = {
  infoItems: InfoItem[];
  techStack: string[];
};

const RecruitmentInfo = ({ infoItems, techStack }: RecruitmentInfoProps) => {
  return (
    <>
      {/* 기본정보 */}
      <div className="mx-auto w-[800px] mt-14 pl-16 mb-14">
        <ul className="grid grid-cols-2 text-xl gap-y-8">
          {infoItems.map((item, index) => (
            <li key={index} className="flex font-bold items-center">
              <div className="mr-2  text-gray-500" style={{ width: item.width }}>
                {item.label}
              </div>
              <div>{item.value}</div>
            </li>
          ))}
          <li className="flex font-bold items-center ">
            <div className="w-[120px] mr-2 text-gray-500">기술 스택</div>
            <div className="flex items-center gap-2">
              {techStack.map((stack, index) => (
                <Image
                  key={stack}
                  src={techStackImages[stack]}
                  alt="user-image"
                  width={35}
                  height={35}
                />
              ))}
            </div>
          </li>
        </ul>
      </div>
      <div className="border mb-36"></div>
    </>
  );
};

export default RecruitmentInfo;
