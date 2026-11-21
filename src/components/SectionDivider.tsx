/**
 * Curved boundary between two sections.
 * The area above the curve takes the previous section's color (`top`),
 * the area below takes the next section's color (`bottom`), so each
 * section's background ends exactly on the curve.
 */
type Tone = 'page' | 'band';

const BG: Record<Tone, string> = { page: 'bg-page', band: 'bg-slate-200' };
const FILL: Record<Tone, string> = { page: 'fill-page', band: 'fill-slate-200' };

export const SectionDivider = ({ top = 'page', bottom = 'page' }: { top?: Tone; bottom?: Tone }) => (
  <div aria-hidden="true" className={`w-full leading-none text-slate-300 ${BG[top]}`}>
    <svg viewBox="0 0 1200 48" preserveAspectRatio="none" className="block w-full h-8 sm:h-12">
      <path d="M0 2 Q600 62 1200 2 L1200 49 L0 49 Z" className={FILL[bottom]} />
      <path d="M0 2 Q600 62 1200 2" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  </div>
);
