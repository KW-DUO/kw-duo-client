export const projectType = [
  { label: '수업 프로젝트', value: 'CLASS_PROJECT' },
  { label: '졸업 프로젝트', value: 'GRADUATION_PROJECT' },
  { label: '사이드 프로젝트', value: 'SIDE_PROJECT' },
] as const;

// projectType의 value에 따라 label을 반환하는 함수
export function getProjectTypeLabel(projectTypeValue: string): string {
  const type = projectType.find((type) => type.value === projectTypeValue);
  return type ? type.label : projectTypeValue; // 일치하는 타입이 있으면 label 반환, 없으면 입력값 그대로 반환
}
