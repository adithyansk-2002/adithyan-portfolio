'use client';

import React, { useRef, useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  title: string;
  color: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud (AWS)',
    color: '#FF9900',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </svg>
    ),
    skills: [
      { name: 'EC2', level: 90 }, { name: 'IAM', level: 85 }, { name: 'VPC', level: 85 },
      { name: 'Route 53', level: 82 }, { name: 'ALB', level: 85 }, { name: 'S3', level: 88 },
      { name: 'SES', level: 80 }, { name: 'SNS', level: 75 }, { name: 'CloudWatch', level: 80 },
    ],
  },
  {
    title: 'DevOps & Containers',
    color: '#22D3EE',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    skills: [
      { name: 'Docker', level: 88 }, { name: 'Kubernetes', level: 82 }, { name: 'Ansible', level: 90 },
      { name: 'Terraform', level: 85 }, { name: 'Jenkins', level: 80 }, { name: 'GitHub Actions', level: 85 },
      { name: 'GHCR', level: 80 }, { name: 'Traefik', level: 78 }, { name: 'Nginx / Apache', level: 88 },
    ],
  },
  {
    title: 'Operating Systems & Security',
    color: '#7C3AED',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="m8 21 4-4 4 4M12 17v4" />
      </svg>
    ),
    skills: [
      { name: 'RHEL', level: 88 }, { name: 'Amazon Linux 2023', level: 92 }, { name: 'Linux System Admin', level: 90 },
      { name: 'SSL / TLS & Let\'s Encrypt', level: 88 }, { name: 'Firewalld', level: 85 }, { name: 'SELinux', level: 80 },
    ],
  },
  {
    title: 'Monitoring & Observability',
    color: '#34D399',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    skills: [
      { name: 'Prometheus', level: 82 }, { name: 'Grafana', level: 85 }, { name: 'Loki', level: 80 },
      { name: 'Promtail', level: 78 },
    ],
  },
  {
    title: 'Programming & Scripting',
    color: '#2563EB',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: 'Python', level: 88 }, { name: 'Bash', level: 85 }, { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 78 }, { name: 'SQL', level: 82 },
    ],
  },
  {
    title: 'Web & Databases',
    color: '#A78BFA',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: [
      { name: 'React.js', level: 80 }, { name: 'Flask', level: 78 }, { name: 'HTML & CSS', level: 85 },
      { name: 'MariaDB', level: 85 }, { name: 'MySQL', level: 82 },
    ],
  },
];

function SkillBar({ skill, color, animate }: { skill: Skill; color: string; animate: boolean }) {
  return (
    <div className="group/skill">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-mono text-muted-foreground">{skill.name}</span>
        <span className="text-xs font-mono transition-opacity duration-300" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-secondary/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: animate ? `0 0 6px ${color}60` : 'none',
          }}
        />
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-reveal relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">02 / Skills</p>
          <h2 className="section-heading text-foreground">
            Technical <span className="text-gradient-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Proficiency levels across cloud, DevOps, and engineering disciplines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className="glass-card rounded-2xl p-6 border border-border/50 skill-card-hover group"
              style={{ '--cat-color': cat.color } as React.CSSProperties}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${cat.color}20`, color: cat.color }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
                <span className="ml-auto text-xs font-mono text-muted-foreground">{cat.skills.length} skills</span>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill, skillIdx) => (
                  <div
                    key={skill.name}
                    style={{ transitionDelay: animate ? `${catIdx * 80 + skillIdx * 60}ms` : '0ms' }}
                  >
                    <SkillBar skill={skill} color={cat.color} animate={animate} />
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border/30">
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.slice(0, 4).map((s) => (
                    <span
                      key={s.name}
                      className="px-2 py-0.5 rounded text-xs font-mono border transition-colors duration-300"
                      style={{
                        borderColor: `${cat.color}30`,
                        color: cat.color,
                        background: `${cat.color}10`,
                      }}
                    >
                      {s.name}
                    </span>
                  ))}
                  {cat.skills.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-xs font-mono text-muted-foreground border border-border/30">
                      +{cat.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}