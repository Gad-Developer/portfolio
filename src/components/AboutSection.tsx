import { ShieldCheck, Gauge, Layers, Terminal } from 'lucide-react';

export const AboutSection = () => {
  const principles = [
    {
      icon: <Gauge className="w-4 h-4 text-zinc-800" />,
      title: "Sub-Second Latency & Caching",
      description:
        "Implementing Upstash Redis in-memory layers, query optimization, and asset compression (80%+ reductions) to eliminate lag and maximize user retention."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-zinc-800" />,
      title: "Commercial-Grade Reliability",
      description:
        "Building with secure HttpOnly cookie sessions, rigorous schema validations, and zero server crashes during traffic spikes."
    },
    {
      icon: <Layers className="w-4 h-4 text-zinc-800" />,
      title: "AI Search Optimization (GEO)",
      description:
        "Structuring bilingual JSON-LD entities (OnlineStore, Product, FAQPage) so client platforms are directly discovered and cited by ChatGPT, Perplexity, and Google AI."
    },
    {
      icon: <Terminal className="w-4 h-4 text-zinc-800" />,
      title: "Type Safety & Clean Boundaries",
      description:
        "Strict TypeScript types and decoupled architectures that keep codebases predictable, testable, and effortless to extend."
    }
  ];

  return (
    <section id="about" className="py-10 sm:py-14 border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
              Engineering Approach & Delivery
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              I focus on building commercial software that solves real operational bottlenecks, reduces server cost, and delivers responsive user experiences.
            </p>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
              Every system is engineered from day one with type safety, clean data layers, and fast deployment pipelines.
            </p>
          </div>

          {/* Right Column: 4 Principle Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-zinc-200/90 p-4 shadow-xs space-y-2"
              >
                <div className="p-1.5 rounded-md bg-zinc-100 w-fit text-zinc-800">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-xs sm:text-sm text-zinc-900">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
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
