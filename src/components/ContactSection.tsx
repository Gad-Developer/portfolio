import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedInIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from './icons/SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import profileData from '../data/profile.json';
import type { Profile } from '../types';

const profile: Profile = profileData as Profile;

export const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].contact;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.socials.whatsappDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 border-t border-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-300 p-8 sm:p-12 shadow-sm space-y-8 max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              {t.sectionTitle}
            </h2>
            <p className="text-sm sm:text-base font-bold text-slate-800 max-w-xl mx-auto leading-relaxed">
              {t.sectionSubtitle}
            </p>
          </div>

          {/* Primary Contact: WhatsApp Card */}
          <div className="rounded-2xl border-2 border-emerald-500 bg-emerald-50/50 p-6 sm:p-7 text-center space-y-4 shadow-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>{t.primaryBadge}</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                {t.primaryTitle}
              </h3>
              <p className="text-sm font-bold text-slate-700">
                {t.primaryDesc}
              </p>
            </div>

            {/* WhatsApp Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              <a
                href={profile.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base sm:text-lg transition shadow-sm group"
                title="Open WhatsApp Direct Chat Redirect Link"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>{t.chatWhatsApp}: {profile.socials.whatsappDisplay}</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base border border-slate-300 transition cursor-pointer shadow-xs"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-black">{t.copiedNumber}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-600" />
                    <span>{t.copyNumber}: {profile.socials.whatsappDisplay}</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Redirect Link URL Indicator */}
            <div className="pt-2 text-xs sm:text-sm font-bold text-slate-700 flex flex-wrap items-center justify-center gap-1.5">
              <span className="text-slate-500">{t.redirectLink}</span>
              <a
                href={profile.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 underline underline-offset-4 inline-flex items-center gap-1 font-mono font-bold"
              >
                <span dir="ltr">{profile.socials.whatsapp}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Secondary Contact: Email */}
          <div className="rounded-2xl border border-slate-300 bg-slate-50 p-5 sm:p-6 text-center space-y-3">
            <div className="text-xs font-black text-slate-500 uppercase tracking-wider">
              {t.secondaryBadge}
            </div>
            <div className="text-base sm:text-lg font-black text-slate-900">
              {t.emailLabel}: <span dir="ltr">{profile.socials.email}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              <a
                href={`mailto:${profile.socials.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base transition shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>{t.sendEmail}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base border border-slate-300 transition cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">{t.copiedEmail}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>{t.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links Bar */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-5 text-sm font-black text-slate-800">
            {profile.socials.whatsapp && (
              <a
                href={profile.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 transition"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{language === 'ar' ? 'واتساب' : 'WhatsApp'} ({profile.socials.whatsappDisplay})</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-950 transition"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-950 transition"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            {profile.socials.facebook && (
              <a
                href={profile.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-950 transition"
              >
                <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            {profile.socials.instagram && (
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-950 transition"
              >
                <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
