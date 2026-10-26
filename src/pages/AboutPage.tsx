import React from 'react';
import { 
  CheckCircle2, 
  Mail, 
  Phone, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NavTabId } from '../components/Navbar';

interface AboutPageProps {
  onNavigate: (tabId: NavTabId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-10 text-left">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 space-y-2">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
          Profile
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          About Me
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Get to know my software development background, engineering values, and practical approach to web projects.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio & Values */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I am <strong className="text-white">{PERSONAL_INFO.name}</strong>, a Full-Stack Web Developer and Software Engineer.
            </p>
            <p>
              I build web interfaces, full-stack applications, and management systems that are functional, fast, and easy to use. In web development, I believe user experience is paramount—especially on mobile devices where many websites suffer from broken menus, awkward spacing, or sluggish performance.
            </p>
            <p>
              My standard development workflow involves creating modular components with React and Tailwind CSS, designing structured RESTful APIs with Node.js and Express, modeling clean databases with PostgreSQL or MongoDB, and crafting intuitive UI/UX prototypes in Figma.
            </p>
          </div>

          {/* Working Principles */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0B111F] border border-white/10 space-y-3.5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>How I Approach Every Project</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Mobile-First Testing:</strong> Every view is checked on real mobile screens so buttons, navigation drawers, and fonts work smoothly.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Clean &amp; Readable Code:</strong> I avoid unnecessary complexity and write clean, modular code that is easy to maintain.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Consistent Communication:</strong> You receive regular progress updates, test links, and clear milestone tracking.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Card & Quick Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-[#0B111F] border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-lg">
                MA
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-xs font-mono text-emerald-400">Full-Stack Web Developer</p>
              </div>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-white/5 text-xs sm:text-sm">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Phone / WA</span>
                </span>
                <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-mono hover:underline">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </span>
                <span className="font-mono text-xs truncate max-w-[170px]">{PERSONAL_INFO.email}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors text-center cursor-pointer"
              >
                Send Message / Hire Me
              </button>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/5 text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 text-xs text-slate-400 leading-relaxed">
            <p><strong className="text-slate-300">Current Status:</strong> {PERSONAL_INFO.availability}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
