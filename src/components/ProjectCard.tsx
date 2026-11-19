import { useRef, useState } from 'react';
import { ExternalLink, Play, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpenDetails }: ProjectCardProps) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language].projects;
  const itemTrans = t.items[project.id as keyof typeof t.items];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const projectType = itemTrans?.type ?? project.category;
  const highlights = itemTrans?.highlights ?? project.keyFeatures.slice(0, 4);
  const mainTech = project.mainTech ?? project.techStack.slice(0, 3);

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const resolve = (path: string) =>
    path.startsWith('http') ? path : `${baseUrl}${path.replace(/^\//, '')}`;

  const thumbnailSrc = project.media.thumbnail ? resolve(project.media.thumbnail) : null;
  const videoSrc = project.media.videoWalkthrough ? resolve(project.media.videoWalkthrough) : null;

  const playVideo = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => setPlaying(false));
  };

  const MoreArrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <article className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14 items-center py-10 lg:min-h-[80vh] border-t border-slate-300 first:border-t-0">
      {/* Media frame */}
      <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden bg-slate-200 ring-1 ring-slate-900/10 shadow-[0_40px_70px_-35px_rgba(15,23,42,0.55)]">
        {thumbnailSrc && (
          <img
            src={thumbnailSrc}
            alt={itemTrans?.type ?? project.category}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        )}
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            playsInline
            preload="none"
            onEnded={() => setPlaying(false)}
            className={`absolute inset-0 w-full h-full object-contain bg-black transition-opacity duration-300 ${
              playing ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        )}

        {/* Bottom shade and action buttons */}
        <div
          className={`absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none transition-opacity duration-300 ${
            playing ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          className={`absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5 flex flex-wrap gap-2.5 transition-opacity duration-300 ${
            playing ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-bold shadow-sm hover:-translate-y-0.5 transition"
          >
            <span>{t.visitLive}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          {videoSrc && (
            <button
              type="button"
              onClick={playVideo}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/60 backdrop-blur-md text-white text-xs sm:text-sm font-bold ring-1 ring-white/25 hover:-translate-y-0.5 transition cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>{t.watchVideo}</span>
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-start">
        {/* Project type */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-900 text-white text-sm sm:text-base font-extrabold">
          {projectType}
        </span>

        {/* Main tech */}
        <div className="flex flex-wrap gap-2 mt-3">
          {mainTech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-white text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="w-full h-px bg-slate-300 my-5" />

        {/* Main features */}
        <ul className="space-y-3 w-full">
          {highlights.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5 text-sm sm:text-base font-semibold text-slate-800">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1.5" />
              <span className="leading-relaxed">{feat}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 hover:text-emerald-700 transition cursor-pointer group"
        >
          <span className="border-b-2 border-slate-900 group-hover:border-emerald-700">{t.showMore}</span>
          <MoreArrow className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
