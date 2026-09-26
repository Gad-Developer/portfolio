import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedInIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from './icons/SocialIcons';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import profileData from '../data/profile.json';
import type { Profile } from '../types';

const profile: Profile = profileData as Profile;

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-300 bg-white/95 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src={`${baseUrl}${profile.avatar}`}
              alt={profile.name}
              className="w-8 h-8 rounded-full object-cover border border-slate-300 shadow-2xs"
            />
            <span className="font-black text-lg tracking-tight text-slate-950 group-hover:text-slate-700 transition">
              {profile.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 text-sm font-bold text-slate-700">
            <a href="#projects" className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100 transition">
              {t.projects}
            </a>
            <a href="#skills" className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100 transition">
              {t.skills}
            </a>
            <a href="#about" className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100 transition">
              {t.about}
            </a>
            <a href="#contact" className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100 transition">
              {t.contact}
            </a>
          </nav>

          {/* Desktop Right Actions: Language Toggle & Compact WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <LanguageToggle />

            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm transition shadow-2xs"
              title={`WhatsApp: ${profile.socials.whatsappDisplay}`}
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>{t.whatsapp}</span>
              <ArrowUpRight className="w-3 h-3 text-emerald-200" />
            </a>
          </div>

          {/* Mobile Right: Language Toggle & Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-300 bg-white px-4 pt-3 pb-5 space-y-2">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-slate-900 hover:bg-slate-100"
          >
            {t.projects}
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-slate-900 hover:bg-slate-100"
          >
            {t.skills}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-slate-900 hover:bg-slate-100"
          >
            {t.about}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-slate-900 hover:bg-slate-100"
          >
            {t.contact}
          </a>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
            {/* Socials inside mobile drawer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {profile.socials.github && (
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-700 hover:text-slate-950 p-1.5"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {profile.socials.linkedin && (
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-700 hover:text-slate-950 p-1.5"
                    title="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                  </a>
                )}
                {profile.socials.facebook && (
                  <a
                    href={profile.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-700 hover:text-slate-950 p-1.5"
                    title="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                  </a>
                )}
                {profile.socials.instagram && (
                  <a
                    href={profile.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-700 hover:text-slate-950 p-1.5"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
                  </a>
                )}
              </div>
            </div>

            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t.whatsapp}: {profile.socials.whatsappDisplay} ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
