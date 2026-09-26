import { MapPin, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedInIcon, FacebookIcon, InstagramIcon } from './icons/SocialIcons';
import profileData from '../data/profile.json';
import type { Profile } from '../types';

const profile: Profile = profileData as Profile;

export const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Profile Card Container */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
          {/* Cover Banner */}
          <div className="relative h-44 sm:h-56 md:h-60 w-full bg-slate-100 overflow-hidden">
            <img
              src={`${baseUrl}${profile.cover}`}
              alt="Profile Cover"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Card Body */}
          <div className="px-5 sm:px-8 pb-7 sm:pb-8 pt-0">
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold self-start sm:self-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{profile.status}</span>
              </div>
            </div>

            {/* Identity & Typography */}
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-baseline gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {profile.name}
                </h1>
                <span className="text-slate-500 text-base font-medium">
                  — {profile.role}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.location}</span>
                <span>•</span>
                <span>React, Next.js, TypeScript, Node.js, Redis</span>
              </div>

              {/* Bio Paragraphs */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl pt-1">
                {profile.bio}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-3xl">
                {profile.subBio}
              </p>

              {/* Social Channels Row */}
              <div className="flex flex-wrap items-center gap-2.5 pt-3">
                {profile.socials.github && (
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium transition"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
                {profile.socials.linkedin && (
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium transition"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {profile.socials.facebook && (
                  <a
                    href={profile.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium transition"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
                    <span>Facebook</span>
                  </a>
                )}
                {profile.socials.instagram && (
                  <a
                    href={profile.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium transition"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-[#E4405F]" />
                    <span>Instagram</span>
                  </a>
                )}

                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium ml-auto transition shadow-xs"
                >
                  <span>View Projects</span>
                  <ArrowDown className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick Competency Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 mt-6 border-t border-slate-100">
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                  <div className="text-slate-900 font-bold text-xs sm:text-sm">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-[11px] mt-0.5">
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
