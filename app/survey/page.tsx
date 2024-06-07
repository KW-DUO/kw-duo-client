'use client';

import React, { useEffect, useRef, useState } from 'react';
import SurveyPostionHorizontalBarChart from '@/components/chart/SurveyPostionHorizontalBarChart';
import SurveyCodingTestLanguageHorizontalBarChart from './../../components/chart/SurveyCodingTestLanguageHorizontalBarChart';
import SurveyTechstackHorizontalBarChart from './../../components/chart/SurveyTechstackHorizontalBarChart';
import Footer from '@/components/footer/Footer';
import { useTranslation } from 'react-i18next';
import { apiUrl } from '@/constant/api';
import { client, HttpClient } from '@/util/HttpClient';
import { formatNumberWithCommas } from '@/util/formatNumberWithCommas';
import LoadingSpinner from '@/components/loading/LoadingSpinner';

const Survey = () => {
  const { t } = useTranslation();
  let totalUserCountRef = useRef<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .fetch<{ count: number }>('/statistics/all-user-count', 'GET', {})
      .then((response: { count: number }) => {
        totalUserCountRef.current = response.count;
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the user count:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <main className="">
        {/* 배너 */}
        {/* <div className="bg-[#263747] h-[500px] flex justify-center"> */}
        <div className="bg-white h-[500px] flex justify-center">
          {/* 내용물 */}
          <div className="w-[1080px] h-full flex flex-col justify-center">
            <div className="my-auto">
              <div className="text-[64px] leading-none font-bold mb-5">
                <h1 dangerouslySetInnerHTML={{ __html: t('survey.bannerTitle') }} />
              </div>

              <h2>
                {formatNumberWithCommas(totalUserCountRef.current)}
                {` `}
                {t('survey.reportBasedOnMembers')}
              </h2>
              <h2>{t('survey.description')}</h2>
            </div>
          </div>
        </div>

        <section className="text-black w-[1080px] mx-auto pb-20">
          <SurveyPostionHorizontalBarChart />
          <SurveyCodingTestLanguageHorizontalBarChart />
          <SurveyTechstackHorizontalBarChart />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Survey;
