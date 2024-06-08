'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';

const PageTitle = () => {
  const path = usePathname();
  const { t } = useTranslation();

  let findType: string = '';
  if (path === '/') findType = 'find-teammate';
  if (path === '/team-members') findType = 'find-team';

  return (
    <section className="text-center my-10">
      {findType === 'find-team' && (
        <>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('main.findTeam')}</h1>
          <h2 className="text-2xl text-gray-600">{t('main.findTeamDesc')}</h2>
        </>
      )}
      {findType === 'find-teammate' && (
        <>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('main.findTeamMembers')}</h1>
          <h2 className="text-2xl text-gray-600">{t('main.findTeamMembersDesc')}</h2>
        </>
      )}
    </section>
  );
};

export default PageTitle;
