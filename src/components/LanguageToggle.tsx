import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle = ({ className = '' }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-300 ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-md text-xs font-black transition cursor-pointer ${
          language === 'en'
            ? 'bg-slate-900 text-white shadow-2xs'
            : 'text-slate-600 hover:text-slate-950'
        }`}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('ar')}
        className={`px-2 py-1 rounded-md text-xs font-black transition cursor-pointer ${
          language === 'ar'
            ? 'bg-slate-900 text-white shadow-2xs'
            : 'text-slate-600 hover:text-slate-950'
        }`}
        aria-pressed={language === 'ar'}
        title="التبديل إلى العربية"
      >
        عربي
      </button>
    </div>
  );
};
