export type SurveyDataItem = {
  value: string;
  count: number;
};

export type FormattedSurveyDataItem = {
  label: string;
  value: number;
};

export type SurveyStatisticsResponse = {
  statistics: SurveyDataItem[];
};
