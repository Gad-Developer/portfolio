import { ShieldCheck, Gauge, Layers, Terminal, Sparkles, CheckCheck } from 'lucide-react';

export const AboutSection = () => {
  const principles = [
    {
      icon: <Gauge className="w-5 h-5 text-emerald-400" />,
      title: "Performance & Sub-Second Latency",
      description:
        "Every millisecond of latency costs conversions. I implement in-memory caching (Upstash Redis), aggressive asset compression (80%+ reductions), and optimized database queries to guarantee instant responsiveness."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
      title: "Commercial-Grade Reliability & Security",
      description:
        "Enterprise authentication via secure HttpOnly session cookies, robust input validation, and strict client confidentiality. Built to handle production traffic spikes without degradation."
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "Generative Engine Optimization (GEO)",
      description:
        "Beyond traditional SEO: structuring rich JSON-LD entities (OnlineStore, Product, FAQPage) so your platform is indexed and accurately cited by modern AI search models (ChatGPT, Perplexity, Gemini, Google AI)."
    },
    {
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      title: "100% Type Safety & Maintainable Code",
      description:
        "Strict TypeScript types, modular component hierarchies, and clean domain boundaries. Codebases are designed so any engineer can step in and scale them effortlessly."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Software Engineered for Measurable Business Impact.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              I don't build generic boilerplate templates or over-engineered toys. I build commercial web applications designed to solve real operational bottlenecks, accelerate sales velocity, and deliver bulletproof user experiences.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Whether architecting a high-speed sports nutrition e-commerce platform with bilingual AI search discovery or building fluid interactive stores with hundreds of SKUs, my focus remains strictly on speed, security, and conversion.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-emerald-400">
              <span className="flex items-center gap-1.5">
                <CheckCheck className="w-4 h-4" /> Production Tested
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCheck className="w-4 h-4" /> Zero Bloat
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCheck className="w-4 h-4" /> Rapid Delivery
              </span>
            </div>
          </div>

          {/* Right Column: Principles Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-slate-800/80 inline-block border border-slate-700/60">
                  {p.icon}
                </div>
                <h3 className="font-bold text-base text-white">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
