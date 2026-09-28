import { ExternalLink, Play, Check, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenVideo: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpenVideo }: ProjectCardProps) => {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const itemTrans = t.items[project.id as keyof typeof t.items];

  const title = itemTrans?.title ?? project.title;
  const tagline = itemTrans?.tagline ?? project.tagline;
  const keyFeatures = itemTrans?.keyFeatures ?? project.keyFeatures;
  const metrics = itemTrans?.metrics ?? project.metrics;

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
          onClick={() => {
            if (project.media?.videoWalkthrough) {
              onOpenVideo(project);
            } else {
              window.open(project.liveUrl, '_blank');
            }
          }}
          className="relative aspect-video w-full bg-slate-200 overflow-hidden cursor-pointer group"
        >
          <img
            src={thumbnailSrc}
            alt={title}
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          />

          {/* Overlay On Hover */}
          <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/45 transition-colors flex items-center justify-center">
            {project.media?.videoWalkthrough ? (
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-slate-900 text-sm font-extrabold shadow-lg group-hover:scale-105 transition-transform">
                <Play className="w-4 h-4 fill-slate-900 text-slate-900" />
                <span>{t.watchVideo}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-slate-900 text-sm font-extrabold shadow-lg group-hover:scale-105 transition-transform">
                <ExternalLink className="w-4 h-4 text-slate-900" />
                <span>{t.visitLive}</span>
              </div>
            )}
          </div>

          {/* Category Tag */}
          <div className="absolute top-3 start-3">
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
            <span className="text-slate-800">
              {project.category} {language === 'ar' ? '— عرض تجاري' : 'Showcase'}
            </span>
            <span className="text-slate-500 font-mono">{project.completedDate}</span>
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              {tagline}
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
              {t.highlightsTitle}
            </div>
            <ul className="space-y-2">
              {keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base font-semibold text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1 font-bold" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {metrics.map((metric, idx) => (
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
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition shadow-sm"
            >
              <span>{t.visitLive}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {project.media.videoWalkthrough && (
              <button
                type="button"
                onClick={() => onOpenVideo(project)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs sm:text-sm border border-slate-300 transition cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-slate-900" />
                <span>{t.watchVideo}</span>
              </button>
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 font-bold justify-center sm:justify-start">
            <Shield className="w-3.5 h-3.5 text-slate-500" />
            <span>{language === 'ar' ? 'مستودع كود خاص بالعميل' : 'Private Client Repo'}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
