import React from 'react';
import { SearchIcon, XIcon } from 'lucide-react';

type Props = {
  value: string;
  onValueChange: (e: string) => void;
};

export const SearchBar = ({ value, onValueChange }: Props) => {
  const deleteValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onValueChange('');
  };

  return (
    <div className="w-[300px] bg-gray flex items-center rounded-3xl px-5">
      <SearchIcon size={18} />
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder="제목을 검색해보세요."
        className="w-[200px] border-none ml-3 outline-none bg-transparent h-10"
      />
      {value !== '' && (
        <button onClick={deleteValue} className="ml-3">
          <XIcon size={18} />
        </button>
      )}
    </div>
  );
};
