import { TFunction } from 'i18next';

type DepartmentClassesProps = {
  department: string | null | undefined;
};

export const getDepartmentCode = (department: string, t: TFunction): string => {
  const departmentMap: { [key: string]: string } = {
    [t('filters.departments.all')]: 'ALL',
    [t('filters.departments.computerInformationEngineering')]: 'COMPUTER_INFORMATION_ENGINEERING',
    [t('filters.departments.software')]: 'SOFTWARE',
    [t('filters.departments.informationConvergence')]: 'INFORMATION_CONVERGENCE',
  };
  const departmentCode = departmentMap[department];
  // if (!departmentCode) {
  //   throw new Error(`Unknown department: ${department}`);
  // }

  return departmentCode;
};

export const departmentClasses = ({ department }: DepartmentClassesProps, t: TFunction) => {
  const departmentCode = department ? getDepartmentCode(department, t) : 'UNKNOWN';
  switch (departmentCode) {
    case 'ALL':
      return [];
    case 'COMPUTER_INFORMATION_ENGINEERING':
      return [
        { value: '소프트웨어공학', label: t('filters.courses.softwareEngineering') },
        {
          value: '컴퓨터공학기초실험1',
          label: t('filters.courses.introToComputerEngineeringLab1'),
        },
        { value: '데이터베이스', label: t('filters.courses.database') },
      ];
    case 'SOFTWARE':
      return [
        { value: '공학설계입문', label: t('filters.courses.introToEngineeringDesign') },
        { value: '창의설계입문', label: t('filters.courses.creativeDesign') },
        { value: '자료구조실습', label: t('filters.courses.dataStructuresLab') },
        { value: '응용소프트웨어 실습', label: t('filters.courses.appliedSoftwareLab') },
        { value: '딥러닝 실습', label: t('filters.courses.deepLearningLab') },
        { value: '소프트웨어공학', label: t('filters.courses.softwareEngineering') },
      ];
    case 'INFORMATION_CONVERGENCE':
      return [
        { value: '빅데이터프로그래밍', label: t('filters.courses.bigDataProgramming') },
        { value: '텍스트마이닝', label: t('filters.courses.textMining') },
        { value: 'IoT시스템설계및실습', label: t('filters.courses.iotSystemDesignAndLab') },
        { value: 'UX/UI디자인', label: t('filters.courses.uxUiDesign') },
        { value: '기계학습', label: t('filters.courses.machineLearning') },
        { value: '데이터시각화', label: t('filters.courses.dataVisualization') },
      ];
    default:
      return [{ value: '기타 및 없음', label: t('filters.courses.others') }];
  }
};
