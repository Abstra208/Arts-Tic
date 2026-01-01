import localFont from 'next/font/local';
import "./globals.css";
import Header from "@/components/header";
import Render from "@/components/render";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Arts & TIC',
    template: '%s - Arts & TIC',
  },
  description: 'Une concentration de La Camaradière. Site web officiel du programme Arts & TIC developpé par le CreaLab.',
  keywords: ['Arts', 'TIC', 'Arts et TIC', 'Arts & TIC', 'La Camaradière', 'école secondaire', 'concentration', 'Concentration Arts et TIC', 'éducation', 'créativité', 'technologie'],
  authors: [{ name: 'Ludovic' }],
  creator: 'Ludovic',
  publisher: 'CreaLab',
  metadataBase: new URL('https://arts-tic.crealab.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    title: 'Arts & TIC',
    description: 'Une concentration de La Camaradière. Site web officiel du programme Arts & TIC developpé par le CreaLab.',
    siteName: 'Arts & TIC',
    url: 'https://arts-tic.crealab.ca',
    images: [
      {
        url: '/images/hero.jpg',
        width: 2048,
        height: 1475,
        alt: 'Arts & TIC - Une concentration de La Camaradière',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arts & TIC',
    description: 'Une concentration de La Camaradière. Site web officiel du programme Arts & TIC developpé par le CreaLab.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const FunnelDisplay = localFont({
  src: [
    {
      path: "../public/fonts/FunnelDisplay-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-funnel-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`body text-black ${FunnelDisplay.className}`}>
        <Header />
        <Render>
          {children}
        </Render>
      </body>
    </html>
  );
}
