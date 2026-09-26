import { ArrowUp } from 'lucide-react';
import profileData from '../data/profile.json';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-300 bg-white py-8 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold">
            <span className="text-slate-900">{profileData.name}</span>
            <span>•</span>
            <span className="text-slate-600 font-semibold">Full-Stack Developer</span>
          </div>

          <div className="flex items-center gap-4 font-semibold text-slate-500">
            <span>
              Built with React, TypeScript & Tailwind CSS
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-950 font-bold transition cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200 text-center sm:text-left text-slate-500 text-xs font-medium">
          © {new Date().getFullYear()} {profileData.name}. All trademarks and client assets belong to their respective owners.
        </div>
      </div>
    </footer>
  );
};
