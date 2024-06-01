'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none min-w-[105px]"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {i18n.language === 'en' ? 'English' : '한국어'}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 111.4-1.4L10 9.58l3.3-3.29a1 1 0 011.4 1.42l-4 4a1 1 0 01-.7.3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[105px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => changeLanguage('ko')}
            >
              한국어
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => changeLanguage('en')}
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
