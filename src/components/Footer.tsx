import { ArrowUp, Terminal } from 'lucide-react';
import profileData from '../data/profile.json';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Terminal className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold text-white">{profileData.name}</span>
            <span>• Full-Stack Portfolio</span>
          </div>

          {/* Architecture Badge */}
          <div className="text-center sm:text-left text-slate-400 font-mono text-[11px]">
            Static Architecture • React 19 + TypeScript + Tailwind CSS • GitHub Pages Deployed
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-slate-400 text-[11px]">
          © {new Date().getFullYear()} {profileData.name}. All client trademarks and brand names belong to their respective owners.
        </div>
      </div>
    </footer>
  );
};
