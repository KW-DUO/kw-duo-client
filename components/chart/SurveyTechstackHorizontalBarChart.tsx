'use client';
import React from 'react';
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
import { techStack } from '@/constant/techStack';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dummyDataPoints = [
  { label: 'React', value: 90 },
  { label: 'Next.js', value: 85 },
  { label: 'Vue', value: 80 },
  { label: 'JavaScript', value: 95 },
  { label: 'TypeScript', value: 70 },
  { label: 'Spring', value: 75 },
  { label: 'Node.js', value: 88 },
  { label: 'Flask', value: 65 },
  { label: 'NestJS', value: 60 },
  { label: 'Django', value: 78 },
  { label: 'Java', value: 85 },
  { label: 'MySQL', value: 92 },
  { label: 'MongoDB', value: 68 },
  { label: 'Redis', value: 55 },
  { label: 'Kotlin', value: 50 },
  { label: 'Swift', value: 60 },
  { label: 'Flutter', value: 65 },
  { label: 'Python', value: 98 },
  { label: 'TensorFlow', value: 45 },
  { label: 'Pytorch', value: 50 },
  { label: 'Unity', value: 40 },
  { label: 'Unreal Engine', value: 35 },
  { label: 'C', value: 75 },
  { label: 'C++', value: 70 },
  { label: 'C#', value: 60 },
];

dummyDataPoints.sort((a, b) => b.value - a.value);

const data: ChartData<'bar'> = {
  labels: dummyDataPoints.map((point) => point.label),
  datasets: [
    {
      data: dummyDataPoints.map((point) => point.value),
      backgroundColor: '#00b2ff',
      borderColor: '#00b2ff',
    },
  ],
};

const options: ChartOptions<'bar'> = {
  indexAxis: 'y' as const, // 가로 막대 그래프로 설정
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

const SurveyTechstackHorizontalBarChart = () => {
  return (
    <div className="mb-10">
      <h1 className="text-2xl font-bold text-black mb-4">기술 스택</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SurveyTechstackHorizontalBarChart;
