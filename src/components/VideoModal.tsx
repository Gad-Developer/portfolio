import { useEffect, useRef } from 'react';
import { X, ExternalLink, Film, CheckCircle2 } from 'lucide-react';
import type { Project } from '../types';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const VideoModal = ({ project, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  // Clean video playback when closed or changed
  useEffect(() => {
    if (!project && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [project]);

  if (!project || !project.media.videoWalkthrough) return null;

  // Resolve base path for GitHub Pages relative URL
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  
  const videoSrc = project.media.videoWalkthrough.startsWith('http')
    ? project.media.videoWalkthrough
    : `${baseUrl}${project.media.videoWalkthrough.replace(/^\//, '')}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-5xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Film className="w-4 h-4" />
            </span>
            <div>
              <h2 id="modal-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs text-slate-400">
                HD Walkthrough & Feature Demo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Box */}
        <div className="relative bg-black flex items-center justify-center aspect-video w-full overflow-hidden">
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Modal Footer / Feature Highlights */}
        <div className="p-4 sm:p-5 bg-slate-950/60 border-t border-slate-800/80 overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md bg-slate-800/90 text-slate-300 text-xs font-mono border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex sm:hidden items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition"
            >
              <span>Visit Live Production Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
            {project.keyFeatures.slice(0, 4).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
