import { UseFormRegister } from 'react-hook-form';
import { UserProfileSetupInfo } from '@/types';

type FormFieldProps = {
  label: string;
  isRequired: boolean;
  register: UseFormRegister<UserProfileSetupInfo>;
  name: keyof UserProfileSetupInfo;
  placeholder: string;
  errors: any;
};

const FormField = ({ label, isRequired, register, name, placeholder, errors }: FormFieldProps) => (
  <div className="mb-5">
    <label>
      <p>
        {label}
        {isRequired && <span className="text-[#0038FF]">(*필수)</span>}
      </p>
      <input
        {...register(name, { required: isRequired })}
        type="text"
        placeholder={placeholder}
        className={`border border-[#CCCCCC] rounded px-2 py-1 mr-5 ${
          errors[name] && 'border-red-500' // 에러가 있으면 빨간 테두리 추가
        }`}
      />
    </label>
    {errors[name] && (
      <p className="text-red-500">입력이 필요합니다.</p> // 에러 메시지 표시
    )}
  </div>
);

export default FormField;
