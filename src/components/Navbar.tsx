import { useState } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedInIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from './icons/SocialIcons';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import profileData from '../data/profile.json';
import type { Profile } from '../types';

const profile: Profile = profileData as Profile;

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, isRTL } = useLanguage();
  const t = translations[language].nav;

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const navLinks = [
    { href: '#projects', label: t.projects },
    { href: '#skills', label: t.skills },
    { href: '#about', label: t.about },
    { href: '#contact', label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-300 bg-white/95 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <img
              src={`${baseUrl}${profile.avatar}`}
              alt={profile.name}
              className="w-8 h-8 rounded-full object-cover border border-slate-300 shadow-2xs"
            />
            <span className="font-black text-lg sm:text-xl tracking-tight text-slate-950 group-hover:text-slate-700 transition">
              {profile.name}
            </span>
          </a>

          {/* Desktop Nav Links: Large, Bold, High Contrast */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 text-base lg:text-lg font-black text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-xl hover:text-slate-950 hover:bg-slate-100 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions: Language Toggle & Compact WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <LanguageToggle />

            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm transition shadow-2xs"
              title={`WhatsApp: ${profile.socials.whatsappDisplay}`}
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>{t.whatsapp}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-200" />
            </a>
          </div>

          {/* Mobile Right Controls: Language Toggle & Touch-Friendly Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-800 hover:text-slate-950 hover:bg-slate-100 border border-slate-200 cursor-pointer transition"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown: High-Quality Full Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-300 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-lg font-black text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition"
              >
                <span>{link.label}</span>
                <ChevronRight
                  className={`w-5 h-5 text-slate-400 ${isRTL ? 'rotate-180' : ''}`}
                />
              </a>
            ))}
          </div>

          {/* Mobile WhatsApp CTA Button */}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base shadow-sm transition"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>{t.whatsapp}: {profile.socials.whatsappDisplay}</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-200" />
            </a>

            {/* Social Channels Row inside Mobile Drawer */}
            <div className="flex items-center justify-center gap-3 pt-1">
              {profile.socials.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 text-slate-800 hover:text-slate-950 hover:bg-slate-200 border border-slate-300 transition"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
              {profile.socials.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 text-slate-800 hover:text-slate-950 hover:bg-slate-200 border border-slate-300 transition"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5 text-[#0A66C2]" />
                </a>
              )}
              {profile.socials.facebook && (
                <a
                  href={profile.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 text-slate-800 hover:text-slate-950 hover:bg-slate-200 border border-slate-300 transition"
                  title="Facebook"
                >
                  <FacebookIcon className="w-5 h-5 text-[#1877F2]" />
                </a>
              )}
              {profile.socials.instagram && (
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 text-slate-800 hover:text-slate-950 hover:bg-slate-200 border border-slate-300 transition"
                  title="Instagram"
                >
                  <InstagramIcon className="w-5 h-5 text-[#E4405F]" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
