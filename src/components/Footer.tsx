import { AnimatedArrow } from './icons/AnimatedArrow';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import profileData from '../data/profile.json';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-4 border-brand-600 bg-panel py-8 text-white/70 text-xs sm:text-sm">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-bold">
            <span className="text-white">{profileData.name}</span>
            <span>•</span>
            <span className="text-white/70 font-semibold">{t.role}</span>
          </div>

          <div className="flex items-center gap-4 font-semibold text-white/70">
            <span>{t.builtWith}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white font-bold transition cursor-pointer"
              aria-label="Back to top"
            >
              <span>{t.backToTop}</span>
              <AnimatedArrow dir="up" className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/15 text-center sm:text-start text-white/70 text-xs font-medium">
          © {new Date().getFullYear()} {profileData.name}. {t.copyright}
        </div>
      </div>
    </footer>
  );
};
