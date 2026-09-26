import { MapPin, ArrowDown, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedInIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from './icons/SocialIcons';
import profileData from '../data/profile.json';
import type { Profile } from '../types';

const profile: Profile = profileData as Profile;

export const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return (
    <section className="pt-6 pb-10 sm:pt-8 sm:pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Profile Card Container */}
        <div className="bg-white rounded-3xl border border-slate-300 shadow-sm overflow-hidden">
          {/* Cover Banner */}
          <div className="relative h-44 sm:h-56 md:h-64 w-full bg-slate-200 overflow-hidden">
            <img
              src={`${baseUrl}${profile.cover}`}
              alt="Profile Cover"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Card Body */}
          <div className="px-5 sm:px-8 pb-8 pt-0">
            {/* Avatar & Availability Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-14 sm:-mt-16 mb-5 gap-4">
              <div className="relative inline-block">
                <img
                  src={`${baseUrl}${profile.avatar}`}
                  alt={profile.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white shadow-md bg-white"
                />
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold self-start sm:self-auto">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span>{profile.status}</span>
              </div>
            </div>

            {/* Identity & Typography */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline gap-2.5">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {profile.name}
                </h1>
                <span className="text-slate-600 text-lg sm:text-xl font-bold">
                  — {profile.role}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-bold">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{profile.location}</span>
                <span>•</span>
                <span>React, Next.js, TypeScript, Node.js, Redis</span>
              </div>

              {/* Bio Paragraphs */}
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed max-w-3xl pt-1">
                {profile.bio}
              </p>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl">
                {profile.subBio}
              </p>

              {/* Social Channels Row */}
              <div className="flex flex-wrap items-center gap-2.5 pt-3">
                {profile.socials.whatsapp && (
                  <a
                    href={profile.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-black transition shadow-xs"
                    title="Direct WhatsApp Chat"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp: {profile.socials.whatsappDisplay}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-100" />
                  </a>
                )}
                {profile.socials.github && (
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-bold border border-slate-300 transition"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-bold border border-slate-300 transition"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-bold border border-slate-300 transition"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-bold border border-slate-300 transition"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
                    <span>Instagram</span>
                  </a>
                )}

                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold ml-auto transition shadow-xs"
                >
                  <span>View Projects</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Competency Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-slate-200">
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-100 border border-slate-300">
                  <div className="text-slate-900 font-extrabold text-sm sm:text-base">
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
