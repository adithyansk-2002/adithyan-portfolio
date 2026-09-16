import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://adithyan-dev.vercel.app'),
  title: 'AdithyanDev — Cloud & DevOps Engineer',
  description: 'Adithyan Suresh Kumar (AdithyanDev) is a Cloud & DevOps Engineer specializing in AWS, Linux system administration, Infrastructure as Code (IaC), Docker, Kubernetes, Jenkins, Terraform, and Ansible.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'AdithyanDev — Cloud & DevOps Engineer',
    description: 'Adithyan Suresh Kumar (AdithyanDev) is a Cloud & DevOps Engineer specializing in AWS, Linux system administration, Infrastructure as Code (IaC), Docker, Kubernetes, Jenkins, Terraform, and Ansible.',
    url: 'https://adithyan-dev.vercel.app',
    siteName: 'AdithyanDev Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AdithyanDev — Cloud & DevOps Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdithyanDev — Cloud & DevOps Engineer',
    description: 'Adithyan Suresh Kumar (AdithyanDev) is a Cloud & DevOps Engineer specializing in AWS, Linux system administration, Infrastructure as Code (IaC), Docker, Kubernetes, Jenkins, Terraform, and Ansible.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={dmSans.className}>
        {children}
      </body>
    </html>
  );
}