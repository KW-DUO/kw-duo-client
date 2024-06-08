import { useDebounce } from '@/hooks/useDebounce';
import { SearchIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  onValueChange: (e: string) => void;
};

export const SearchBar = ({ onValueChange }: Props) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  console.log(searchQuery);

  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    onValueChange(debouncedQuery);
  }, [debouncedQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onValueChange(searchQuery);
    }
  };

  const deleteValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchQuery('');
    onValueChange('');
  };

  return (
    <div className="w-[300px] bg-gray flex items-center rounded-3xl px-5">
      <SearchIcon size={18} />
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={t('filters.searchPlaceholder')}
        className="w-[200px] border-none ml-3 outline-none bg-transparent h-10"
      />
      {searchQuery !== '' && (
        <button onClick={deleteValue} className="ml-3">
          <XIcon size={18} />
        </button>
      )}
    </div>
  );
};
