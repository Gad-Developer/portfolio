import skillsData from '../data/skills.json';
import type { SkillCategory } from '../types';
import { Layers } from 'lucide-react';

const skillCategories: SkillCategory[] = skillsData as SkillCategory[];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 border-t border-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills & Tools
          </h2>
          <p className="mt-1 text-sm sm:text-base font-semibold text-slate-600">
            Core technologies and tools I use to build fast, modern web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-300 p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3.5 border-b border-slate-200 mb-4">
                  <Layers className="w-5 h-5 text-slate-800" />
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                    >
                      <span className="font-bold text-sm text-slate-900">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-800 border border-slate-300">
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
