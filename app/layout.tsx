import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Ghost Journal',
    template: '%s · Ghost Journal',
  },
  description:
    'Journal a thought, challenge it with AI opponents, and share or export the debate.',
  applicationName: 'Ghost Journal',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: 'Ghost Journal',
    description: 'A one-minute AI debate journal.',
    siteName: 'Ghost Journal',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ghost Journal',
    description: 'A one-minute AI debate journal.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="ghost-journal">
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}