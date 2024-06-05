'use client';

import Link from 'next/link';
import { useState, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type DropdownItem = {
  title: string;
  path?: string;
  onClick?: () => void;
};

type DropdownProps = {
  trigger: ReactNode;
  items: DropdownItem[];
};

const Dropdown = ({ trigger, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 200);
    setTimeoutId(id);
  };

  const handleItemClick = (item: DropdownItem) => {
    setIsOpen(false);
    if (item.onClick) item.onClick();
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-white">{trigger}</button>
      {isOpen && (
        <ul
          className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded max-h-60 overflow-y-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item) => (
            <Link href={item.path ?? '#'} key={item.title}>
              <div
                onClick={() => handleItemClick(item)}
                className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {item.title}
              </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
