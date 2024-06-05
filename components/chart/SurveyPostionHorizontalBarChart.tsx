'use client';

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { useTranslation } from 'react-i18next';
import { apiUrl } from '@/constant/api';
import { HttpClient } from '@/util/HttpClient';
import {
  FormattedSurveyDataItem,
  SurveyDataItem,
  SurveyStatisticsResponse,
} from '@/constant/survey';
import LoadingSpinner from '../loading/LoadingSpinner';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SurveyPostionHorizontalBarChart = () => {
  const { t } = useTranslation();

  const dummyPositionData: FormattedSurveyDataItem[] = [
    { label: t('survey.positions.frontend'), value: 10 },
    { label: t('survey.positions.backend'), value: 20 },
    { label: t('survey.positions.android'), value: 5 },
    { label: t('survey.positions.ios'), value: 7 },
    { label: t('survey.positions.game'), value: 3 },
    { label: t('survey.positions.planner'), value: 2 },
    { label: t('survey.positions.designer'), value: 8 },
    { label: t('survey.positions.machineLearning'), value: 12 },
    { label: t('survey.positions.blockchain'), value: 4 },
    { label: t('survey.positions.embedded'), value: 6 },
    { label: t('survey.positions.other'), value: 1 },
  ];
  const [positionData, setPositionData] = useState<FormattedSurveyDataItem[]>(dummyPositionData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await getPositionStatistics();
      if (apiData.length > 0) {
        const translatedPositionData = apiData.map((item: SurveyDataItem) => ({
          label: t(`survey.positions.${item.value.toLowerCase()}`),
          value: item.count,
        }));
        setPositionData(translatedPositionData);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [t]);

  if (isLoading) return <LoadingSpinner />;

  const data: ChartData<'bar'> = {
    labels: positionData.map((position) => position.label),
    datasets: [
      {
        label: '응답자',
        data: positionData.map((position) => position.value),
        backgroundColor: '#00b2ff',
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        display: false, // 범례(라벨) 비활성화
      },
      title: {
        display: false, // 제목 비활성화
      },
    },
  };

  return (
    <div className="mb-10">
      <h1 className="font-bold text-3xl mb-10">{t('survey.positionStats')}</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SurveyPostionHorizontalBarChart;

const getPositionStatistics = async (): Promise<SurveyDataItem[]> => {
  try {
    const client = new HttpClient({
      baseUrl: apiUrl,
    });

    const response = await client.fetch<SurveyStatisticsResponse>(
      '/statistics/position',
      'GET',
      {}
    );
    return response.statistics;
  } catch (error) {
    console.error('Error fetching position statistics:', error);
    return [];
  }
};
