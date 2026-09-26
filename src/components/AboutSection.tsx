import { ShieldCheck, Gauge, Layers, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const icons = [
    <Gauge className="w-5 h-5 text-slate-950" />,
    <ShieldCheck className="w-5 h-5 text-slate-950" />,
    <Layers className="w-5 h-5 text-slate-950" />,
    <Terminal className="w-5 h-5 text-slate-950" />,
  ];

  return (
    <section id="about" className="py-12 sm:py-16 border-t border-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              {t.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg font-bold text-slate-950 leading-relaxed">
              {t.lead}
            </p>
            <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Right Column: 4 Principle Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.principles.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-300 p-5 shadow-sm space-y-2.5"
              >
                <div className="p-2 rounded-xl bg-slate-100 w-fit text-slate-950 border border-slate-300">
                  {icons[idx]}
                </div>
                <h3 className="font-black text-base text-slate-950">
                  {p.title}
                </h3>
                <p className="text-sm font-bold text-slate-800 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
