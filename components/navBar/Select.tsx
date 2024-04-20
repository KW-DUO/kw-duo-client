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

export const Select = ({
  title,
  titleDisabled = false,
  value = '',
  onValueChange,
  children,
}: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
      className="flex justify-between items-center border rounded-3xl px-2 w-[120px] pl-4 pr-3"
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
