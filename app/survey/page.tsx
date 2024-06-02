'use client';

import SurveyPostionHorizontalBarChart from '@/components/chart/SurveyPostionHorizontalBarChart';
import SurveyCodingTestLanguageHorizontalBarChart from './../../components/chart/SurveyCodingTestLanguageHorizontalBarChart';
import SurveyTechstackHorizontalBarChart from './../../components/chart/SurveyTechstackHorizontalBarChart';
import Footer from '@/components/footer/Footer';
import { useTranslation } from 'react-i18next';

const Survey = () => {
  const { t } = useTranslation();

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

              <h2>{t('survey.reportBasedOnMembers')}</h2>
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
