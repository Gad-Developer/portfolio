import skillsData from '../data/skills.json';
import type { SkillCategory } from '../types';
import { Layers } from 'lucide-react';

const skillCategories: SkillCategory[] = skillsData as SkillCategory[];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-10 sm:py-14 border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
            Technical Stack & Engineering Capabilities
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-zinc-600">
            Core technologies and architectural practices applied across production systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-zinc-200/90 p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-zinc-100 mb-4">
                  <Layers className="w-4 h-4 text-zinc-700" />
                  <h3 className="font-semibold text-sm text-zinc-900">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-2 rounded-lg bg-zinc-50/80 border border-zinc-200/60 flex items-center justify-between text-xs"
                    >
                      <span className="font-medium text-zinc-800">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500">
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
