type DepartmentClassesProps = {
  department: string | null | undefined;
};

export const departmentClasses = ({ department }: DepartmentClassesProps) => {
  switch (department) {
    case 'COMPUTER_INFORMATION_ENGINEERING':
      return [
        { value: '소프트웨어공학', label: '소프트웨어공학' },
        { value: '컴퓨터공학기초실험1', label: '컴퓨터공학기초실험1' },
        { value: '데이터베이스', label: '데이터베이스' },
      ];
    case 'SOFTWARE':
      return [
        { value: '공학설계입문', label: '공학설계입문' },
        { value: '창의설계입문', label: '창의설계입문' },
        { value: '자료구조실습', label: '자료구조실습' },
        { value: '응용소프트웨어 실습', label: '응용소프트웨어 실습' },
        { value: '딥러닝 실습', label: '딥러닝 실습' },
      ];
    case 'INFORMATION_CONVERGENCE':
      return [
        { value: '빅데이터프로그래밍', label: '빅데이터프로그래밍' },
        { value: '텍스트마이닝', label: '텍스트마이닝' },
        { value: 'IoT시스템설계및실습', label: 'IoT시스템설계및실습' },
        { value: 'UX/UI디자인', label: 'UX/UI디자인' },
        { value: '기계학습', label: '기계학습' },
        { value: '데이터시각화', label: '데이터시각화' },
      ];
    default:
      return [{ value: '기타 및 없음', label: '기타 및 없음' }];
  }
};
