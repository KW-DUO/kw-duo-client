// export const recruitNumber = [
//   { value: 1, label: '1명' },
//   { value: 2, label: '2명' },
//   { value: 3, label: '3명' },
//   { value: 4, label: '4명' },
//   { value: 5, label: '5명' },
//   { value: 6, label: '6명' },
//   { value: 7, label: '7명 이상' },
// ] as const;

import { useTranslation } from 'react-i18next';

export const recruitNumber = [
  { label: 'form.recruitNumber.1', value: 1 },
  { label: 'form.recruitNumber.2', value: 2 },
  { label: 'form.recruitNumber.3', value: 3 },
  { label: 'form.recruitNumber.4', value: 4 },
  { label: 'form.recruitNumber.5', value: 5 },
  { label: 'form.recruitNumber.6', value: 6 },
  { label: 'form.recruitNumber.7Plus', value: 7 },
] as const;

export function useGetRecruitNumberOptions() {
  const { t } = useTranslation();
  return recruitNumber.map((number) => ({
    value: number.value,
    label: t(number.label),
  }));
}
