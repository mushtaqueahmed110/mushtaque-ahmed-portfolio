import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  Cpu, 
  Briefcase, 
  FolderGit2, 
  User, 
  Mail, 
  PhoneCall, 
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export type NavTabId = 'home' | 'skills' | 'services' | 'projects' | 'about' | 'contact';

interface NavbarProps {
  activeTab: NavTabId;
  onNavigate: (tabId: NavTabId) => void;
}

export const NAV_ITEMS: { id: NavTabId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleTabClick = (tabId: NavTabId) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-[#070B12]/95 backdrop-blur-md border-white/10 shadow-lg shadow-black/40'
            : 'bg-[#070B12]/80 backdrop-blur-sm border-white/5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Brand Logo & Name */}
            <button
              onClick={() => handleTabClick('home')}
              className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
              aria-label="Mushtaque Ahmed Home"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-sm shadow-[0_0_12px_rgba(34,197,94,0.15)] group-hover:border-emerald-400 transition-colors">
                MA
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-100 text-base sm:text-lg tracking-tight group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                  Mushtaque Ahmed
                </span>
                <span className="text-[11px] text-slate-400 font-mono hidden sm:inline-block">
                  Full-Stack Developer
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links in Requested Order: Home -> Skills -> Services -> Projects -> About Me -> Contact */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer relative ${
                      isActive
                        ? 'text-emerald-400 font-semibold bg-emerald-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Contact CTA & Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => handleTabClick('contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs md:text-sm font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all cursor-pointer shadow-sm"
              >
                <span>Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-white/10 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors focus:outline-none cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/75 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-72 max-w-[80vw] bg-[#070B12] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-950/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold text-xs">
              MA
            </div>
            <div>
              <p className="font-bold text-slate-100 text-sm leading-tight">Mushtaque Ahmed</p>
              <p className="text-[10px] text-slate-400 font-mono">Web Developer</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Links in Required Order */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5">
          <p className="px-3 text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
            Menu
          </p>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold'
                    : 'text-slate-200 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-4 border-t border-white/10 bg-slate-950/80 space-y-2.5">
          <button
            onClick={() => handleTabClick('contact')}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </button>
          <div className="flex items-center justify-center gap-4 pt-1 text-xs text-slate-400">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white">
              Email
            </a>
            <span>·</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <span>·</span>
            <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
