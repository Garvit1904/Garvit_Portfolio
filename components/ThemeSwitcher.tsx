import React from 'react';
import { PaletteIcon } from './icons/PaletteIcon';

interface ThemeSwitcherProps {
  cycleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ cycleTheme }) => {
  return (
    <button
      onClick={cycleTheme}
      className="p-3 bg-[--primary-600] text-white rounded-full shadow-lg hover:bg-[--primary-700] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--primary-500] dark:focus:ring-offset-slate-900 transition-all duration-300 transform hover:rotate-12"
      aria-label="Change color theme"
    >
      <PaletteIcon className="h-6 w-6" />
    </button>
  );
};

export default ThemeSwitcher;
