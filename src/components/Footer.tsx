import { ArrowUp } from 'lucide-react';
import profileData from '../data/profile.json';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-slate-500 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-700">
            <span className="font-bold text-slate-900">{profileData.name}</span>
            <span>•</span>
            <span className="text-slate-500">Full-Stack Developer</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-[11px]">
              Built with React, TypeScript & Tailwind CSS
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 text-center sm:text-left text-slate-400 text-[11px]">
          © {new Date().getFullYear()} {profileData.name}. All trademarks and client assets belong to their respective owners.
        </div>
      </div>
    </footer>
  );
};
