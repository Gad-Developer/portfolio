import { PinIcon } from './icons/AppIcons';
import { AnimatedArrow } from './icons/AnimatedArrow';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';
import { GithubIcon, LinkedInIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from './icons/AnimatedSocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import profileData from '../data/profile.json';
import type { Profile } from '../types';

const profile: Profile = profileData as Profile;

export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return (
    <section className="pt-14 pb-8 sm:pt-16 sm:pb-12">
      <div className="w-[90%] mx-auto">
        {/* Profile Card Container */}
        <div className="bg-surface rounded-3xl border border-slate-300 border-t-[6px] border-t-brand-600 shadow-sm overflow-hidden">
          {/* Cover Banner */}
          <div className="relative h-48 sm:h-72 md:h-96 w-full bg-slate-200 overflow-hidden">
            <img
              src={`${baseUrl}${profile.cover}`}
              alt="Profile Cover"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Card Body */}
          <div className="px-5 sm:px-8 pb-8 pt-0">
            {/* Avatar & Availability Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-12 sm:-mt-16 mb-4 sm:mb-5 gap-3 sm:gap-4">
              <div className="relative inline-block">
                <img
                  src={`${baseUrl}${profile.avatar}`}
                  alt={profile.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-surface shadow-md bg-surface"
                />
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-800 text-xs sm:text-sm font-bold self-start sm:self-auto">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-600"></span>
                </span>
                <span>{t.status}</span>
              </div>
            </div>

            {/* Identity & Typography */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline gap-2.5">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {t.name}
                </h1>
                <span className="text-slate-600 text-base sm:text-xl font-bold">
                  — {t.role}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-bold">
                <div className="inline-flex items-center gap-1.5">
                  <PinIcon className="w-5 h-5 text-slate-500" />
                  <span>{t.location}</span>
                </div>
                <span>•</span>
                <span>{t.techLine}</span>
              </div>

              {/* Bio Paragraphs */}
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed max-w-3xl pt-1">
                {t.bio}
              </p>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl">
                {t.subBio}
              </p>

              {/* Social Channels Row: Responsive Flow on Mobile */}
              <div className="flex flex-wrap items-center gap-2.5 pt-3">
                {profile.socials.whatsapp && (
                  <a
                    href={profile.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-black transition shadow-xs"
                    title="Direct WhatsApp Chat"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>{t.whatsappLabel}: {profile.socials.whatsappDisplay}</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 text-emerald-200" />
                  </a>
                )}

                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  {profile.socials.github && (
                    <a
                      href={profile.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-bold border border-slate-300 transition"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {profile.socials.linkedin && (
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-bold border border-slate-300 transition"
                    >
                      <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {profile.socials.facebook && (
                    <a
                      href={profile.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-bold border border-slate-300 transition"
                    >
                      <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                      <span>Facebook</span>
                    </a>
                  )}
                  {profile.socials.instagram && (
                    <a
                      href={profile.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-bold border border-slate-300 transition"
                    >
                      <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>

                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold sm:ms-auto transition shadow-xs"
                >
                  <span>{t.viewProjects}</span>
                  <AnimatedArrow dir="down" className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Competency Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-6 mt-6 border-t border-slate-200">
              {t.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-brand-100 border border-brand-200 border-s-4 border-s-brand-600">
                  <div className="text-brand-800 font-extrabold text-sm sm:text-base">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-bold text-xs sm:text-sm mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
