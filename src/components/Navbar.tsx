import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { GithubIcon, LinkedInIcon, FacebookIcon, InstagramIcon } from './icons/SocialIcons';
import profileData from '../data/profile.json';
import type { Profile } from '../types';

const profile: Profile = profileData as Profile;

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-300 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src={`${baseUrl}${profile.avatar}`}
              alt={profile.name}
              className="w-9 h-9 rounded-full object-cover border-2 border-slate-300 shadow-xs"
            />
            <div className="flex items-center gap-2">
              <span className="font-black text-lg tracking-tight text-slate-950 group-hover:text-slate-700 transition">
                {profile.name}
              </span>
              <span className="text-slate-400 font-bold">/</span>
              <span className="text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-300">
                Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-2 text-sm sm:text-base font-bold text-slate-800">
            <a href="#projects" className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100 transition">
              Projects
            </a>
            <a href="#skills" className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100 transition">
              Skills & Stack
            </a>
            <a href="#about" className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100 transition">
              About
            </a>
            <a href="#contact" className="px-3 py-1.5 rounded-lg hover:text-slate-950 hover:bg-slate-100 transition">
              Contact
            </a>
          </nav>

          {/* Social Icons & Email Button */}
          <div className="hidden sm:flex items-center gap-2">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition"
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
                className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition"
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
                className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition"
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
                className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
              </a>
            )}

            <div className="h-5 w-px bg-slate-300 mx-1.5" />

            <a
              href={`mailto:${profile.socials.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100"
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
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-slate-900 hover:bg-slate-100"
          >
            Skills & Stack
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-slate-900 hover:bg-slate-100"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-slate-900 hover:bg-slate-100"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {profile.socials.github && (
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-slate-700 p-1.5">
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {profile.socials.linkedin && (
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-700 p-1.5">
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              )}
              {profile.socials.facebook && (
                <a href={profile.socials.facebook} target="_blank" rel="noreferrer" className="text-slate-700 p-1.5">
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {profile.socials.instagram && (
                <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="text-slate-700 p-1.5">
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
            </div>
            <a
              href={`mailto:${profile.socials.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 text-white font-bold text-xs sm:text-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
