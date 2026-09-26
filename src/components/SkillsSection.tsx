import skillsData from '../data/skills.json';
import type { SkillCategory } from '../types';
import { Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const skillCategories: SkillCategory[] = skillsData as SkillCategory[];

export const SkillsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section id="skills" className="py-12 sm:py-16 border-t border-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="mt-1.5 text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const categoryTitle =
              t.categories[cat.category as keyof typeof t.categories] || cat.category;

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-300 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-3.5 border-b border-slate-200 mb-4">
                    <Layers className="w-5 h-5 text-slate-900" />
                    <h3 className="font-black text-base sm:text-lg text-slate-950">
                      {categoryTitle}
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => {
                      const levelText =
                        t.levels[skill.level as keyof typeof t.levels] || skill.level;

                      return (
                        <div
                          key={sIdx}
                          className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                        >
                          <span className="font-extrabold text-sm text-slate-950">
                            {skill.name}
                          </span>
                          <span className="text-xs font-black font-mono px-2.5 py-1 rounded-md bg-slate-200 text-slate-900 border border-slate-300">
                            {levelText}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
