'use client';
import React, { useEffect, useRef } from 'react';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const jobData = [
  { label: '프론트엔드', value: 10 },
  { label: '백엔드', value: 20 },
  { label: '안드로이드', value: 5 },
  { label: 'iOS', value: 7 },
  { label: '게임 개발자', value: 3 },
  { label: '기획자', value: 2 },
  { label: '디자이너', value: 8 },
  { label: '머신러닝', value: 12 },
  { label: '블록체인', value: 4 },
  { label: '임베디드', value: 6 },
  { label: '기타', value: 1 },
];

const data: ChartData<'bar'> = {
  labels: jobData.map((job) => job.label),
  datasets: [
    {
      label: '현재 직무',
      data: jobData.map((job) => job.value),
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

const SurveyPostionHorizontalBarChart = () => {
  return (
    <div className="mb-10">
      <h1 className="font-bold text-3xl mb-10">포지션 통계</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SurveyPostionHorizontalBarChart;
