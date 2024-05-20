export const projectType = [
  { label: '수업 프로젝트', value: 'CLASS_PROJECT' },
  { label: '졸업 프로젝트', value: 'GRADUATION_PROJECT' },
  { label: '사이드 프로젝트', value: 'SIDE_PROJECT' },
] as const;

export const projectTypeFilterOptions = [
  { label: '전체', value: 'ALL' },
  { label: '수업 프로젝트', value: 'CLASS_PROJECT' },
  { label: '졸업 프로젝트', value: 'GRADUATION_PROJECT' },
  { label: '사이드 프로젝트', value: 'SIDE_PROJECT' },
] as const;

// projectTypeFilterOptions의 value에 따라 label을 반환하는 함수
export function getProjectTypeLabel(projectTypeValue: string): string {
  const type = projectTypeFilterOptions.find((type) => type.value === projectTypeValue);
  if (!type) throw Error('프로젝트 타입 값에 매칭되는 것이 없습니다.');
  return type.label;
}

export function getProjectTypeValue(projectTypeLabel: string): string {
  const type = projectTypeFilterOptions.find((type) => type.label === projectTypeLabel);
  if (!type) throw Error('프로젝트 타입 라벨에 매칭되는 것이 없습니다.');
  return type.value;
}
