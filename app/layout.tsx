import localFont from 'next/font/local';
import "./globals.css";
import Header from "@/components/header";
import Render from "@/components/render";
import { Metadata } from 'next';

export const metadata: Metadata = {
  applicationName: 'Arts & TIC',
  creator: 'Ludovic Morin',
  publisher: 'CréaLab',
  title: {
    default: 'Arts & TIC concentration de La Camaradière',
    template: '%s - Arts & TIC concentration de La Camaradière',
  },
  description: 'Une concentration de La Camaradière. Site web officiel du programme Arts & TIC developpé par le CréaLab.',
  keywords: [
    'Arts',
    'TIC',
    'Arts et TIC',
    'Arts & TIC',
    'La Camaradière',
    'école secondaire',
    'concentration',
    'Concentration Arts et TIC',
    'éducation',
    'créativité',
    'technologie',
    'Québec',
  ],
  authors: [{ name: 'Ludovic Morin', url: 'https://morin.moi' }],
  metadataBase: new URL('https://arts-tic.crealab.ca'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      new URL('/favicon.ico', 'https://arts-tic.crealab.ca'),
      { url: '/favicon-dark.ico', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/favicon.png'],
    apple: [
      { url: '/favicon.ico' },
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    title: 'Arts & TIC - Concentration de La Camaradière',
    description: 'Une concentration de La Camaradière. Site web officiel du programme Arts & TIC developpé par le CréaLab.',
    url: 'https://arts-tic.crealab.ca',
    siteName: 'Arts & TIC',
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
  }
}

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
