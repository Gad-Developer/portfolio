import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle = ({ className = '' }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center bg-slate-100 p-1 rounded-xl border border-slate-300 shadow-2xs ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-lg text-xs font-black transition cursor-pointer ${
          language === 'en'
            ? 'bg-slate-950 text-white shadow-xs'
            : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200'
        }`}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('ar')}
        className={`px-2.5 py-1 rounded-lg text-xs font-black transition cursor-pointer ${
          language === 'ar'
            ? 'bg-slate-950 text-white shadow-xs'
            : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200'
        }`}
        aria-pressed={language === 'ar'}
        title="التبديل إلى العربية"
      >
        عربي
      </button>
    </div>
  );
};
