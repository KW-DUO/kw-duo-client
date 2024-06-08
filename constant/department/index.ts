import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

// 새 글 쓰기, 회원가입에서 사용
export function useDepartments() {
  const { t } = useTranslation();
  return [
    {
      label: t('filters.departments.computerInformationEngineering'),
      value: 'COMPUTER_INFORMATION_ENGINEERING',
    },
    { label: t('filters.departments.software'), value: 'SOFTWARE' },
    { label: t('filters.departments.informationConvergence'), value: 'INFORMATION_CONVERGENCE' },
  ];
}

// 필터바 학과에서 사용
export function useDepartmentsFilterOptions() {
  const { t } = useTranslation();
  return [
    { label: t('filters.departments.all'), value: 'ALL' },
    {
      label: t('filters.departments.computerInformationEngineering'),
      value: 'COMPUTER_INFORMATION_ENGINEERING',
    },
    { label: t('filters.departments.software'), value: 'SOFTWARE' },
    { label: t('filters.departments.informationConvergence'), value: 'INFORMATION_CONVERGENCE' },
  ];
}

// export function getDepartmentLabel(departmentValue: string): string {
//   const department = departments.find((dep) => dep.value === departmentValue);
//   return department ? department.label : departmentValue; // 일치하는 부서가 있으면 label 반환, 없으면 입력값 그대로 반환
// }

type DepartmentLabelsProps = {
  [key: string]: string;
};

// 카드, 마이페이지, 글 상세 페이지에 활용 (조회에서 변환)
export function useGetDepartmentLabel(departmentValue?: string): string {
  const { t } = useTranslation();
  const departmentLabels: DepartmentLabelsProps = {
    ALL: t('filters.departments.all'),
    COMPUTER_INFORMATION_ENGINEERING: t('filters.departments.computerInformationEngineering'),
    SOFTWARE: t('filters.departments.software'),
    INFORMATION_CONVERGENCE: t('filters.departments.informationConvergence'),
  };

  const label = departmentLabels[departmentValue];
  // if (!label) throw Error('학과 값에 매칭되는 것이 없습니다.');
  return label;
}

export const departments = [
  {
    label: 'filters.departments.computerInformationEngineering',
    value: 'COMPUTER_INFORMATION_ENGINEERING',
  },
  { label: 'filters.departments.software', value: 'SOFTWARE' },
  { label: 'filters.departments.informationConvergence', value: 'INFORMATION_CONVERGENCE' },
] as const;

export const departmentsFilterOptions = [
  { label: 'filters.departments.all', value: 'ALL' },
  {
    label: 'filters.departments.computerInformationEngineering',
    value: 'COMPUTER_INFORMATION_ENGINEERING',
  },
  { label: 'filters.departments.software', value: 'SOFTWARE' },
  { label: 'filters.departments.informationConvergence', value: 'INFORMATION_CONVERGENCE' },
] as const;

export function getDepartmentLabel(departmentValue: string, t: TFunction): string {
  const department = departments.find((dep) => dep.value === departmentValue);
  if (!department) {
    throw new Error(`Unknown department value: ${departmentValue}`);
  }
  return t(department.label);
}

// 글 생성에 사용
export function useGetDepartmentOptions() {
  const { t } = useTranslation();
  return departments.map((department) => ({
    value: department.value,
    label: t(department.label),
  }));
}
