import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

function createInterestingFieldLabels(t: any) {
  return {
    ALL: t('filters.fields.all'),
    WEB: t('filters.fields.web'),
    APP: t('filters.fields.app'),
    AI: t('filters.fields.ai'),
    GAME: t('filters.fields.game'),
    BLOCKCHAIN: t('filters.fields.blockchain'),
    IOT: t('filters.fields.iot'),
    OTHER: t('filters.fields.other'),
  };
}

export function useInterestingFieldOptions() {
  const { t } = useTranslation();
  const fieldLabels = createInterestingFieldLabels(t);

  return Object.entries(fieldLabels).map(([value, label]) => ({ label, value }));
}

export function useInterestingFieldFilterOptions() {
  const { t } = useTranslation();
  const fieldLabels = createInterestingFieldLabels(t);

  return [
    { label: fieldLabels.ALL, value: 'ALL' },
    ...Object.entries(fieldLabels)
      .map(([value, label]) => ({ label, value }))
      .filter((option) => option.value !== 'ALL'),
  ];
}

type FieldLabelsProps = {
  ALL: string;
  WEB: string;
  APP: string;
  AI: string;
  GAME: string;
  BLOCKCHAIN: string;
  IOT: string;
  OTHER: string;
};

export function useGetInterestingFieldLabel() {
  const { t } = useTranslation();
  const fieldLabels = createInterestingFieldLabels(t);

  return (value: string): string => {
    const label = fieldLabels[value as keyof FieldLabelsProps];
    if (!label) throw new Error(`흥미 분야 값에 매칭되는 라벨이 없습니다: ${value}`);
    return label;
  };
}

// export const interestingField = [
//   { label: '웹', value: 'WEB' },
//   { label: '앱', value: 'APP' },
//   { label: '인공지능', value: 'AI' },
//   { label: '게임', value: 'GAME' },
//   { label: '블록체인', value: 'BLOCKCHAIN' },
//   { label: '사물인터넷', value: 'IOT' },
//   { label: '기타', value: 'OTHER' },
// ] as const;

export const interestingField = [
  { label: 'filters.fields.web', value: 'WEB' },
  { label: 'filters.fields.app', value: 'APP' },
  { label: 'filters.fields.ai', value: 'AI' },
  { label: 'filters.fields.game', value: 'GAME' },
  { label: 'filters.fields.blockchain', value: 'BLOCKCHAIN' },
  { label: 'filters.fields.iot', value: 'IOT' },
  { label: 'filters.fields.other', value: 'OTHER' },
] as const;

export const interestingFieldFilterOptions = [
  { label: '전체', value: 'ALL' },
  { label: '웹', value: 'WEB' },
  { label: '앱', value: 'APP' },
  { label: '인공지능', value: 'AI' },
  { label: '게임', value: 'GAME' },
  { label: '블록체인', value: 'BLOCKCHAIN' },
  { label: '사물인터넷', value: 'IOT' },
  { label: '기타', value: 'OTHER' },
] as const;

export function useGetInterestingFieldOptions() {
  const { t } = useTranslation();
  return interestingField.map((field) => ({
    value: field.value,
    label: t(field.label),
  }));
}
