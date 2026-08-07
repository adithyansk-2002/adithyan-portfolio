'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  color: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demo?: string;
  period: string;
  challenges: string[];
  lessons: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'skylearn',
    title: 'SkyLearn DevOps Platform',
    subtitle: 'Cloud-Native Kubernetes Learning Platform',
    type: 'Cloud & DevOps · K8s + IaC + CI/CD + Observability',
    color: '#22D3EE',
    period: '07/2026 – 08/2026',
    description: 'Designed and deployed a production-grade cloud-native learning platform on AWS using Docker, Kubernetes, Traefik, Terraform, Ansible, and GitHub Actions.',
    longDescription: 'SkyLearn is a cloud-native platform deployed on AWS. Automated infrastructure provisioning, application deployment, and rolling updates through Terraform, Ansible, and GitHub Actions CI/CD integrated with GHCR. Includes a full observability stack with Prometheus, Grafana, Loki, and Promtail for metrics collection, centralized logging, and Kubernetes workload monitoring.',
    tech: ['AWS', 'Kubernetes', 'Docker', 'Traefik', 'Terraform', 'Ansible', 'GitHub Actions', 'GHCR', 'Prometheus', 'Grafana', 'Loki', 'Promtail'],
    github: 'https://github.com/adithyansk-2002',
    challenges: [
      'Configuring Traefik ingress controller and SSL routing in Kubernetes',
      'Integrating Loki and Promtail for centralized log aggregation across nodes',
      'Automating container image pushes to GHCR via GitHub Actions pipelines',
    ],
    lessons: [
      'Observability (metrics + logs) is critical for diagnosing distributed K8s workloads',
      'Infrastructure as Code (Terraform) ensures rapid, repeatable cluster provisioning',
      'Rolling updates via CI/CD eliminate downtime during application deployments',
    ],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1684f325c-1772376035798.png",
    imageAlt: 'Dark server room with glowing blue rack lights, cloud infrastructure, deep shadows, dramatic IT environment',
    featured: true
  },
  {
    id: 'aws-automation',
    title: 'AWS Infrastructure Automation',
    subtitle: 'Multi-Node AWS Infrastructure & Disaster Recovery',
    type: 'Infrastructure as Code · Ansible + AWS',
    color: '#FF9900',
    period: '06/2026 – 06/2026',
    description: 'Designed and provisioned a multi-node AWS infrastructure using Ansible on Amazon Linux 2023, cutting deployment duration by over 90%.',
    longDescription: 'Engineered reusable Ansible playbooks to provision multi-node AWS infrastructure on Amazon Linux 2023, streamlining webpage deployment and increasing deployment frequency. Spearheaded full regional disaster recovery replication in a separate AWS region, achieving 100% environment parity.',
    tech: ['AWS', 'Ansible', 'Amazon Linux 2023', 'EC2', 'IaC', 'Disaster Recovery', 'Linux Admin', 'Bash'],
    github: 'https://github.com/adithyansk-2002',
    challenges: [
      'Ensuring 100% playbook idempotency across regional deployments',
      'Replicating multi-node network configurations in a separate AWS region',
      'Cutting manual deployment times down from hours to minutes',
    ],
    lessons: [
      'Ansible playbooks serve as living documentation for disaster recovery',
      'Automated regional parity drastically reduces recovery point/time objectives (RPO/RTO)',
      'Idempotent playbooks guarantee clean, predictable environment states',
    ],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd1d5a94-1772226968376.png",
    imageAlt: 'Abstract server network visualization with dark background, glowing purple and blue connection nodes',
    featured: true
  },
  {
    id: 'wordpress-prod',
    title: 'Production WordPress Deployment',
    subtitle: 'Automated & Secure Web Hosting Environment',
    type: 'Server Administration · Web Hosting + Security',
    color: '#7C3AED',
    period: '06/2026 – 06/2026',
    description: 'Engineered and automated a production-ready WordPress environment on Amazon Linux 2023 using Ansible, decreasing response time by 30%.',
    longDescription: 'Automated full server provisioning and web hosting configurations including Nginx, PHP 8, MariaDB, phpMyAdmin, SFTP, Let\'s Encrypt SSL, and custom DuckDNS domain integration. Implemented secure hosting practices and server optimization to decrease average response time by 30%.',
    tech: ['WordPress', 'Ansible', 'Nginx', 'PHP 8', 'MariaDB', 'phpMyAdmin', 'SFTP', 'Let\'s Encrypt SSL', 'DuckDNS', 'Amazon Linux 2023'],
    github: 'https://github.com/adithyansk-2002',
    challenges: [
      'Automating SSL certificate issue and renewal via Let\'s Encrypt in Ansible',
      'Optimizing Nginx fastcgi cache and MariaDB buffer pools for speed',
      'Securing SFTP and phpMyAdmin endpoints against unauthorized access',
    ],
    lessons: [
      'Proper Nginx caching and PHP-FPM tuning yields up to 30% speed improvement',
      'Centralized server configuration prevents configuration drift across deployments',
      'Automated Let\'s Encrypt SSL ensures zero security oversight',
    ],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b1ba3ed-1767879310858.png",
    imageAlt: 'Server security network visualization with dark background and glowing purple nodes',
    featured: false
  },
  {
    id: 'harvesthub',
    title: 'HarvestHub',
    subtitle: 'Full-Stack Crop Trading Platform',
    type: 'Major Project · Full-Stack + LSTM ML + Blockchain',
    color: '#2563EB',
    period: '08/2024 – 04/2025',
    description: 'Full-stack crop trading platform enabling direct farmer-to-retailer bidding with 98.6% LSTM price prediction accuracy and Ethereum smart contracts.',
    longDescription: 'HarvestHub connects farmers directly with retailers through a transparent bidding system built with React.js and Flask. Trained an LSTM neural network on 28 years (1994–2022) of crop price data to provide data-driven bidding recommendations with 98.6% accuracy, while using Ethereum smart contracts for tamper-resistant transaction logs.',
    tech: ['React.js', 'Flask', 'Python', 'LSTM', 'Scikit-learn', 'TensorFlow', 'Ethereum', 'Solidity', 'Smart Contracts'],
    github: 'https://github.com/adithyansk-2002',
    challenges: [
      'Preprocessing 28 years of agricultural time-series data for LSTM training',
      'Integrating Ethereum smart contracts with Flask backend services',
      'Building a clean user interface tailored for both farmers and retailers',
    ],
    lessons: [
      'LSTM models excel at non-linear agricultural price forecasting when tuned properly',
      'Smart contracts add verifiable trust to supply chain transactions',
      'Decoupled REST architecture makes integrating ML and Web3 seamless',
    ],
    image: "/images/projects/harvesthub.jpg",
    imageAlt: 'HarvestHub - Full-Stack Crop Trading Platform',
    featured: false
  }];


export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpanded(prev => prev === id ? null : id);
  };

  return (
    <section id="projects" className="section-reveal relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">04 / Projects</p>
          <h2 className="section-heading text-foreground">
            What I&apos;ve <span className="text-gradient-primary">Built</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Click any project to expand the full case study with architecture, challenges, and lessons learned.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`glass-card rounded-2xl border overflow-hidden cursor-pointer project-card-expand group ${project.featured ? 'md:col-span-1' : ''
                }`}
              style={{ borderColor: expanded === project.id ? `${project.color}50` : 'rgba(255,255,255,0.06)' }}
              onClick={() => handleToggle(project.id)}
              role="button"
              aria-expanded={expanded === project.id}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleToggle(project.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-2 py-1 rounded text-xs font-mono font-semibold"
                    style={{ color: project.color, background: `${project.color}20`, border: `1px solid ${project.color}40` }}
                  >
                    {project.type.split(' · ')[0]}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-8 h-8 rounded-lg bg-background/60 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-foreground text-xl">{project.title}</h3>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`text-muted-foreground transition-transform duration-300 shrink-0 ${expanded === project.id ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <p className="text-sm font-medium mb-3" style={{ color: project.color }}>{project.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-secondary/50 text-muted-foreground border border-border/30">{t}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-xs font-mono text-muted-foreground border border-border/30">+{project.tech.length - 4}</span>
                  )}
                </div>

                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: expanded === project.id ? '1200px' : '0px',
                    opacity: expanded === project.id ? 1 : 0,
                  }}
                >
                  <div className="mt-6 pt-6 border-t border-border/30 space-y-5">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-4 h-4 rounded flex items-center justify-center" style={{ background: `${project.color}20` }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                        </span>
                        Full Case Study
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-4 h-4 rounded flex items-center justify-center" style={{ background: `${project.color}20` }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
                        </span>
                        Full Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-xs font-mono border"
                            style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-4 h-4 rounded flex items-center justify-center" style={{ background: `${project.color}20` }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </span>
                        Challenges
                      </h4>
                      <ul className="space-y-1">
                        {project.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="mt-1 shrink-0" style={{ color: project.color }}>→</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-4 h-4 rounded flex items-center justify-center" style={{ background: `${project.color}20` }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                        </span>
                        Lessons Learned
                      </h4>
                      <ul className="space-y-1">
                        {project.lessons.map((l) => (
                          <li key={l} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="mt-1 shrink-0" style={{ color: project.color }}>+</span> {l}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold btn-outline"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
