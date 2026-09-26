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
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src={`${baseUrl}${profile.avatar}`}
              alt={profile.name}
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
            />
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base tracking-tight text-slate-900 group-hover:text-slate-700 transition">
                {profile.name}
              </span>
              <span className="text-slate-400 text-sm font-normal">/</span>
              <span className="text-xs text-slate-600 font-medium">Developer</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#projects" className="hover:text-slate-900 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">
              Skills & Stack
            </a>
            <a href="#about" className="hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Icons & Email Button */}
          <div className="hidden sm:flex items-center gap-3">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition"
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
                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            )}
            {profile.socials.facebook && (
              <a
                href={profile.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            )}
            {profile.socials.instagram && (
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            )}

            <div className="h-4 w-px bg-slate-200 mx-1" />

            <a
              href={`mailto:${profile.socials.email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Skills & Stack
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {profile.socials.github && (
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-slate-600 p-1">
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {profile.socials.linkedin && (
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 p-1">
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              )}
              {profile.socials.facebook && (
                <a href={profile.socials.facebook} target="_blank" rel="noreferrer" className="text-slate-600 p-1">
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {profile.socials.instagram && (
                <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="text-slate-600 p-1">
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
            </div>
            <a
              href={`mailto:${profile.socials.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white font-medium text-xs"
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
