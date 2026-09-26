import skillsData from '../data/skills.json';
import type { SkillCategory } from '../types';
import { Cpu, CheckCircle2, Zap } from 'lucide-react';

const skillCategories: SkillCategory[] = skillsData as SkillCategory[];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Stack & Architecture
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Every tool in this stack is chosen for production reliability, type safety, sub-second latency,
            and maintainability across scale.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700/80 transition duration-300"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800 mb-5">
                  <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Zap className="w-4 h-4" />
                  </span>
                  <h3 className="font-bold text-lg text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                        skill.highlight
                          ? 'bg-slate-800/80 border-emerald-500/30 text-white shadow-sm'
                          : 'bg-slate-900/80 border-slate-800/80 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            skill.highlight ? 'text-emerald-400' : 'text-slate-500'
                          }`}
                        />
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                          skill.highlight
                            ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/50'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
