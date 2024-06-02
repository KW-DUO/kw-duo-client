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
import { useTranslation } from 'react-i18next';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const languageData = [
  { label: 'Python', value: 38.3 },
  { label: 'Java', value: 29.1 },
  { label: 'JavaScript', value: 18 },
  { label: 'C++', value: 5.2 },
  { label: 'C', value: 3 },
  { label: 'C#', value: 2 },
  { label: 'Kotlin', value: 1.5 },
  { label: 'Swift', value: 1 },
  { label: 'Go', value: 0.8 },
  { label: 'Ruby', value: 0.5 },
  { label: 'Scala', value: 0.4 },
  { label: 'R', value: 0.2 },
];

const data: ChartData<'bar'> = {
  labels: languageData.map((lang) => lang.label),
  datasets: [
    {
      data: languageData.map((lang) => lang.value),
      backgroundColor: [
        '#6366f1', // Python
        '#60a5fa', // Java
        '#f59e0b', // JavaScript
        '#f87171', // C++
        '#34d399', // C
        '#38bdf8', // C#
        '#fb7185', // Kotlin
        '#f472b6', // Swift
        '#10b981', // Go
        '#6b7280', // Ruby
        '#a78bfa', // Scala
        '#4ade80', // R
      ],
      borderColor: [
        '#4338ca', // Python
        '#3a72ea', // Java
        '#d97706', // JavaScript
        '#b91c1c', // C++
        '#059669', // C
        '#0284c7', // C#
        '#be123c', // Kotlin
        '#db2777', // Swift
        '#047857', // Go
        '#4b5563', // Ruby
        '#7c3aed', // Scala
        '#16a34a', // R
      ],
      borderWidth: 1,
    },
  ],
};

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
      ticks: {
        callback: (value) => `${value}%`,
      },
    },
  },
};

const SurveyCodingTestLanguageHorizontalBarChart = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-10">
      <h1 className="text-2xl font-bold text-black mb-4">{t('survey.codingTestLanguage')}</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SurveyCodingTestLanguageHorizontalBarChart;
