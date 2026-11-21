import { useEffect } from 'react';
import { X } from 'lucide-react';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import type { Project } from '../types';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal = ({ project, onClose }: ProjectDetailsModalProps) => {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const closeLabel = translations[language].modal.close;

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const item = t.items[project.id as keyof typeof t.items];
  const projectType = item?.type ?? project.category;
  const features = item?.keyFeatures ?? project.keyFeatures;
  const metrics = item?.metrics ?? project.metrics ?? [];

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const resolve = (path: string) =>
    path.startsWith('http') ? path : `${baseUrl}${path.replace(/^\//, '')}`;
  const thumbnailSrc = project.media.thumbnail ? resolve(project.media.thumbnail) : undefined;
  const videoSrc = project.media.videoWalkthrough ? resolve(project.media.videoWalkthrough) : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-details-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-[3vh] bg-slate-950/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-6xl h-full bg-surface border border-slate-300 sm:rounded-[28px] shadow-2xl overflow-y-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[5fr_6fr]">
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute top-4 end-4 z-10 w-10 h-10 rounded-full bg-surface shadow flex items-center justify-center text-slate-700 hover:text-slate-900 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media + highlights */}
        <div className="bg-slate-100 border-b lg:border-b-0 lg:border-e border-slate-300 p-5 pt-16 sm:p-7 lg:pt-7 flex flex-col justify-center gap-5">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-slate-300 shadow-sm">
            {videoSrc ? (
              <video
                src={videoSrc}
                poster={thumbnailSrc}
                controls
                playsInline
                className="absolute inset-0 w-full h-full object-contain bg-black"
              />
            ) : (
              thumbnailSrc && (
                <img src={thumbnailSrc} alt={projectType} className="absolute inset-0 w-full h-full object-cover object-top" />
              )
            )}
          </div>
          <div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold transition"
            >
              <span>{t.visitLive}</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
          {metrics.length > 0 && (
            <div className="grid gap-2.5">
              {metrics.map((m) => (
                <div
                  key={m}
                  className="flex items-center gap-3 rounded-2xl bg-surface border border-slate-300 px-4 py-3 text-sm font-bold text-slate-900"
                >
                  <span className="text-brand-600 text-xs">◆</span>
                  {m}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-6 sm:p-9 lg:overflow-y-auto">
          <h2 id="project-details-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight pe-12">
            {projectType}
          </h2>
          <p className="mt-3 text-base sm:text-lg font-medium text-slate-700 leading-relaxed">{item?.tagline ?? project.tagline}</p>

          <h3 className="mt-8 mb-3 text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-500">
            {t.overviewTitle}
          </h3>
          <p className="text-sm sm:text-base font-medium text-slate-700 leading-loose">
            {item?.description ?? project.description}
          </p>

          <h3 className="mt-8 mb-3 text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-500">
            {t.keyFeaturesTitle}
          </h3>
          <ol className="grid gap-3">
            {features.map((feat, idx) => (
              <li key={feat} className="flex items-start gap-3.5 rounded-2xl bg-surface border border-slate-200 p-4">
                <span className="shrink-0 w-9 h-9 rounded-xl bg-brand-100 text-brand-800 font-extrabold flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">{feat}</span>
              </li>
            ))}
          </ol>

          <h3 className="mt-8 mb-3 text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-500">
            {t.techStackTitle}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg bg-ink text-on-ink text-xs sm:text-sm font-semibold font-mono">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink hover:bg-ink-hover text-on-ink text-sm font-bold transition"
            >
              <span>{t.visitLive}</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-surface border border-slate-300 text-slate-900 text-sm font-bold hover:bg-slate-50 transition cursor-pointer"
            >
              {closeLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
