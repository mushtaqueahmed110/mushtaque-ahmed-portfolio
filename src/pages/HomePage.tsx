import { 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  PhoneCall
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, SERVICES_DATA } from '../data/portfolioData';
import { NavTabId } from '../components/Navbar';

interface HomePageProps {
  onNavigate: (tabId: NavTabId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16 text-left">
      {/* Hero Section */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Web Projects &amp; Freelance Work</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Mushtaque Ahmed
              </h1>
              <p className="text-lg sm:text-xl text-emerald-400 font-medium">
                Full-Stack Web Developer &amp; Software Engineer
              </p>
            </div>

            {/* Summary Text */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              I develop responsive, user-friendly websites and web applications using modern web technologies including <strong className="text-white font-semibold">React, TypeScript, Tailwind CSS, Node.js, Express, and PostgreSQL</strong>. I focus on clean code, proper mobile responsiveness, and dependable communication.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white border border-white/10 hover:border-emerald-500/40 text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-white/5 text-sm flex items-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Key Stack Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900/40 border border-white/5">
                <span className="text-slate-400 block text-[11px]">Frontend</span>
                <span className="font-semibold text-white">React &amp; Tailwind</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-white/5">
                <span className="text-slate-400 block text-[11px]">Backend</span>
                <span className="font-semibold text-white">Node.js &amp; Express</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-white/5">
                <span className="text-slate-400 block text-[11px]">Databases</span>
                <span className="font-semibold text-white">PostgreSQL &amp; MongoDB</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-white/5">
                <span className="text-slate-400 block text-[11px]">Core Strength</span>
                <span className="font-semibold text-emerald-400">Mobile Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-white/10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Practical web applications and codebases built with modern stacks.
            </p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS_DATA.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#0B111F] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Web Project
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5">
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read full project breakdown</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0B111F] border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                What I Can Do For You
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Straightforward web development services for individuals and businesses.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {service.title}
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-400">
                    {service.turnaround}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-[#0B111F] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Need a website or have a frontend issue to fix?</h3>
            <p className="text-xs sm:text-sm text-slate-400">Feel free to message me on WhatsApp or send an email.</p>
          </div>
          <div className="flex gap-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-colors"
            >
              Chat on WhatsApp
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Contact Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
