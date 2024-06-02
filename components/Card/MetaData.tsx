import { getDepartmentCode, useGetCourseLabel } from '@/constant/class';
import { useGetDepartmentLabel } from '@/constant/department';
import { useGetInterestingFieldLabel } from '@/constant/interestingField';
import { getPositionLabel } from '@/constant/position';
import React from 'react';
import { useTranslation } from 'react-i18next';

type MetaDataProps = {
  department?: string;
  course?: string;
  interestingField?: string[] | null;
  wantedPosition: string[];
};

export const MetaData = ({
  department,
  course,
  wantedPosition,
  interestingField,
}: MetaDataProps) => {
  const { t } = useTranslation();

  const translatedDepartment = useGetDepartmentLabel(department ?? '');
  const translatedCourse = useGetCourseLabel(course);
  const getInterestingFieldLabel = useGetInterestingFieldLabel();

  return (
    <div className="mb-2 h-[120px]">
      {department && (
        <div className="mb-2 text-overflow">
          {t('metaData.department')}:{' '}
          <span className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
            {translatedDepartment}
          </span>
        </div>
      )}
      <div className="mb-2 text-overflow">
        {course || interestingField ? t('metaData.course') : t('metaData.interestingField')}:
        <span className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
          {/* {course ?? interestingField?.join(', ')} */}
          {translatedCourse ??
            interestingField?.map((field) => getInterestingFieldLabel(field)).join(', ')}
        </span>
      </div>
      <div className="mb-4 h-14 line-clamp-2">
        {t('metaData.wantedPosition')}:{' '}
        {wantedPosition.map((pos, index) => (
          <span
            className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl mr-1 leading-[30px]"
            key={index}
          >
            {getPositionLabel(pos, t)}
          </span>
        ))}
      </div>
    </div>
  );
};
