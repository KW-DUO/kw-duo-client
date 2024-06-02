import { UseFormRegister } from 'react-hook-form';
import { UserProfileSetupInfo } from '@/types';
import { useTranslation } from 'react-i18next';

type FormFieldProps = {
  label: string;
  isRequired: boolean;
  register: UseFormRegister<UserProfileSetupInfo>;
  name: keyof UserProfileSetupInfo;
  placeholder: string;
  errors: any;
};

const FormField = ({ label, isRequired, register, name, placeholder, errors }: FormFieldProps) => {
  const { t } = useTranslation();

  return (
    <div className="mb-5">
      <label>
        <p>
          {label}
          {isRequired && (
            <span className="text-[#0038FF]">{t('login.profileSetup.requiredField')}</span>
          )}
        </p>
        <input
          {...register(name, { required: isRequired })}
          type="text"
          placeholder={placeholder}
          className={`border border-[#CCCCCC] rounded px-2 py-1 mr-5 ${
            errors[name] && 'border-red-500'
          }`}
        />
      </label>
      {errors[name] && <p className="text-red-500">{t('login.profileSetup.errorMessage')}</p>}
    </div>
  );
};

export default FormField;
