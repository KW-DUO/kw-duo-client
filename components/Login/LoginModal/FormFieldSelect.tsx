import Select from 'react-select';
import { UserProfileSetupInfo } from '@/types';

type FormFieldSelectProps = {
  label: string;
  isRequired: boolean;
  options: any;
  isMulti?: boolean;
  name: keyof UserProfileSetupInfo;
  placeholder: string;
  setValue: (name: keyof UserProfileSetupInfo, value: any) => void;
  errors: any;
};

const FormFieldSelect = ({
  label,
  isRequired,
  options,
  isMulti = false,
  name,
  placeholder,
  setValue,
  errors,
}: FormFieldSelectProps) => {
  // 선택 변경 시 호출될 함수
  const onChange = (selectedOption: any) => {
    // 선택된 값 설정
    setValue(
      name,
      isMulti ? selectedOption.map((option: any) => option.value) : selectedOption.value
    );
  };

  return (
    <div className="mb-5">
      <label>
        <p>
          {label}
          {isRequired && <span className="text-[#0038FF]">(*필수)</span>}
        </p>
        <Select
          options={options}
          isMulti={isMulti}
          placeholder={placeholder}
          instanceId={name}
          onChange={onChange}
          className={errors[name] && 'border-red-500'} // 에러가 있으면 빨간 테두리 추가
        />
      </label>
      {errors[name] && (
        <p className="text-red-500">선택이 필요합니다.</p> // 에러 메시지 표시
      )}
    </div>
  );
};

export default FormFieldSelect;
