import { ExternalLink, Play, CheckCircle2, Shield, Layers } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenVideo: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpenVideo }: ProjectCardProps) => {
  const hasVideo = Boolean(project.media?.videoWalkthrough);

  return (
    <article className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700/90 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20 overflow-hidden flex flex-col">
      {/* Interactive Video Preview Box */}
      {hasVideo && (
        <div
          onClick={() => onOpenVideo(project)}
          className="relative aspect-video w-full bg-slate-950 border-b border-slate-800/70 overflow-hidden cursor-pointer group/video"
        >
          {/* Subtle Ambient Backlight */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent z-10" />

          {/* Video preview / placeholder frame */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Pulsing rings */}
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-20 w-20 rounded-full bg-emerald-500/20 animate-ping group-hover/video:bg-emerald-500/30" />
              <button
                type="button"
                className="relative z-20 w-16 h-16 rounded-full bg-emerald-500/90 group-hover/video:bg-emerald-400 text-slate-950 flex items-center justify-center transition-all duration-200 shadow-xl shadow-emerald-500/30 group-hover/video:scale-110"
                aria-label={`Watch walkthrough video for ${project.title}`}
              >
                <Play className="w-7 h-7 fill-slate-950 ml-0.5" />
              </button>
            </div>
          </div>

          {/* Overlay info tags */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-semibold border border-emerald-500/30">
              {project.category}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-xs text-slate-300">
            <span className="font-mono bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded border border-slate-800">
              ▶ Click to Watch Walkthrough
            </span>
            <span className="bg-emerald-950/80 text-emerald-400 font-mono px-2 py-1 rounded border border-emerald-800/50">
              HD 1080p
            </span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-6">
        <div className="space-y-4">
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            {!hasVideo && (
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-400 text-xs font-semibold border border-emerald-800/60">
                {project.category}
              </span>
            )}
            <span className="text-xs font-mono text-slate-400 ml-auto">
              Completed {project.completedDate}
            </span>
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-200 text-xs font-mono font-medium border border-slate-700/60 hover:border-emerald-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Engineering Features */}
          <div className="pt-2 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Key Engineering Highlights</span>
            </div>
            <ul className="space-y-1.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics Pills */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.metrics.map((metric, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono"
                >
                  ⚡ {metric}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition duration-150 shadow-md shadow-emerald-500/20 hover:-translate-y-0.5"
            >
              <span>Live Deployment</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {hasVideo && (
              <button
                type="button"
                onClick={() => onOpenVideo(project)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition"
              >
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span>Walkthrough</span>
              </button>
            )}
          </div>

          {/* Client Repo Status */}
          <div className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
            <Shield className="w-3 h-3 text-slate-400" />
            <span>Private Client Repo</span>
          </div>
        </div>
      </div>
    </article>
  );
};
