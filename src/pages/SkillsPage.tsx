import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowRight, 
  Layers, 
  Server, 
  Database, 
  Palette, 
  Wrench
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { NavTabId } from '../components/Navbar';

interface SkillsPageProps {
  onNavigate: (tabId: NavTabId) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryFilters = [
    { key: 'all', label: 'All Technologies' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Databases' },
    { key: 'design', label: 'UI/UX & Design' },
    { key: 'tooling', label: 'Tools & Workflow' },
  ];

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      if (selectedCategory !== 'all' && cat.categoryKey !== selectedCategory) {
        return null;
      }

      const matchingSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.summary.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchingSkills.length === 0 && searchQuery.trim() !== '') {
        return null;
      }

      return {
        ...cat,
        skills: matchingSkills
      };
    }).filter(Boolean) as typeof SKILL_CATEGORIES;
  }, [selectedCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-10 text-left">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 space-y-2">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
          Technical Repertoire
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Skills &amp; Technology Stack
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          A comprehensive breakdown of the frontend frameworks, backend runtimes, databases, UI/UX tools, and development workflows I employ to engineer production software.
        </p>
      </div>

      {/* Modern Stack Architecture Strip (The 5 Core Pillars) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <div className="p-3.5 rounded-xl bg-[#0B111F] border border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-emerald-400">
            <Layers className="w-4 h-4" />
            <span className="text-xs font-semibold text-white">Frontend</span>
          </div>
          <p className="text-[11px] font-mono text-slate-400">React · TypeScript</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#0B111F] border border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-sky-400">
            <Server className="w-4 h-4" />
            <span className="text-xs font-semibold text-white">Backend</span>
          </div>
          <p className="text-[11px] font-mono text-slate-400">Node.js · Express</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#0B111F] border border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-purple-400">
            <Database className="w-4 h-4" />
            <span className="text-xs font-semibold text-white">Databases</span>
          </div>
          <p className="text-[11px] font-mono text-slate-400">PostgreSQL · MongoDB</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#0B111F] border border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-amber-400">
            <Palette className="w-4 h-4" />
            <span className="text-xs font-semibold text-white">UI/UX Design</span>
          </div>
          <p className="text-[11px] font-mono text-slate-400">Figma · Wireframing</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#0B111F] border border-white/10 space-y-1 col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2 text-teal-400">
            <Wrench className="w-4 h-4" />
            <span className="text-xs font-semibold text-white">Workflows</span>
          </div>
          <p className="text-[11px] font-mono text-slate-400">Git · DevTools</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 rounded-xl bg-[#0B111F] border border-white/10">
        <div className="flex flex-wrap items-center gap-1">
          {categoryFilters.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === tab.key
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Filter skills (e.g. React, SQL)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-white/10 focus:border-emerald-500/50 rounded-lg pl-9 pr-6 py-1.5 text-xs text-white placeholder-slate-500 outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Skills Categories & Clean Professional Grid */}
      {filteredCategories.length === 0 ? (
        <div className="p-8 text-center rounded-2xl bg-[#0B111F] border border-white/10 space-y-2">
          <p className="text-sm text-slate-300 font-medium">No technologies matching "{searchQuery}"</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs hover:bg-white/15 cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.categoryKey}
              className="p-5 sm:p-6 rounded-2xl bg-[#0B111F] border border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {cat.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {cat.description}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 shrink-0">
                  {cat.skills.length} Capabilities
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-2"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="font-bold text-white text-sm">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {skill.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed pt-1">
                        {skill.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* End-to-End Production Workflow Showcase */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B111F] to-slate-900 border border-white/10 space-y-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
            End-to-End Delivery
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
            How I Apply These Technologies Together
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-slate-300">
          <div className="p-3 rounded-xl bg-slate-900/70 border border-white/5 space-y-1">
            <span className="font-mono text-emerald-400 font-bold">01. UI/UX in Figma</span>
            <p className="text-slate-400">Wireframes, responsive layouts, and clean visual prototypes.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/70 border border-white/5 space-y-1">
            <span className="font-mono text-emerald-400 font-bold">02. React Frontend</span>
            <p className="text-slate-400">Modular components with Tailwind CSS and cross-device testing.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/70 border border-white/5 space-y-1">
            <span className="font-mono text-emerald-400 font-bold">03. Node.js Backend</span>
            <p className="text-slate-400">RESTful APIs, routing, data validation, and authentication.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/70 border border-white/5 space-y-1">
            <span className="font-mono text-emerald-400 font-bold">04. Relational Data</span>
            <p className="text-slate-400">PostgreSQL schemas, foreign key integrity, and optimization.</p>
          </div>
        </div>
      </div>

      {/* Services link */}
      <div className="p-5 rounded-2xl bg-[#0B111F] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs sm:text-sm text-slate-300">
          Want to see how these skills translate into services for your business?
        </p>
        <button
          onClick={() => onNavigate('services')}
          className="text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer shrink-0"
        >
          <span>Check Services</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
