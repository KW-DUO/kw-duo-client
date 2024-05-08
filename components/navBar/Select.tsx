import React from 'react';

type SelectProps = {
  children?: React.ReactNode;
  title: string;
  titleDisabled?: boolean;
  value?: string;
  onValueChange?: (e: string) => void;
};

type OptionProps = {
  label?: string;
  value: string;
  children?: React.ReactNode;
};

const getTitleClass = (title: string) => {
  switch (title) {
    case '학과':
      return 'w-[180px]';
    case '수업':
      return 'w-[220px]';
    default:
      return 'w-[140px]';
  }
};

export const Select = ({
  title,
  titleDisabled = true,
  value = '',
  onValueChange,
  children,
}: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
      className={`flex justify-between items-center border rounded-3xl px-2 pl-4 pr-3 ${title} ${getTitleClass(title)}`}
    >
      <option value="" disabled={titleDisabled}>
        {title}
      </option>
      {children}
    </select>
  );
};

const Option = ({ label, value, children }: OptionProps) => {
  return <option value={value}>{label ?? children}</option>;
};

Select.Option = Option;
