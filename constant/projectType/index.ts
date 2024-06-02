import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

export const projectType = [
  { label: 'projectTypes.classProject', value: 'CLASS_PROJECT' },
  { label: 'projectTypes.graduationProject', value: 'GRADUATION_PROJECT' },
  { label: 'projectTypes.sideProject', value: 'SIDE_PROJECT' },
] as const;

export const projectTypeFilterOptions = [
  { label: 'projectTypes.all', value: 'ALL' },
  { label: 'projectTypes.classProject', value: 'CLASS_PROJECT' },
  { label: 'projectTypes.graduationProject', value: 'GRADUATION_PROJECT' },
  { label: 'projectTypes.sideProject', value: 'SIDE_PROJECT' },
] as const;

// projectTypeFilterOptions의 value에 따라 label을 반환하는 함수
// 카드, 글 상세, 마이페이지 활용?
// CLASS_PROJECT -> 수업 프로젝트 or Class Project
export function getProjectTypeLabel(projectTypeValue: string, t: TFunction): string {
  const type = projectTypeFilterOptions.find((type) => type.value === projectTypeValue);
  if (!type) throw Error('프로젝트 타입 값에 매칭되는 것이 없습니다.');
  return t(type.label);
}

export function getProjectTypeValue(projectTypeLabel: string, t: TFunction): string {
  const type = projectTypeFilterOptions.find((type) => type.label === projectTypeLabel);
  if (!type) throw Error('프로젝트 타입 라벨에 매칭되는 것이 없습니다.');
  return t(type.value);
}

export function useGetProjectTypeOptions() {
  const { t } = useTranslation();
  return projectType.map((type) => ({
    value: type.value,
    label: t(type.label),
  }));
}
