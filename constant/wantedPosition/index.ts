import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

// 새 글 쓰기
export function useWantedPositionOptions() {
  const { t } = useTranslation();

  return [
    { label: t('filters.positions.any'), value: 'ANY' },
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
    { label: t('filters.positions.other'), value: 'OTHER' },
  ];
}

// 필터
export function useWantedPositionFilterOptions() {
  const { t } = useTranslation();

  return [
    { label: t('filters.positions.all'), value: 'ALL' },
    { label: t('filters.positions.any'), value: 'ANY' },
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
    { label: t('filters.positions.other'), value: 'OTHER' },
  ];
}

// export function getPositionLabel(value: string): string {
//   const position = wantedPosition.find((pos) => pos.value === value);
//   return position ? position.label : 'Unknown';
// }
