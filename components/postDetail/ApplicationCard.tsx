import Image from 'next/image';
import { Applicant } from '@/types/Applicant';
import { useGetDepartmentLabel } from '@/constant/department';
import { userImageURL } from '@/constant/images';
import { useTranslation } from 'react-i18next';
import { techStack } from '@/constant/techStack';

const getTechStackLabel = (value: string) => {
  const stack = techStack.find((stack) => stack.value === value);
  return stack ? stack.label : value;
};

const ApplicationCard = ({ id, nickname, profileImgUrl, department, techStack }: Applicant) => {
  const { t } = useTranslation();

  return (
    <li className="w-[250px] h-[340px] flex flex-col items-center p-5 border border-neutral-500 rounded-xl">
      <img
        src={profileImgUrl ?? userImageURL}
        alt={t('applicantList.applicantCard.userImageAlt')}
        className="mb-3 rounded-full w-[75px] h-[75px]"
      />

      <div className="font-bold">{nickname}</div>
      <div className="font-bold mb-5">{useGetDepartmentLabel(department)}</div>
      <ul className="flex flex-wrap text-sm gap-1 overflow-hidden h-[75px]">
        {techStack.map((stack) => (
          <li
            key={stack}
            className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl mr-1 leading-[30px] h-8"
          >
            {getTechStackLabel(stack)}
          </li>
        ))}
      </ul>
      <button className="w-full h-10 bg-secondary rounded-lg text-white mt-5">
        {t('applicantList.applicantCard.sendMessage')}
      </button>
    </li>
  );
};

export default ApplicationCard;
