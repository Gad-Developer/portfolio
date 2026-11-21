import { useEffect, useRef } from 'react';

/**
 * Generic Lordicon player wrapper.
 * Icons live in public/icons as Lottie JSON. Size comes from w-/h- classes. When `recolor` is on,
 * the icon's ink follows the CSS `color` of the element (currentColor); logos turn it off to keep brand colors.
 * The animation plays when the surrounding link or button is hovered.
 */
const BASE = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

// The player draws inside a shadow root, so recoloring needs a stylesheet injected there.
//  - wired lineal icons expose .primary (strokes) and .secondary (soft fills)
//  - doodle black icons draw with rgb(22,22,28)
const STYLE =
  '.primary{stroke:currentColor !important}.primary:not([fill="none"]){fill:currentColor !important}' +
  '.secondary{fill:currentColor !important;fill-opacity:.25}' +
  '[stroke="rgb(22,22,28)"]{stroke:currentColor !important}[fill="rgb(22,22,28)"]{fill:currentColor !important}';

const injectColors = (el: HTMLElement): boolean => {
  const root = el.shadowRoot;
  if (!root || !root.querySelector('svg')) return false;
  if (!root.querySelector('style[data-recolor]')) {
    const style = document.createElement('style');
    style.setAttribute('data-recolor', '');
    style.textContent = STYLE;
    root.appendChild(style);
  }
  return true;
};

export interface LordIconProps {
  file: string;
  state: string;
  trigger?: string;
  speed?: number;
  recolor?: boolean;
  className?: string;
}

export const LordIcon = ({
  file,
  state,
  trigger = 'hover',
  speed = 1,
  recolor = true,
  className = 'w-4 h-4',
}: LordIconProps) => {
  const ref = useRef<HTMLElement & { speed?: number }>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.speed = speed;
  }, [speed, file]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !recolor || injectColors(el)) return;
    const onReady = () => injectColors(el);
    el.addEventListener('ready', onReady);
    const timer = window.setInterval(() => {
      if (injectColors(el)) window.clearInterval(timer);
    }, 150);
    const stop = window.setTimeout(() => window.clearInterval(timer), 4000);
    return () => {
      el.removeEventListener('ready', onReady);
      window.clearInterval(timer);
      window.clearTimeout(stop);
    };
  }, [recolor, file]);

  return (
    <lord-icon
      ref={ref}
      src={`${BASE}icons/${file}`}
      trigger={trigger}
      target="a,button"
      state={state}
      class={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    />
  );
};
