'use client';
import Image from 'next/image';
import techStackImages from '../techStackImages/TechStackImages';
import { PostDetailContext } from '@/components/postDetail/store';
import { useContext } from 'react';
import { departmentsForPostDetail } from '@/constant/department';
import { projectType } from '@/constant/projectType';
import { positions } from '@/constant/position';
import { interestingField } from '@/constant/interestingField';
import { MAXIMUM_RECRUIT_NUMBER } from '@/constant/recruitNumber/projectConstants';
import { useTranslation } from 'react-i18next';

export const RecruitmentInfo = () => {
  const post = useContext(PostDetailContext);
  const { t } = useTranslation();

  if (!post) return <>Loading...</>;

  return (
    <>
      {/* 기본정보 */}
      <div className="mx-auto w-[800px] mt-14 pl-16 mb-14">
        <ul className="grid grid-cols-2 text-xl gap-y-8">
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500 w-" style={{ width: '140px' }}>
              {t('filters.projectType')}
            </div>
            <div>
              {t(projectType.find((t) => t.value === post.projectType)?.label ?? 'Unknown')}
            </div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '120px' }}>
              {t('filters.position')}
            </div>
            <div>
              {post.wantedPosition
                .map((p) => t(positions.find((pos) => pos.value === p)?.label ?? 'Unknown'))
                .join(', ')}
            </div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '140px' }}>
              {t('filters.department')}
            </div>
            <div>
              {t(
                departmentsForPostDetail.find((d) => d.value === post.department)?.label ??
                  '상관없음'
              )}
            </div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '120px' }}>
              {t('recruitNumber.label')}
            </div>
            <div>
              {post.recruitNumber}{' '}
              {post.recruitNumber === MAXIMUM_RECRUIT_NUMBER ? t('recruitNumber.moreThan') : ''}
            </div>
          </li>
          <li className="flex font-bold items-center">
            <div className="mr-2 text-gray-500" style={{ width: '140px' }}>
              {/* 제네릭으로 할 수 있지 않나? */}
              {post.projectType === 'CLASS_PROJECT' && t('filters.course')}
              {/* 졸업, 사이드 프로젝트는 관심분야 보이도록*/}
              {post.projectType !== 'CLASS_PROJECT' && t('filters.fieldOfInterest')}
            </div>
            <div>
              {post.projectType === 'CLASS_PROJECT' && post.className}
              {post.projectType !== 'CLASS_PROJECT' &&
                post.interestingField
                  .map((p) => t(interestingField.find((f) => f.value === p)?.label ?? 'Unknown'))
                  .join(', ')}
            </div>
          </li>
          <li className="flex font-bold items-center ">
            <div className="w-[120px] mr-2 text-gray-500">{t('techStack')}</div>
            <div className="flex flex-wrap items-center gap-2">
              {post.techStack.map((stack) => (
                <Image
                  key={stack}
                  src={techStackImages[stack]}
                  alt={stack}
                  width={35}
                  height={35}
                />
              ))}
            </div>
          </li>
        </ul>
      </div>
      <hr className="border mb-36" />
    </>
  );
};
