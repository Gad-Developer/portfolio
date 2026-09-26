import { useState, useMemo } from 'react';
import { ProjectCard } from './ProjectCard';
import { VideoModal } from './VideoModal';
import projectsData from '../data/projects.json';
import type { Project } from '../types';

const allProjects: Project[] = projectsData as Project[];

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    return ['All', ...new Set(allProjects.map((p) => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return allProjects;
    return allProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-10 sm:py-14 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Selected Projects
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Live production websites built for performance, reliability, and smooth user flow.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenVideo={(p) => setActiveVideoProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        project={activeVideoProject}
        onClose={() => setActiveVideoProject(null)}
      />
    </section>
  );
};
