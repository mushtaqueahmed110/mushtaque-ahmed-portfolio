import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare
} from 'lucide-react';
import { SERVICES_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { NavTabId } from '../components/Navbar';

interface ServicesPageProps {
  onNavigate: (tabId: NavTabId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8 text-left">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 space-y-2">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
          Offerings
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Web Development Services
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          I provide dedicated web development assistance for new web applications, landing pages, and frontend fixes with clear timelines and deliverables.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className="p-6 rounded-2xl bg-[#0B111F] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  Turnaround: {service.turnaround}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {service.description}
              </p>

              <div className="pt-2 border-t border-white/5 space-y-1.5">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Deliverables Include:
                </p>
                <ul className="space-y-1 text-xs text-slate-300">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1 text-[11px] font-mono text-slate-400">
                {service.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={`https://wa.me/923289677360?text=${encodeURIComponent(
                  `Hi Mushtaque, I am interested in your "${service.title}" service. Let's discuss details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors ml-auto"
              >
                <span>Discuss on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Inquiry Box */}
      <div className="p-6 rounded-2xl bg-[#0B111F] border border-white/10 space-y-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-white">Have a project with custom requirements?</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Send me a message with your project scope or what you need built, and I will give you a clear assessment and quote.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+92 328 9677360)</span>
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            Go to Contact Form
          </button>
        </div>
      </div>
    </div>
  );
};
