import SurveyPostionHorizontalBarChart from '@/components/chart/SurveyPostionHorizontalBarChart';
import SurveyCodingTestLanguageHorizontalBarChart from './../../components/chart/SurveyCodingTestLanguageHorizontalBarChart';
import SurveyTechstackHorizontalBarChart from './../../components/chart/SurveyTechstackHorizontalBarChart';
import Footer from '@/components/footer/Footer';

const Survey = () => {
  const totalUsers = '0000';

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
                <h1>
                  KW DUO <br /> Trend Survey
                </h1>
              </div>

              <h2>총 {totalUsers} 명의 회원정보를 기반으로 제작한 리포트입니다.</h2>
              <h2>
                직무/기술 스택/코딩 테스트 언어 선호도를 통해 광운대학교 학생 개발자들의 어떤 기술을
                사용하는지 확인해보세요!
              </h2>
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
