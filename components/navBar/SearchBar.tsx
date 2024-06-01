import { SearchIcon, XIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Props = {
  value: string;
  onValueChange: (e: string) => void;
};

// todo: 검색 디바운스 적용
export const SearchBar = ({ value, onValueChange }: Props) => {
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };

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
        onChange={handleChange}
        placeholder={t('filters.searchPlaceholder')}
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
