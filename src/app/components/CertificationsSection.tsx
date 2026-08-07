'use client';

import React from 'react';

const certifications = [
  {
    title: 'AWS Training Certificate',
    issuer: 'IPSR Solutions Ltd.',
    color: '#FF9900',
    category: 'Cloud & AWS',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </svg>
    ),
  },
  {
    title: 'Cloud Infrastructure Foundations',
    issuer: 'Oracle',
    color: '#F80000',
    category: 'Cloud Infrastructure',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    color: '#4285F4',
    category: 'Cybersecurity',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'SAP Deployment on Google Cloud',
    issuer: 'Google Cloud',
    color: '#34A853',
    category: 'Enterprise Cloud',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
];

const workshops = [
  {
    title: 'LaTeX Typesetting Tool',
    org: 'ACM-AJCE Student Chapter',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Oracle Cloud Infrastructure Foundations',
    org: 'Oracle Academy',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </svg>
    ),
  },
  {
    title: 'NASA International Space Apps Challenge',
    org: 'NASA / ISAC',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-reveal relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">07 / Certifications</p>
          <h2 className="section-heading text-foreground">
            Credentials & <span className="text-gradient-primary">Recognition</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {certifications?.map((cert) => (
            <div
              key={cert?.title}
              className="cert-card rounded-2xl p-5 group cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${cert?.color}20`, color: cert?.color }}
                >
                  {cert?.icon}
                </div>
                <span
                  className="px-2 py-0.5 rounded text-xs font-mono font-semibold"
                  style={{ color: cert?.color, background: `${cert?.color}15`, border: `1px solid ${cert?.color}30` }}
                >
                  {cert?.category}
                </span>
              </div>
              <h3 className="font-semibold text-foreground text-sm leading-snug mb-2 group-hover:text-accent transition-colors">
                {cert?.title}
              </h3>
              <p className="text-xs text-muted-foreground font-medium">{cert?.issuer}</p>
              <div className="mt-3 h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full" style={{ background: cert?.color }} />
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl border border-border/50 p-6">
          <h3 className="font-semibold text-foreground mb-5 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            Workshops & Seminars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {workshops?.map((ws) => (
              <div
                key={ws?.title}
                className="rounded-xl bg-secondary/30 border border-border/30 p-4 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-accent mb-3">
                  {ws?.icon}
                </div>
                <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{ws?.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{ws?.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}