import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/layout/breadcrumb';
import { Aboreto, Alegreya_Sans_SC, Zen_Kurenaido, Inter } from 'next/font/google';
import './globals.css';

const aboreto = Aboreto({
  variable: '--font-aboreto',
  subsets: ['latin'],
  weight: '400',
});

const alegreyaSansSC = Alegreya_Sans_SC({
  variable: '--font-alegreya-sans-sc',
  subsets: ['latin'],
  weight: '400',
});

const zenKurenaido = Zen_Kurenaido({
  subsets: ['latin'],
  variable: '--font-zen-kurenaido',
  weight: '400',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: '300',
});

export const metadata: Metadata = {
  title: 'Skretcher Web Shop',
  description: 'A fictive online shop built with Next.js and Tailwind.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aboreto.variable} ${alegreyaSansSC.variable} ${zenKurenaido.variable} ${inter.variable} flex min-h-screen flex-col antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <Breadcrumb />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
