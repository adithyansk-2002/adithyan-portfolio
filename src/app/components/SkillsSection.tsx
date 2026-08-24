'use client';

import React, { useRef, useEffect, useState } from 'react';

interface SkillItem {
  name: string;
  tag: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  color: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Architecture (AWS)',
    subtitle: 'Production Infrastructure & Cloud Services',
    color: '#FF9900',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </svg>
    ),
    skills: [
      { name: 'AWS EC2', tag: 'Compute & AMI' },
      { name: 'VPC Networks', tag: 'Subnets & NAT' },
      { name: 'Route 53', tag: 'DNS Routing' },
      { name: 'Application Load Balancer', tag: 'ALB Traffic' },
      { name: 'Amazon S3', tag: 'Object Storage' },
      { name: 'IAM Security', tag: 'Roles & Policies' },
      { name: 'Amazon SES & SNS', tag: 'Mail Pipelines' },
      { name: 'AWS CloudWatch', tag: 'Metrics & Alarms' },
    ],
  },
  {
    title: 'DevOps & Infrastructure as Code',
    subtitle: 'Automation, Containers & CI/CD Pipelines',
    color: '#22D3EE',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    skills: [
      { name: 'Ansible Playbooks', tag: 'Multi-Node IaC' },
      { name: 'Docker & GHCR', tag: 'Container Registry' },
      { name: 'Kubernetes (K8s)', tag: 'Pods & Ingress' },
      { name: 'Terraform', tag: 'AWS Provisioning' },
      { name: 'GitHub Actions', tag: 'CI/CD Workflows' },
      { name: 'Jenkins', tag: 'Pipeline Automation' },
      { name: 'Nginx / Apache', tag: 'Reverse Proxy' },
      { name: 'Traefik Ingress', tag: 'SSL Routing' },
    ],
  },
  {
    title: 'Operating Systems & Security',
    subtitle: 'Enterprise Linux Admin & Server Recovery',
    color: '#EE0000',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="m8 21 4-4 4 4M12 17v4" />
      </svg>
    ),
    skills: [
      { name: 'RHEL (Red Hat Linux)', tag: 'RHCSA Certified' },
      { name: 'Amazon Linux 2023', tag: 'Server Admin' },
      { name: 'Linux System Admin', tag: 'GRUB & Boot Recovery' },
      { name: 'SSL / TLS Certs', tag: 'Let\'s Encrypt' },
      { name: 'Firewalld', tag: 'Port Security' },
      { name: 'SELinux', tag: 'Context Hardening' },
    ],
  },
  {
    title: 'Monitoring & Observability',
    subtitle: 'Real-Time Telemetry & Log Aggregation',
    color: '#34D399',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    skills: [
      { name: 'Prometheus', tag: 'Metrics Collection' },
      { name: 'Grafana', tag: 'Visual Dashboards' },
      { name: 'Loki', tag: 'Centralized Logging' },
      { name: 'Promtail', tag: 'Log Agent' },
    ],
  },
  {
    title: 'Programming & Scripting',
    subtitle: 'Automation Scripts, Microservices & Queries',
    color: '#2563EB',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: 'Python', tag: 'Automation & ML' },
      { name: 'Bash Scripting', tag: 'Shell Automation' },
      { name: 'JavaScript & TypeScript', tag: 'Web Logic' },
      { name: 'SQL', tag: 'Database Queries' },
    ],
  },
  {
    title: 'Web Platforms & Databases',
    subtitle: 'Production Web Hosting & Database Tuning',
    color: '#A78BFA',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: [
      { name: 'WordPress Hosting', tag: 'Nginx + PHP 8 + MariaDB' },
      { name: 'React.js & Next.js', tag: 'UI Engineering' },
      { name: 'Flask Framework', tag: 'REST APIs' },
      { name: 'MariaDB & MySQL', tag: 'DB Admin' },
    ],
  },
];

const pillars = [
  { label: 'RHCSA Certified', desc: 'Red Hat Enterprise Linux', icon: '🛡️', color: '#EE0000' },
  { label: 'AWS Cloud Architecture', desc: 'EC2, VPC, ALB & Route 53', icon: '☁️', color: '#FF9900' },
  { label: 'Infrastructure as Code', desc: 'Ansible & Terraform IaC', icon: '⚡', color: '#22D3EE' },
  { label: 'Containers & Observability', desc: 'K8s, Docker & Prometheus', icon: '📦', color: '#34D399' },
];

function HolographicTiltCard({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card rounded-3xl p-6 border border-white/10 relative group flex flex-col justify-between overflow-hidden transition-all duration-200 ease-out"
      style={{
        transform,
        transformStyle: 'preserve-3d',
        boxShadow: `0 15px 35px -15px ${color}35`,
      }}
    >
      {/* Category-Colored Ambient Glare Overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-30"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, ${color}25 0%, ${color}08 45%, transparent 70%)`,
        }}
      />

      {/* Top Edge Accent Line */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 rounded-full z-20"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-reveal relative py-24 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            02 / Technical Stack
          </div>
          <h2 className="section-heading text-foreground mb-4">
            Technical <span className="text-gradient-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Enterprise cloud architecture, RHCSA-certified Linux administration, Infrastructure as Code, and production DevOps automation.
          </p>
        </div>

        {/* 4 Core Pillars Overview Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="glass-card rounded-2xl p-4 border border-white/10 flex items-center gap-3.5 hover:border-white/20 transition-all duration-300 group"
              style={{
                boxShadow: `0 4px 20px -10px ${p.color}30`,
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 border border-white/10"
                style={{ background: `${p.color}15` }}
              >
                {p.icon}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm group-hover:text-cyan-300 transition-colors">
                  {p.label}
                </h4>
                <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Category Cards Grid with 3D Holographic Physics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <HolographicTiltCard key={cat.title} color={cat.color}>
              {/* Category Title & Icon */}
              <div className="flex items-center gap-3.5 mb-2" style={{ transform: 'translateZ(15px)' }}>
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center border border-white/10 shrink-0 shadow-lg"
                  style={{ background: `${cat.color}18`, color: cat.color }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground font-mono leading-tight mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/5 my-4" />

              {/* 2-Line Mini Tech Cards Grid */}
              <div className="grid grid-cols-2 gap-2.5" style={{ transform: 'translateZ(10px)' }}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-2xl border border-white/5 bg-secondary/40 hover:border-white/25 hover:bg-secondary/80 transition-all duration-300 transform hover:translate-z-4"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{
                          background: cat.color,
                          boxShadow: `0 0 6px ${cat.color}`,
                        }}
                      />
                      <span className="font-bold text-xs text-foreground truncate">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-muted-foreground/80 pl-3 truncate">
                      {skill.tag}
                    </p>
                  </div>
                ))}
              </div>
            </HolographicTiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}







