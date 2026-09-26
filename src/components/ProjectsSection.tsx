import { useState, useMemo } from 'react';
import { ProjectCard } from './ProjectCard';
import { VideoModal } from './VideoModal';
import projectsData from '../data/projects.json';
import type { Project } from '../types';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';

const allProjects: Project[] = projectsData as Project[];

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null);

  // Derive unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(allProjects.map((p) => p.category))];
    return cats;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return allProjects;
    return allProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Web Platforms
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              Real-world e-commerce, high-concurrency systems, and scalable applications engineered
              with modern architectural patterns and audited for maximum Core Web Vitals performance.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3 text-emerald-400" />
              <span>Filter:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenVideo={(p) => setActiveVideoProject(p)}
            />
          ))}
        </div>

        {/* Extensibility Notice Badge */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-slate-200">Continuous Delivery Ready:</strong> New commercial projects are dynamically injected into this showcase directly via <code className="text-emerald-400 font-mono">src/data/projects.json</code>.
            </span>
          </div>
          <span className="font-mono text-emerald-400/80">
            {allProjects.length} Active Showcases
          </span>
        </div>
      </div>

      {/* Video Walkthrough Player Modal */}
      <VideoModal
        project={activeVideoProject}
        onClose={() => setActiveVideoProject(null)}
      />
    </section>
  );
};
