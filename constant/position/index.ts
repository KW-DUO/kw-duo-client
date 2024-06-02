import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

export const positions = [
  { label: 'filters.positions.frontend', value: 'FRONTEND' },
  { label: 'filters.positions.backend', value: 'BACKEND' },
  { label: 'filters.positions.android', value: 'ANDROID' },
  { label: 'filters.positions.ios', value: 'IOS' },
  { label: 'filters.positions.gameDev', value: 'GAME_DEV' },
  { label: 'filters.positions.planner', value: 'PLANNER' },
  { label: 'filters.positions.designer', value: 'DESIGNER' },
  { label: 'filters.positions.machineLearning', value: 'MACHINE_LEARNING' },
  { label: 'filters.positions.blockchain', value: 'BLOCKCHAIN' },
  { label: 'filters.positions.embedded', value: 'EMBEDDED' },
] as const;

// 회원가입, 마이페이지
export function usePositionOptions() {
  const { t } = useTranslation();

  return [
    { label: t('filters.positions.frontend'), value: 'FRONTEND' },
    { label: t('filters.positions.backend'), value: 'BACKEND' },
    { label: t('filters.positions.android'), value: 'ANDROID' },
    { label: t('filters.positions.ios'), value: 'IOS' },
    { label: t('filters.positions.gameDev'), value: 'GAME_DEV' },
    { label: t('filters.positions.planner'), value: 'PLANNER' },
    { label: t('filters.positions.designer'), value: 'DESIGNER' },
    { label: t('filters.positions.machineLearning'), value: 'MACHINE_LEARNING' },
    { label: t('filters.positions.blockchain'), value: 'BLOCKCHAIN' },
    { label: t('filters.positions.embedded'), value: 'EMBEDDED' },
  ];
}

export function getPositionLabel(value: string, t: TFunction): string {
  const position = positions.find((pos) => pos.value === value);
  if (!position) {
    throw new Error(`Unknown position value: ${value}`);
  }
  return t(position.label);
}
