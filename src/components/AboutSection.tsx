import { ShieldCheck, Gauge, Layers, Terminal } from 'lucide-react';

export const AboutSection = () => {
  const principles = [
    {
      icon: <Gauge className="w-5 h-5 text-slate-900" />,
      title: "Fast Speeds & Caching",
      description:
        "Using Redis in-memory caching and optimized image compression (80%+ smaller) so pages load in milliseconds."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-slate-900" />,
      title: "Reliable & Secure Code",
      description:
        "Clean server validation, secure sessions via HttpOnly cookies, and strict client data confidentiality."
    },
    {
      icon: <Layers className="w-5 h-5 text-slate-900" />,
      title: "Search & SEO Optimization",
      description:
        "Implementing rich JSON-LD schemas so products and pages show up clearly in Google Search and modern AI answers."
    },
    {
      icon: <Terminal className="w-5 h-5 text-slate-900" />,
      title: "Clean TypeScript Code",
      description:
        "Writing clean, typed, modular code that is simple to understand, maintain, and expand as the project grows."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 border-t border-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-3.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Development Standards
            </h2>
            <p className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed">
              I focus on building commercial websites and web apps that are fast, easy to navigate, and reliable for customers and business owners.
            </p>
            <p className="text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
              Every project is built with clean code, tested on mobile and desktop, and deployed on modern fast hosting.
            </p>
          </div>

          {/* Right Column: 4 Principle Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-300 p-5 shadow-sm space-y-2.5"
              >
                <div className="p-2 rounded-xl bg-slate-100 w-fit text-slate-900 border border-slate-200">
                  {p.icon}
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed">
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
