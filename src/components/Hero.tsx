import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import profileData from '../data/profile.json';
import type { Profile } from '../types';

const profile: Profile = profileData as Profile;

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/60 shadow-inner">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono tracking-wide text-slate-300">
              High-Velocity Full-Stack Engineering • Production Deployed
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Building Fast, Scalable &{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              High-Conversion
            </span>{' '}
            Web Platforms.
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Specializing in <span className="text-white font-medium">React, Next.js, TypeScript</span>, and{' '}
            <span className="text-white font-medium">high-speed in-memory caching</span>. Transforming complex
            commercial requirements into resilient systems with sub-second speeds and flawless user experiences.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              <span>Explore Featured Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#skills"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition hover:border-slate-600"
            >
              <Code2 className="w-4 h-4 text-slate-400" />
              <span>Technical Matrix</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
            {profile.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm"
              >
                <div className="text-emerald-400 font-bold text-sm sm:text-base font-mono">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
