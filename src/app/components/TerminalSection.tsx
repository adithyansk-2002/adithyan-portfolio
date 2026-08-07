'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success' | 'system';
  content: string;
}

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    '╔══════════════════════════════════════════════════╗',
    '║         AdithyanDev Terminal v1.1.0              ║',
    '╠══════════════════════════════════════════════════╣',
    '  help         Show available commands',
    '  about        About Adithyan',
    '  skills       List technical skills',
    '  projects     View featured projects',
    '  resume       Resume summary',
    '  contact      Contact details',
    '  education    Education history',
    '  experience   Work experience timeline',
    '  cert         Certifications & credentials',
    '  linkedin     LinkedIn profile',
    '  github       GitHub profile',
    '  aws          AWS skills & services',
    '  devops       DevOps & K8s tools',
    '  ansible      Ansible automation details',
    '  whoami       Current user info',
    '  sudo hire-me Special recruiter command',
    '  clear        Clear terminal',
    '  history      Command history',
    '╚══════════════════════════════════════════════════╝',
  ],
  about: () => [
    '┌─────────────────────────────────────────────────┐',
    '│  Adithyan Suresh Kumar                          │',
    '│  Server Administrator Trainee                   │',
    '├─────────────────────────────────────────────────┤',
    '│  B.Tech CSE · Amal Jyothi College (2021–2025)   │',
    '│  Server Admin Trainee @ IPSR Solutions Limited  │',
    '│  Location: Kottayam, Kerala, India              │',
    '│                                                 │',
    '│  Core Stack: AWS · Linux · Ansible · Docker     │',
    '│  Kubernetes · Terraform · Jenkins · Prometheus  │',
    '└─────────────────────────────────────────────────┘',
  ],
  whoami: () => [
    'adithyan@server-admin',
    'uid=1000(adithyan) gid=1000(sysadmin)',
    'groups=aws,linux,docker,k8s,ansible,terraform,git',
    'shell=/bin/bash  home=/home/adithyan',
  ],
  skills: () => [
    'Cloud (AWS): EC2, IAM, VPC, Route 53, ALB, S3, SES, SNS, CloudWatch',
    'DevOps:      Docker, Kubernetes, Jenkins, Terraform, Ansible, GHCR, Traefik',
    'Linux / OS:  RHEL, Amazon Linux 2023, Admin, GRUB Recovery, Networking',
    'Monitoring:  Prometheus, Grafana, Loki, Promtail',
    'Programming: Python, Bash, JavaScript, TypeScript, SQL',
    'Web & DB:    React.js, Flask, HTML, CSS, MariaDB, MySQL',
    'Security:    SSL/TLS, Let\'s Encrypt, Firewalld, SELinux',
  ],
  projects: () => [
    '1. SkyLearn DevOps Platform -> AWS + K8s + Traefik + Terraform + Prometheus/Loki',
    '2. AWS Infra Automation     -> Multi-Node Ansible + Regional DR Parity',
    '3. WordPress Deployment     -> Ansible + Nginx + PHP 8 + MariaDB + Let\'s Encrypt',
    '4. HarvestHub               -> React.js + Flask + LSTM ML (98.6%) + Ethereum',
  ],
  resume: () => [
    'Adithyan Suresh Kumar -- Server Administrator Trainee',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    'EXPERIENCE:',
    '  Server Admin Trainee  -- IPSR Solutions Limited (06/2026–Present)',
    '  Cloud & DevOps Intern -- IPSR Solutions Limited (02/2026–06/2026)',
    '  Python Intern         -- Verzeo (01/2022–02/2022)',
    '',
    'EDUCATION:',
    '  B.Tech Computer Science -- Amal Jyothi College of Engineering (2021–2025)',
    '',
    'CERTIFICATIONS:',
    '  • AWS Training Certificate (IPSR)',
    '  • Cloud Infrastructure Foundations (Oracle)',
    '  • Google Cybersecurity Professional Certificate',
    '  • SAP Deployment on Google Cloud',
  ],
  contact: () => [
    'Email:    adithyansk2002@gmail.com',
    'Phone:    +91 88911 95211',
    'LinkedIn: linkedin.com/in/adithyansk2002',
    'GitHub:   github.com/adithyansk-2002',
    'Location: Kottayam, Kerala, India',
  ],
  education: () => [
    'B.Tech in Computer Science -- Amal Jyothi College of Engineering (2021–2025)',
    'Location: Kottayam, Kerala',
  ],
  experience: () => [
    '1. Server Administrator Trainee -- IPSR Solutions Limited (06/2026–Present)',
    '   -> AWS web apps (EC2, ALB, Route 53, SES), Ansible hosting, Linux admin & GRUB recovery',
    '',
    '2. Cloud and DevOps Intern -- IPSR Solutions Limited (02/2026–06/2026)',
    '   -> AWS service management, RHEL admin, Jenkins & Ansible CI/CD automation',
    '',
    '3. Python Intern -- Verzeo (01/2022–02/2022)',
    '   -> 3+ ML models with Scikit-learn, Pandas, Linear Regression, Decision Trees, K-Means',
  ],
  cert: () => [
    '1. AWS Training Certificate -- IPSR Solutions Ltd.',
    '2. Cloud Infrastructure Foundations -- Oracle',
    '3. Google Cybersecurity Professional Certificate -- Google',
    '4. SAP Deployment on Google Cloud -- Google Cloud',
  ],
  linkedin: () => [
    'Opening LinkedIn profile...',
    '-> https://linkedin.com/in/adithyansk2002',
  ],
  github: () => [
    'Opening GitHub profile...',
    '-> https://github.com/adithyansk-2002',
  ],
  aws: () => [
    'AWS Expertise:',
    '  EC2, IAM, VPC, Route 53, ALB, S3, SES, SNS, CloudWatch',
    '  Experience: Multi-node web deployment, load balancing, DNS routing, SES mailers',
  ],
  devops: () => [
    'DevOps Stack:',
    '  Docker, Kubernetes, Jenkins, Terraform, Ansible, Git, GitHub Actions, GHCR, Traefik',
    '  Observability: Prometheus, Grafana, Loki, Promtail',
  ],
  ansible: () => [
    'Ansible Automation:',
    '  [+] Provisioned Nginx, PHP 8, MariaDB, WordPress, phpMyAdmin, SSL on AL2023',
    '  [+] Multi-node regional infrastructure automation with 100% DR parity',
    '  [+] Cut manual deployment duration by over 90%',
  ],
};

const EASTER_EGG = [
  '',
  '╔══════════════════════════════════════════════╗',
  '║  sudo: Access Granted                        ║',
  '║                                              ║',
  '║  [####################] 100%                 ║',
  '║                                              ║',
  '║  Recruiter detected                          ║',
  '║  Loading resume...                           ║',
  '║  Hire successful!                            ║',
  '║                                              ║',
  '║  Contact: adithyansk2002@gmail.com           ║',
  '║  Phone:   +91 88911 95211                    ║',
  '╚══════════════════════════════════════════════╝',
  '',
];

export default function TerminalSection() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'system', content: 'AdithyanDev Terminal v1.0.0 -- Cloud & DevOps Engineer' },
    { type: 'system', content: 'Type "help" to see available commands.' },
    { type: 'system', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isInsideTerminal, setIsInsideTerminal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Prevent page scroll when cursor is inside terminal
  useEffect(() => {
    const terminalEl = terminalRef.current;
    if (!terminalEl) return;


    const preventScroll = (e: WheelEvent) => {
      if (isInsideTerminal) {
        e.stopPropagation();
      }
    };

    terminalEl.addEventListener('wheel', preventScroll, { passive: false });
    return () => terminalEl.removeEventListener('wheel', preventScroll);
  }, [isInsideTerminal]);

  useEffect(() => {
    if (!terminalRef.current) return;

    terminalRef.current.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [lines]);

  const processCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [{ type: 'input', content: `adithyan@cloud:~$ ${cmd}` }];

    if (trimmed === '') {
      setLines(prev => [...prev, ...newLines]);
      return;
    }

    if (trimmed === 'clear') {
      setLines([{ type: 'system', content: 'Terminal cleared. Type "help" for commands.' }]);
      return;
    }

    if (trimmed === 'history') {
      const histLines = history.map((h, i) => ({ type: 'output' as const, content: `  ${i + 1}  ${h}` }));
      setLines(prev => [...prev, ...newLines, ...histLines]);
      return;
    }

    if (trimmed === 'sudo hire-me') {
      const easterLines = EASTER_EGG.map(l => ({ type: 'success' as const, content: l }));
      setLines(prev => [...prev, ...newLines, ...easterLines]);
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      const outputLines = handler().map(l => ({ type: 'output' as const, content: l }));
      setLines(prev => [...prev, ...newLines, ...outputLines, { type: 'output', content: '' }]);
    } else {
      setLines(prev => [
        ...prev,
        ...newLines,
        { type: 'error', content: `bash: ${trimmed}: command not found. Type "help" for available commands.` },
        { type: 'output', content: '' },
      ]);
    }
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      processCommand(input);
      if (input.trim()) setHistory(prev => [input, ...prev]);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? '' : history[newIndex] || '');
    }
  };

  const getLineColor = (type: TerminalLine['type']) => {
    switch (type) {
      case 'input': return 'text-accent';
      case 'error': return 'text-red-400';
      case 'success': return 'text-green-400';
      case 'system': return 'text-purple-light';
      default: return 'text-foreground/80';
    }
  };

  return (
    <section id="terminal" className="section-reveal relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">06 / Terminal</p>
          <h2 className="section-heading text-foreground">
            Interactive <span className="text-gradient-primary">Terminal</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A real Linux-like terminal. Try commands like <code className="text-accent font-mono text-sm">about</code>, <code className="text-accent font-mono text-sm">skills</code>, <code className="text-accent font-mono text-sm">projects</code>, or <code className="text-accent font-mono text-sm">sudo hire-me</code>.
          </p>
        </div>

        <div
          className="glass-card rounded-2xl border border-border/50 overflow-hidden"
          onClick={() => inputRef.current?.focus()}
          onMouseEnter={() => setIsInsideTerminal(true)}
          onMouseLeave={() => setIsInsideTerminal(false)}
        >
          <div className="flex items-center gap-2 px-5 py-4 border-b border-border/40 bg-secondary/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs font-mono text-muted-foreground">adithyan@cloud-devops: ~</span>
            <div className="ml-auto flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-green-400">connected</span>
            </div>
          </div>

          <div
            ref={terminalRef}
            className="p-6 h-80 overflow-y-auto font-mono text-sm space-y-0.5"
          >
            {lines.map((line, i) => (
              <div key={i} className={`${getLineColor(line.type)} leading-relaxed whitespace-pre-wrap break-all`}>
                {line.content}
              </div>
            ))}
            <div className="flex items-center gap-0">
              <span className="text-accent">adithyan@cloud:~$ </span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-foreground outline-none font-mono text-sm caret-accent"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
            </div>
          </div>

          <div className="px-6 py-3 border-t border-border/30 bg-secondary/10 flex flex-wrap gap-2">
            {['help', 'about', 'skills', 'projects', 'aws', 'sudo hire-me'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => { setInput(cmd); inputRef.current?.focus(); }}
                className="px-3 py-1 rounded text-xs font-mono border border-border/40 text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}