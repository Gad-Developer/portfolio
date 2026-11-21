import { AnimatedArrow } from './AnimatedArrow';

/** Animated up-right arrow: drop-in for lucide's ArrowUpRight / ExternalLink. */
export const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <AnimatedArrow dir="upRight" className={className} />
);
