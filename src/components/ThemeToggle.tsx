import { Sun } from 'lucide-react';
import { MoonIcon } from './icons/AppIcons';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === 'dark';

  const label = isDark
    ? language === 'ar' ? 'التبديل إلى الوضع الفاتح' : 'Switch to light theme'
    : language === 'ar' ? 'التبديل إلى الوضع الداكن' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 border border-slate-300 text-slate-800 hover:bg-brand-100 hover:text-brand-800 transition cursor-pointer ${className}`}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  );
};
