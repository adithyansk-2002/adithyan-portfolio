'use client';

import React, { useState } from 'react';

const experiences = [
  {
    id: 'ipsr-admin',
    role: 'Server Administrator Trainee',
    company: 'IPSR Solutions Limited',
    location: 'Kottayam, Kerala',
    period: '06/2026 – Present',
    status: 'current',
    color: '#22D3EE',
    description: 'Designing, automating, and managing cloud infrastructure using AWS, Linux, Ansible, Nginx, PHP 8, MariaDB, and Let\'s Encrypt SSL across production environments.',
    highlights: [
      'Deployed, configured, and maintained production-ready web applications on AWS using EC2, Application Load Balancer, Route 53, and Amazon SES.',
      'Provisioned and configured Nginx, PHP 8, MariaDB, WordPress, phpMyAdmin, SSL, and SFTP on Amazon Linux 2023 using Ansible.',
      'Administered Linux servers by managing users, permissions, storage, and network performance, improving system efficiency by 20%, while performing GRUB recovery and troubleshooting boot, filesystem, and server issues.',
      'Secured web hosting environments by implementing Let\'s Encrypt SSL, custom domains, firewall rules, and PHPMailer with Amazon SES, reducing vulnerabilities by 15%.',
    ],
    tech: ['AWS', 'EC2', 'ALB', 'Route 53', 'SES', 'Nginx', 'PHP 8', 'MariaDB', 'WordPress', 'Ansible', 'Linux', 'Let\'s Encrypt', 'Firewalld', 'SELinux'],
  },
  {
    id: 'ipsr-intern',
    role: 'Cloud and DevOps Intern',
    company: 'IPSR Solutions Limited',
    location: 'Kottayam, Kerala',
    period: '02/2026 – 06/2026',
    status: 'completed',
    color: '#2563EB',
    description: 'Managed AWS services, performed Linux (RHEL) system administration, and automated CI/CD deployment pipelines.',
    highlights: [
      'Managed AWS services including EC2, IAM, VPC, S3, and Route 53 for cloud deployments.',
      'Performed Linux (RHEL) administration, including package management, service configuration, user administration, networking, and storage management.',
      'Developed CI/CD pipelines using Jenkins and Ansible, reducing release cycles by 70% and enabling faster feature delivery to customers.',
    ],
    tech: ['AWS', 'EC2', 'IAM', 'VPC', 'S3', 'Route 53', 'RHEL', 'Jenkins', 'Ansible', 'CI/CD'],
  },
  {
    id: 'verzeo',
    role: 'Python Intern',
    company: 'Verzeo',
    location: 'Kottayam, Kerala',
    period: '01/2022 – 02/2022',
    status: 'completed',
    color: '#7C3AED',
    description: 'Engineered and evaluated machine learning models using Python, Scikit-learn, and Pandas.',
    highlights: [
      'Engineered and evaluated 3+ machine learning models using Python, Scikit-learn, and Pandas.',
      'Implemented and compared 3 machine learning algorithms including Linear Regression, Decision Trees, and K-Means Clustering.',
      'Gained practical exposure to real-world data preprocessing and model tuning.',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning', 'Linear Regression', 'K-Means'],
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Amal Jyothi College of Engineering',
    location: 'Kottayam, Kerala',
    period: '2021 – 2025',
    color: '#22D3EE',
  },
  {
    degree: 'Higher Secondary (High School Diploma)',
    institution: "St. Antony\'s Public School",
    location: 'Kottayam, Kerala',
    period: '2020 – 2021',
    color: '#2563EB',
  },
  {
    degree: 'Secondary (High School Diploma)',
    institution: "St. Paul\'s School",
    location: 'New Delhi, India',
    period: '2007 – 2019',
    color: '#7C3AED',
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<string | null>('ipsr-admin');

  return (
    <section id="experience" className="section-reveal relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">03 / Experience</p>
          <h2 className="section-heading text-foreground">
            Work <span className="text-gradient-cyan">Timeline</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px timeline-line" aria-hidden="true" />

            <div className="space-y-8">
              {experiences?.map((exp) => (
                <div key={exp?.id} className="relative pl-16">
                  <div
                    className="absolute left-0 w-12 h-12 rounded-xl glass-card border flex items-center justify-center cursor-pointer transition-all duration-300"
                    style={{
                      borderColor: expanded === exp?.id ? exp?.color : 'rgba(255,255,255,0.08)',
                      boxShadow: expanded === exp?.id ? `0 0 20px ${exp?.color}40` : 'none',
                    }}
                    onClick={() => setExpanded(expanded === exp?.id ? null : exp?.id)}
                    role="button"
                    aria-expanded={expanded === exp?.id}
                    tabIndex={0}
                    onKeyDown={(e) => e?.key === 'Enter' && setExpanded(expanded === exp?.id ? null : exp?.id)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={exp?.color} strokeWidth="1.5">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  </div>

                  <div
                    className="glass-card rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer"
                    style={{ borderColor: expanded === exp?.id ? `${exp?.color}40` : 'rgba(255,255,255,0.06)' }}
                    onClick={() => setExpanded(expanded === exp?.id ? null : exp?.id)}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-foreground text-lg">{exp?.role}</h3>
                            {exp?.status === 'current' && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold border"
                                style={{ color: exp?.color, borderColor: `${exp?.color}50`, background: `${exp?.color}15` }}>
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-semibold" style={{ color: exp?.color }}>{exp?.company}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{exp?.location} · {exp?.period}</p>
                        </div>
                        <svg
                          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                          className={`text-muted-foreground transition-transform duration-300 shrink-0 ${expanded === exp?.id ? 'rotate-180' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>

                      <div
                        className="overflow-hidden transition-all duration-500 ease-in-out"
                        style={{
                          maxHeight: expanded === exp?.id ? '1000px' : '0px',
                          opacity: expanded === exp?.id ? 1 : 0,
                        }}
                      >
                        <div className="mt-6 space-y-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">{exp?.description}</p>
                          <ul className="space-y-2">
                            {exp?.highlights?.map((h, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp?.color }} />
                                {h}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {exp?.tech?.map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded text-xs font-mono border border-border/40 text-muted-foreground bg-secondary/40">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-2xl border border-border/50 p-6">
              <h3 className="font-bold text-foreground mb-6 flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                Education
              </h3>
              <div className="space-y-5">
                {education?.map((edu) => (
                  <div key={edu?.degree} className="relative pl-4 border-l-2" style={{ borderColor: edu?.color }}>
                    <p className="text-sm font-semibold text-foreground">{edu?.degree}</p>
                    <p className="text-xs font-medium mt-0.5" style={{ color: edu?.color }}>{edu?.institution}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{edu?.location} · {edu?.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl border border-border/50 p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {[
                  'Published 3 open-source Cloud & DevOps projects demonstrating IaC & automation.',
                  'Led 5-member team as Team Leader in MakerHub IEDC 24-Hour Hackathon.',
                  'Reduced release cycles using Jenkins & Ansible CI/CD pipelines.',
                  'Improved server system efficiency and  decreased response time.',
                  'Reduced vulnerabilities using Let\'s Encrypt SSL, firewalls & SES integration.',
                ]?.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                    <span className="mt-0.5 text-accent font-bold">+</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}