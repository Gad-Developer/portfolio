import skillsData from '../data/skills.json';
import type { SkillCategory } from '../types';
import { LayersIcon } from './icons/AppIcons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const skillCategories: SkillCategory[] = skillsData as SkillCategory[];

export const SkillsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section id="skills" className="py-16 sm:py-20 bg-slate-200">
      <div className="w-[90%] mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            {t.sectionTitle}
          </h2>
          <span className="block mt-2.5 h-1.5 w-14 rounded-full bg-brand-600" />
          <p className="mt-2 text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
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
                className="bg-surface rounded-3xl border border-slate-300 border-t-[6px] border-t-brand-600 p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-3.5 border-b border-slate-200 mb-4">
                    <LayersIcon className="w-6 h-6 text-brand-600" />
                    <h3 className="font-black text-base sm:text-lg text-slate-950">
                      {categoryTitle}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => {
                      return (
                        <div
                          key={sIdx}
                          className="px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200"
                        >
                          <span className="font-extrabold text-sm text-slate-950">
                            {skill.name}
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
