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
import { client, HttpClient } from '@/util/HttpClient';
import { techStack } from '@/constant/techStack';
import { SurveyDataItem, SurveyStatisticsResponse } from '@/constant/survey';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options: ChartOptions<'bar'> = {
  indexAxis: 'y' as const, // Horizontal bar chart
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
  },
};

const mapValueToLabel = (value: string) => {
  const tech = techStack.find((item) => item.value === value);
  return tech ? tech.label : value;
};

const SurveyTechstackHorizontalBarChart = () => {
  const { t } = useTranslation();
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: '#00b2ff',
        borderColor: '#00b2ff',
      },
    ],
  });

  useEffect(() => {
    client
      .fetch<SurveyStatisticsResponse>('/statistics/tech-stack', 'GET')
      .then((response) => {
        const fetchedData = (response as SurveyStatisticsResponse).statistics;
        const sortedData = fetchedData.sort((a, b) => b.count - a.count);
        const labels = sortedData.map((item: SurveyDataItem) => mapValueToLabel(item.value));
        const data = sortedData.map((item: SurveyDataItem) => item.count);

        setChartData({
          labels,
          datasets: [
            {
              data,
              backgroundColor: '#00b2ff',
              borderColor: '#00b2ff',
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Error fetching the tech stack statistics:', error);
      });
  }, []);

  return (
    <div className="mb-10">
      <h1 className="text-2xl font-bold text-black mb-4">{t('survey.techStack')}</h1>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SurveyTechstackHorizontalBarChart;
