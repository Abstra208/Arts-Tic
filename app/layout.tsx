import localFont from 'next/font/local';
import "./globals.css";
import Header from "@/components/header";
import Render from "@/components/render";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arts & TIC',
  openGraph: {
    title: 'Arts & TIC',
    description: 'Une concentration de La Camaradière.',
    siteName: 'Arts & TIC',
    url: 'https://artstic.crealab.ca',
    images: [
      {
        url: 'https://artstic.crealab.ca/images/hero.jpg',
        width: 2048,
        height: 1475,
        alt: 'Arts & TIC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arts & TIC',
    description: 'Une concentration de La Camaradière.',
    images: ['https://artstic.crealab.ca/images/hero.jpg'],
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
