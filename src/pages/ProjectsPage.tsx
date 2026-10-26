import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { NavTabId } from '../components/Navbar';

interface ProjectsPageProps {
  onNavigate: (tabId: NavTabId) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = ['All', 'Full-Stack', 'Frontend', 'Web App'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8 text-left">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 space-y-2">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
          Portfolio
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Selected Projects
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Practical web applications, custom management systems, and e-commerce platforms engineered with modern stacks and responsive architectures.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-xl bg-[#0B111F] border border-white/10">
        <div className="flex flex-wrap items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="text-xs font-mono text-slate-400 px-2">
          {filteredProjects.length} Projects
        </span>
      </div>

      {/* Projects Grid: Clean, professional, developer-focused without external GitHub links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => {
          const isExpanded = expandedProjectId === project.id;
          return (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-[#0B111F] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3.5">
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Production Architecture
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Features List */}
                <div className="pt-2 border-t border-white/5 space-y-1.5">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Key Features:
                  </p>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs text-slate-300 leading-relaxed space-y-2 mt-2">
                    <p className="font-mono text-emerald-400 text-[11px] uppercase tracking-wider">
                      Technical Overview
                    </p>
                    <p>{project.fullDesc}</p>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  {isExpanded ? 'Hide Details' : 'Read Overview'}
                </button>
                <a
                  href={`https://wa.me/923289677360?text=${encodeURIComponent(
                    `Hi Mushtaque, I saw your "${project.title}" project in your portfolio and would like to build something similar.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-slate-300 hover:text-emerald-400 flex items-center gap-1 transition-colors"
                >
                  <span>Inquire Similar Project</span>
                  <ArrowRight className="w-3 h-3 text-emerald-400" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inquiry Strip */}
      <div className="p-6 rounded-2xl bg-[#0B111F] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left space-y-0.5">
          <h3 className="text-base font-bold text-white">Have a specific project requirement?</h3>
          <p className="text-xs sm:text-sm text-slate-400">Let's discuss how we can build or customize a solution for your needs.</p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap cursor-pointer"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};
