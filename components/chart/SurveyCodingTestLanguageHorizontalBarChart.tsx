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
import { SurveyDataItem, SurveyStatisticsResponse } from '@/constant/survey';
import { mapCodingTestLanguageToLabel } from '@/constant/codingTestLanguages'; // Adjust the import path as necessary

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options: ChartOptions<'bar'> = {
  indexAxis: 'y' as const,
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

const SurveyCodingTestLanguageHorizontalBarChart = () => {
  const { t } = useTranslation();
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    client
      .fetch<SurveyStatisticsResponse>('/statistics/coding-test', 'GET')
      .then((response: SurveyStatisticsResponse) => {
        const fetchedData = response.statistics;
        const labels = fetchedData.map((item: SurveyDataItem) =>
          mapCodingTestLanguageToLabel(item.value)
        );
        const data = fetchedData.map((item: SurveyDataItem) => item.count);
        const backgroundColor = [
          '#6366f1',
          '#60a5fa',
          '#f59e0b',
          '#f87171',
          '#34d399',
          '#38bdf8',
          '#fb7185',
          '#f472b6',
          '#10b981',
          '#6b7280',
          '#a78bfa',
          '#4ade80',
        ];
        const borderColor = [
          '#4338ca',
          '#3a72ea',
          '#d97706',
          '#b91c1c',
          '#059669',
          '#0284c7',
          '#be123c',
          '#db2777',
          '#047857',
          '#4b5563',
          '#7c3aed',
          '#16a34a',
        ];

        setChartData({
          labels,
          datasets: [
            {
              data,
              backgroundColor: backgroundColor.slice(0, labels.length),
              borderColor: borderColor.slice(0, labels.length),
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Error fetching the coding test statistics:', error);
      });
  }, []);

  return (
    <div className="mb-10">
      <h1 className="text-2xl font-bold text-black mb-4">{t('survey.codingTestLanguage')}</h1>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SurveyCodingTestLanguageHorizontalBarChart;
