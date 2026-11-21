import { LordIcon } from './LordIcon';

/** Animated arrows (Lordicon). Drop-in replacements for lucide arrows. */
export type ArrowDir = 'up' | 'down' | 'left' | 'right' | 'upRight';

const FILES: Record<ArrowDir, string> = {
  up: 'arrow-up-hover-pointing.json',
  down: 'arrow-down-hover-pointing.json',
  left: 'arrow-left-hover-pointing.json',
  right: 'arrow-right-hover-pointing.json',
  upRight: 'system-solid-751-arrow-out-square-hover-pinch.json',
};

// Arrow files are ~3s long, the external-link icon ~1s
const SPEED: Record<ArrowDir, number> = { up: 3, down: 3, left: 3, right: 3, upRight: 1.5 };
const STATE: Record<ArrowDir, string> = {
  up: 'hover-pointing',
  down: 'hover-pointing',
  left: 'hover-pointing',
  right: 'hover-pointing',
  upRight: 'hover-pinch',
};

export const AnimatedArrow = ({ dir, className = 'w-4 h-4' }: { dir: ArrowDir; className?: string }) => (
  <LordIcon file={FILES[dir]} state={STATE[dir]} speed={SPEED[dir]} className={className} />
);
