import { useState } from 'react';
import { Mail, Copy, Check, MessageSquare, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import profileData from '../data/profile.json';
import type { Profile } from '../types';

const profile: Profile = profileData as Profile;

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-slate-900 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <Send className="w-3.5 h-3.5" />
          <span>Initiate Communication</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Have a Project in Mind? Let’s Build Something Exceptional.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you need a high-speed commercial web application, an e-commerce platform revamp,
          or full-stack technical consulting, I am currently available for select high-impact engagements.
        </p>

        {/* Primary Contact Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <a
            href={`mailto:${profile.socials.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-emerald-500/25 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Send Direct Email</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Social Badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-4 text-xs">
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          )}

          {profile.socials.whatsapp && (
            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          )}

          {profile.socials.telegram && (
            <a
              href={profile.socials.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Telegram Chat</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
