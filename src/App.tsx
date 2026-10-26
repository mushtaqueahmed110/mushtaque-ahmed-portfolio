/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, NavTabId } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SkillsPage } from './pages/SkillsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getTabFromHash = (): NavTabId => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    const validTabs: NavTabId[] = ['home', 'skills', 'services', 'projects', 'about', 'contact'];
    if (validTabs.includes(hash as NavTabId)) {
      return hash as NavTabId;
    }
    return 'home';
  };

  const [activeTab, setActiveTab] = useState<NavTabId>(getTabFromHash);

  // Sync state with URL hash
  const handleNavigate = useCallback((tabId: NavTabId) => {
    setActiveTab(tabId);
    window.location.hash = `#/${tabId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sync when user clicks browser Back / Forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const newTab = getTabFromHash();
      setActiveTab(newTab);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamic document title based on active tab
  useEffect(() => {
    const pageTitles: Record<NavTabId, string> = {
      home: 'Home | Mushtaque Ahmed - Full-Stack Web Developer',
      skills: 'Skills | Mushtaque Ahmed - Full-Stack Web Developer',
      services: 'Services | Mushtaque Ahmed - Full-Stack Web Developer',
      projects: 'Projects | Mushtaque Ahmed - Full-Stack Web Developer',
      about: 'About Me | Mushtaque Ahmed - Full-Stack Web Developer',
      contact: 'Contact | Mushtaque Ahmed - Full-Stack Web Developer'
    };
    document.title = pageTitles[activeTab] || 'Mushtaque Ahmed | Full-Stack Web Developer';
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Top Navbar with Responsive Mobile Slide-out Drawer */}
      <Navbar activeTab={activeTab} onNavigate={handleNavigate} />

      {/* Dedicated Page View based on Active Tab */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {activeTab === 'skills' && (
          <SkillsPage onNavigate={handleNavigate} />
        )}
        {activeTab === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
        {activeTab === 'projects' && (
          <ProjectsPage onNavigate={handleNavigate} />
        )}
        {activeTab === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick Mobile Bottom Navigation */}
      <MobileBottomNav activeTab={activeTab} onNavigate={handleNavigate} />
    </div>
  );
}
