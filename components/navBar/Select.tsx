import React from 'react';
import { useTranslation } from 'react-i18next';

type SelectProps = {
  children?: React.ReactNode;
  title: string;
  titleDisabled?: boolean;
  value?: string;
  disabled?: boolean;
  onValueChange?: (e: string) => void;
};

type OptionProps = {
  label?: string;
  value: string;
  children?: React.ReactNode;
};

const getTitleClass = (title: string, language: string) => {
  if (language === 'ko') {
    switch (title) {
      case '학과':
        return 'w-[163px]';
      case '수업':
        return 'w-[220px]';
      default:
        return 'w-[140px]';
    }
  } else if (language === 'en') {
    switch (title) {
      case 'Course':
        return 'w-[220px]';
      default:
        return 'w-fit';
    }
  }
};

export const Select = ({
  title,
  titleDisabled = true,
  value = '',
  onValueChange,
  children,
  disabled = false,
}: SelectProps) => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <>
      <select
        value={value}
        onChange={(e) => {
          onValueChange?.(e.target.value);
        }}
        disabled={disabled}
        className={`flex justify-between items-center border rounded-3xl px-2 pl-4 pr-3 outline-none ${getTitleClass(title, language)} ${value !== '' && !disabled ? 'border-orange-400 text-orange-400' : ''} ${disabled ? 'bg-gray' : ''}`}
      >
        {/* 선택 안한 값이 ALL */}
        {value === '' && (
          <option value="" disabled={titleDisabled} hidden>
            {title}
          </option>
        )}
        {children}
      </select>
    </>
  );
};

const Option = ({ label, value, children }: OptionProps) => {
  return (
    <option value={value} className="text-black">
      {label ?? children}
    </option>
  );
};

Select.Option = Option;
