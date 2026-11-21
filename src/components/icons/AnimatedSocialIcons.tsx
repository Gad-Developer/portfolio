import { LordIcon } from './LordIcon';

export { WhatsAppIcon } from './SocialIcons';

/** Animated brand logos (Lordicon wired lineal). Brand colors are kept (no recolor). */
const SIZE = 'w-6 h-6 -m-1';
type P = { className?: string }; // accepted for drop-in compatibility, size is fixed here

export const GithubIcon = (_props: P) => (
  <LordIcon file="wired-lineal-2572-logo-github-hover-pinch.json" state="hover-pinch" speed={1.5} recolor={false} className={SIZE} />
);
export const LinkedInIcon = (_props: P) => (
  <LordIcon file="wired-lineal-2632-logo-circle-linkedin-hover-pinch.json" state="hover-pinch" speed={1.5} recolor={false} className={SIZE} />
);
export const FacebookIcon = (_props: P) => (
  <LordIcon file="wired-lineal-2624-logo-circle-facebook-hover-pinch.json" state="hover-pinch" speed={1.5} recolor={false} className={SIZE} />
);
export const InstagramIcon = (_props: P) => (
  <LordIcon file="wired-lineal-2542-logo-instagram-hover-pinch.json" state="hover-pinch" speed={1.5} recolor={false} className={SIZE} />
);
