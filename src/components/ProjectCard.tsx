import { ExternalLink, Play, Check, Shield } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenVideo: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpenVideo }: ProjectCardProps) => {
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const thumbnailSrc = project.media?.thumbnail
    ? `${baseUrl}${project.media.thumbnail.replace(/^\//, '')}`
    : null;

  return (
    <article className="bg-white rounded-3xl border border-slate-300 hover:border-slate-400 shadow-sm transition-all duration-200 overflow-hidden flex flex-col">
      {/* Thumbnail Container */}
      {thumbnailSrc && (
        <div
          onClick={() => onOpenVideo(project)}
          className="relative aspect-video w-full bg-slate-200 overflow-hidden cursor-pointer group"
        >
          <img
            src={thumbnailSrc}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          />

          {/* Dark Overlay On Hover with Play Button */}
          <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/45 transition-colors flex items-center justify-center">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-slate-900 text-sm font-extrabold shadow-lg group-hover:scale-105 transition-transform">
              <Play className="w-4 h-4 fill-slate-900 text-slate-900" />
              <span>Watch Video Walkthrough</span>
            </div>
          </div>

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs sm:text-sm font-bold shadow-sm">
              {project.category}
            </span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
        <div className="space-y-4">
          {/* Header & Date */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 font-bold">
            <span className="text-slate-800">{project.category} Showcase</span>
            <span className="text-slate-500">{project.completedDate}</span>
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Achievements Bulletpoints */}
          <div className="pt-3 border-t border-slate-200 space-y-2">
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-600">
              Key Highlights
            </div>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base font-semibold text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1 font-bold" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.metrics.map((metric, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-bold"
                >
                  ✓ {metric}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition shadow-sm"
            >
              <span>Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {project.media.videoWalkthrough && (
              <button
                type="button"
                onClick={() => onOpenVideo(project)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs sm:text-sm border border-slate-300 transition cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-slate-900" />
                <span>Video Demo</span>
              </button>
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 font-bold">
            <Shield className="w-3.5 h-3.5 text-slate-500" />
            <span>Private Client Repo</span>
          </div>
        </div>
      </div>
    </article>
  );
};
