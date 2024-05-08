import { getProjectTypeLabel } from '@/constant/projectType';
import Image from 'next/image';
import React, { useState } from 'react';

type InfoHeaderProps = {
  projectType: string;
};

export const InfoHeader = ({ projectType }: InfoHeaderProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex justify-between mb-4 h-6">
      <div className="bg-gray text-xs h-fit text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
        {getProjectTypeLabel(projectType)}
      </div>
      <button onClick={handleBookmarkClick}>
        {isChecked ? (
          <Image
            src={'/icons/red-heart-icon.svg'}
            alt="interested-project"
            width={25}
            height={25}
          />
        ) : (
          <Image
            src={'/icons/Heart_icon_red_hollow.svg'}
            alt="interested-project"
            width={24}
            height={23}
          />
        )}
      </button>
    </div>
  );
};
