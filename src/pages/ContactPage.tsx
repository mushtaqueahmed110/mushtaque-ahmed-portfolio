import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, FAQS } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const mailSubject = encodeURIComponent(subject ? `[Inquiry] ${subject} - From ${name}` : `Web Development Inquiry from ${name}`);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n--\nSent from Portfolio Contact Page`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-10 text-left">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 space-y-2">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
          Get in Touch
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Contact Me
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Have a question, need a quote for a website, or want to discuss a project? Reach out directly via WhatsApp, phone, or email.
        </p>
      </div>

      {/* Grid: Direct Contact Channels + Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Channels */}
        <div className="md:col-span-5 space-y-3.5">
          {/* WhatsApp Card */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#0B111F] border border-emerald-500/30 hover:border-emerald-500 transition-all block group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                    Fastest Response
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">WhatsApp Chat</h3>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs font-mono text-slate-300 mt-2.5">
              {PERSONAL_INFO.phone}
            </p>
          </a>

          {/* Direct Email Card */}
          <div className="p-5 rounded-2xl bg-[#0B111F] border border-white/10 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Email
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">Direct Email</h3>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2 py-1 rounded bg-slate-900 border border-white/10 text-xs text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                {copiedEmail ? (
                  <span className="text-emerald-400 font-medium">Copied!</span>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs sm:text-sm text-slate-200 hover:text-emerald-400 font-mono block truncate transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          {/* Direct Phone */}
          <div className="p-5 rounded-2xl bg-[#0B111F] border border-white/10 space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-emerald-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Phone Call
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 font-mono block transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-1 text-xs text-slate-400">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:col-span-7 p-6 sm:p-7 rounded-2xl bg-[#0B111F] border border-white/10 space-y-5">
          <div className="border-b border-white/5 pb-3">
            <h2 className="text-lg font-bold text-white">
              Send a Message
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Fill in your message and it will open directly in your email client addressed to {PERSONAL_INFO.email}.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Email Client Opened</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your message has been pre-filled. You can also message me directly on WhatsApp at <strong>{PERSONAL_INFO.phone}</strong> for faster response.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john@example.com"
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Website Project, Bug Fix, or Consultation"
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Explain what you need built, your timeframe, or questions you have..."
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message via Email</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQs */}
      <div className="pt-6 border-t border-white/10 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-white">
            Common Questions
          </h2>
        </div>

        <div className="space-y-2.5">
          {FAQS.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0B111F] border border-white/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
