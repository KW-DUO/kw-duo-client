import { getProjectTypeLabel } from '@/constant/projectType';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type InfoHeaderProps = {
  projectType: string;
};

export const InfoHeader = ({ projectType }: InfoHeaderProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex justify-between mb-4 h-6">
      <div className="bg-gray text-xs h-fit text-dark-gray font-bold px-2.5 py-0.5 rounded-2xl">
        {getProjectTypeLabel(projectType, t)}
      </div>
      <button onClick={handleBookmarkClick}>{isChecked ? <Heart fill="red" /> : <Heart />}</button>
    </div>
  );
};
