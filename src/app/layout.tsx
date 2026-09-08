import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GlobalBeams } from '@/components/GlobalBeams';
import { ThemeProvider } from '@/components/ThemeContext';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shameem | Software Builder',
  description: 'Personal portfolio of Shameem, a computer science student building AI-powered applications, software products, and experimental safety systems.',
  metadataBase: new URL('https://shameem-portfolio-placeholder.com'),
  icons: {
    icon: '/brand/favicon.svg',
    apple: '/brand/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Shameem | Software Builder',
    description: 'Personal portfolio of Shameem, a computer science student building AI-powered applications, software products, and experimental safety systems.',
    url: 'https://shameem-portfolio-placeholder.com',
    siteName: 'Shameem Portfolio',
    images: [
      {
        url: '/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shameem Software Studio Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shameem | Software Builder',
    description: 'Personal portfolio of Shameem, a computer science student building AI-powered applications, software products, and experimental safety systems.',
    images: ['/brand/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F3F3F0] font-sans antialiased min-h-screen flex flex-col justify-between relative overflow-x-hidden">
        <ThemeProvider>
          {/* Global Ambient React Bits Three.js Beams Background */}
          <GlobalBeams />

          {/* Global Floating Wider Header */}
          <Navbar />

          {/* Main Application Flow (Relative layer over Beams) */}
          <main className="flex-grow relative z-10">{children}</main>

          {/* Global Footer (Caps Beams background) */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
