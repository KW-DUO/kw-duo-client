type classNameProps = {
  course: string;
};

export const className = ({ course }: classNameProps) => {
  switch (course) {
    case 'COMPUTER_INFORMATION_ENGINEERING':
      return [{ value: 'algo', label: '소프트웨어공학' }];
    case 'SOFTWARE':
      return [
        { value: 'engineering_design', label: '공학설계입문' },
        { value: 'creative_design', label: '창의설계입문' },
        { value: 'data_structures_practice', label: '자료구조실습' },
        { value: 'applied_software', label: '응용소프트웨어 실습' },
        { value: 'deep_learning', label: '딥러닝 실습' },
      ];
    case 'INFORMATION_CONVERGENCE':
      return [
        { value: 'big_data_programming', label: '빅데이터프로그래밍(임동혁)' },
        { value: 'text_mining', label: '텍스트마이닝(조민수)' },
        { value: 'iot_system_design', label: 'IoT시스템설계및실습(박재성)' },
        { value: 'ux_ui_design', label: 'UX/UI디자인(김현경)' },
        { value: 'machine_learning', label: '기계학습(이상민)' },
        { value: 'data_visualization', label: '데이터시각화(조재희)' },
      ];
    default:
      return [{ value: 'undefined', label: '정의되지 않음' }];
  }
};
