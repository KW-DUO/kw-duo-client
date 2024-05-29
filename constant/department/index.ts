export const departments = [
  { label: '컴퓨터정보공학부', value: 'COMPUTER_INFORMATION_ENGINEERING' },
  { label: '소프트웨어학과', value: 'SOFTWARE' },
  { label: '정보융합학부', value: 'INFORMATION_CONVERGENCE' },
] as const;

export const departmentsFilterOptions = [
  { label: '전체', value: 'ALL' },
  { label: '컴퓨터정보공학부', value: 'COMPUTER_INFORMATION_ENGINEERING' },
  { label: '소프트웨어학과', value: 'SOFTWARE' },
  { label: '정보융합학부', value: 'INFORMATION_CONVERGENCE' },
] as const;

export function getDepartmentLabel(departmentValue: string): string {
  const department = departments.find((dep) => dep.value === departmentValue);
  return department ? department.label : departmentValue; // 일치하는 부서가 있으면 label 반환, 없으면 입력값 그대로 반환
}
