import { LordIcon } from './LordIcon';

/** Animated replacements for the lucide icons used across the site (Lordicon, doodle black). */
type P = { className?: string };

export const CheckIcon = ({ className }: P) => (
  <LordIcon file="doodle-black-37-check-hover-pinch.json" state="hover-pinch" speed={1.5} className={className} />
);
export const LayersIcon = ({ className }: P) => (
  <LordIcon file="doodle-black-12-layers-hover-slide.json" state="hover-slide" speed={1.5} className={className} />
);
export const TerminalIcon = ({ className }: P) => (
  <LordIcon file="doodle-black-1326-browser-terminal-hover-pinch.json" state="hover-pinch" speed={1.5} className={className} />
);
export const PinIcon = ({ className }: P) => (
  <LordIcon file="doodle-black-18-location-pin-hover-pinch.json" state="hover-pinch" speed={1.5} className={className} />
);
export const MoonIcon = ({ className }: P) => (
  <LordIcon file="doodle-black-1821-moon-stars-hover-pinch.json" state="hover-pinch" speed={1.5} className={className} />
);
export const MailIcon = ({ className }: P) => (
  <LordIcon file="doodle-black-3090-mail-open-document-morph-open.json" state="morph-open" trigger="morph" className={className} />
);
