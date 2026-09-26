import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedInIcon, FacebookIcon, InstagramIcon } from './icons/SocialIcons';
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
    <section id="contact" className="py-12 sm:py-16 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Available for full-stack web development projects, custom e-commerce stores,
              and performance improvements.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`mailto:${profile.socials.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Direct Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs transition cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy: {profile.socials.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 transition"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            )}

            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 transition"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            )}

            {profile.socials.facebook && (
              <a
                href={profile.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 transition"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
                <span>Facebook</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            )}

            {profile.socials.instagram && (
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 transition"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#E4405F]" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
