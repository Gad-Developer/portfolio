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
    <article className="bg-white rounded-2xl border border-zinc-200/90 hover:border-zinc-300 shadow-xs hover:shadow-sm transition-all duration-200 overflow-hidden flex flex-col">
      {/* Thumbnail Container */}
      {thumbnailSrc && (
        <div
          onClick={() => onOpenVideo(project)}
          className="relative aspect-video w-full bg-zinc-100 overflow-hidden cursor-pointer group"
        >
          <img
            src={thumbnailSrc}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          />

          {/* Dark Overlay On Hover with Play Button */}
          <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/40 transition-colors flex items-center justify-center">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 text-zinc-900 text-xs font-semibold shadow-md group-hover:scale-105 transition-transform">
              <Play className="w-3.5 h-3.5 fill-zinc-900 text-zinc-900" />
              <span>Watch Video Walkthrough</span>
            </div>
          </div>

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-zinc-800 text-[11px] font-semibold shadow-xs border border-zinc-200">
              {project.category}
            </span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-3">
          {/* Header & Date */}
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span className="font-medium text-zinc-700">{project.category} Showcase</span>
            <span>{project.completedDate}</span>
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight leading-snug">
              {project.title}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 text-xs font-mono border border-zinc-200/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Achievements Bulletpoints */}
          <div className="pt-2 border-t border-zinc-100 space-y-1.5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              Engineering Highlights
            </div>
            <ul className="space-y-1.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.metrics.map((metric, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-mono"
                >
                  ✓ {metric}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs transition"
            >
              <span>Live Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {project.media.videoWalkthrough && (
              <button
                type="button"
                onClick={() => onOpenVideo(project)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium text-xs transition cursor-pointer"
              >
                <Play className="w-3 h-3 fill-zinc-800" />
                <span>Video Demo</span>
              </button>
            )}
          </div>

          <div className="inline-flex items-center gap-1 text-[11px] text-zinc-500 font-mono">
            <Shield className="w-3 h-3 text-zinc-400" />
            <span>Private Client Repo</span>
          </div>
        </div>
      </div>
    </article>
  );
};
