import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

type DepartmentClassesProps = {
  department: string | null | undefined;
};

export const getDepartmentCode = (department: string, t: TFunction): string => {
  const all = t('filters.departments.all');
  const computerInformationEngineering = t('filters.departments.computerInformationEngineering');
  const software = t('filters.departments.software');
  const informationConvergence = t('filters.departments.informationConvergence');
  const departmentMap: { [key: string]: string } = {
    [all]: 'ALL',
    [computerInformationEngineering]: 'COMPUTER_INFORMATION_ENGINEERING',
    [software]: 'SOFTWARE',
    [informationConvergence]: 'INFORMATION_CONVERGENCE',
  };
  const departmentCode = departmentMap[department];
  // if (!departmentCode) {
  //   throw new Error(`Unknown department: ${department}`);
  // }

  return departmentCode;
};

// 글 작성
export const departmentClasses = ({ department }: DepartmentClassesProps, t: TFunction) => {
  // const departmentCode = department ? getDepartmentCode(department, t) : 'UNKNOWN';
  // console.log(department, departmentCode);
  switch (department) {
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

export const courseLabels = {
  소프트웨어공학: 'filters.courses.softwareEngineering',
  컴퓨터공학기초실험1: 'filters.courses.introToComputerEngineeringLab1',
  데이터베이스: 'filters.courses.database',
  공학설계입문: 'filters.courses.introToEngineeringDesign',
  창의설계입문: 'filters.courses.creativeDesign',
  자료구조실습: 'filters.courses.dataStructuresLab',
  '응용소프트웨어 실습': 'filters.courses.appliedSoftwareLab',
  '딥러닝 실습': 'filters.courses.deepLearningLab',
  빅데이터프로그래밍: 'filters.courses.bigDataProgramming',
  텍스트마이닝: 'filters.courses.textMining',
  IoT시스템설계및실습: 'filters.courses.iotSystemDesignAndLab',
  'UX/UI디자인': 'filters.courses.uxUiDesign',
  기계학습: 'filters.courses.machineLearning',
  데이터시각화: 'filters.courses.dataVisualization',
  '기타 및 없음': 'filters.courses.others',
} as const;

type CourseKey = keyof typeof courseLabels;

export function useGetCourseLabel(courseValue?: string): string {
  const { t, i18n } = useTranslation();

  if (!courseValue || !(courseValue in courseLabels)) return '';

  const courseLabelKey = courseLabels[courseValue as CourseKey];
  return t(courseLabelKey);
}
