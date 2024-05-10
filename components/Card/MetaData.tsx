import { getDepartmentLabel } from '@/constant/department';
import { getPositionLabel } from '@/constant/position';
import React from 'react';

type MetaDataProps = {
  department?: string;
  course?: string;
  interestingField?: string;
  wantedPosition: string[];
};

export const MetaData = ({
  department,
  course,
  wantedPosition,
  interestingField,
}: MetaDataProps) => {
  return (
    <div className="mb-2 h-[120px]">
      {department && (
        <div className="mb-2">
          학과:{' '}
          <span className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
            {getDepartmentLabel(department ?? '')}
          </span>
        </div>
      )}
      <div className="mb-2">
        {course ? `수업: ` : `관심분야: `}
        <span className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
          {course ?? interestingField}
        </span>
      </div>
      <div className="mb-4 h-14 line-clamp-2">
        포지션:{' '}
        {wantedPosition.map((pos, index) => (
          <span
            className="bg-gray text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl mr-1 leading-[30px]"
            key={index}
          >
            {getPositionLabel(pos)}
          </span>
        ))}
      </div>
    </div>
  );
};
