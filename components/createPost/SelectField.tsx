import React from 'react';
import { Control, Controller } from 'react-hook-form';
import Select from 'react-select';

// Option 타입 정의 - 이는 select option의 형태를 정의합니다
type OptionType = {
  value: string | number;
  label: string;
};

type SelectFieldProps = {
  control: Control<any>;
  name: string;
  label: string;
  options: ReadonlyArray<OptionType>;
  isDisabled?: boolean;
  placeholder?: string;
  isMulti?: boolean;
  handleProjectTypeChange?: (value: string) => void;
};

const SelectField = ({
  control,
  name,
  label,
  options,
  isDisabled,
  placeholder,
  isMulti = false,
  handleProjectTypeChange,
}: SelectFieldProps) => {
  return (
    <li className="w-full">
      <label className="w-full">
        <div className="mb-2.5">{label}</div>
        <Controller
          name={name}
          control={control}
          // defaultValue는 필요에 따라 설정하세요
          render={({ field }) => (
            <Select
              {...field}
              value={
                isMulti
                  ? options.filter((option) =>
                      field.value
                        ? (field.value as string[]).includes(option.value.toString())
                        : false
                    )
                  : options.find((option) => option.value === field.value)
              }
              options={options}
              isDisabled={isDisabled}
              placeholder={placeholder}
              onChange={(e) => {
                if (name === 'projectType') {
                  const newValue = e ? (e as OptionType).value : null;
                  field.onChange(newValue);
                  if (handleProjectTypeChange) {
                    handleProjectTypeChange(newValue as string);
                  }
                } else {
                  if (isMulti) {
                    const value = e ? (e as OptionType[]).map((option) => option.value) : [];
                    field.onChange(value);
                  } else {
                    field.onChange(e ? (e as OptionType).value : null);
                  }
                }
              }}
              isMulti={isMulti}
              className="mt-2.5"
            />
          )}
        />
      </label>
    </li>
  );
};

export default SelectField;
