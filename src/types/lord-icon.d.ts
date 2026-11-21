import type { DetailedHTMLProps, HTMLAttributes } from 'react';

// Lordicon web component (registered in main.tsx)
declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        trigger?: string;
        target?: string;
        state?: string;
        colors?: string;
        class?: string;
      };
    }
  }
}
