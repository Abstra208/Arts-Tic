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
    default: 'Arts & TIC, Concentration artistique | La Camaradière',
    template: '%s | La Camaradière',
  },
  description: 'Arts et TIC, une concentration de la Camaradière. Un programme qui fait dialoguer les arts et les technologies pour les tous les élèves du secondaire.',
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
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/favicon.ico' },
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    title: 'Arts & TIC - Concentration de La Camaradière',
    description: 'Arts et TIC, une concentration de la Camaradière. Un programme qui fait dialoguer les arts et les technologies pour les tous les élèves du secondaire.',
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
    description: 'Arts et TIC, une concentration de la Camaradière. Un programme qui fait dialoguer les arts et les technologies pour les tous les élèves du secondaire.',
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ecole-secondairedelacamaradiere.cssc.gouv.qc.ca/#organization",
      name: "La Camaradière",
      url: "https://ecole-secondairedelacamaradiere.cssc.gouv.qc.ca",
      description:
        "Arts et TIC, une concentration de la Camaradière. Un programme qui fait dialoguer les arts et les technologies.",
      logo: "https://ecole-secondairedelacamaradiere.cssc.gouv.qc.ca/wp-content/themes/lacamaradiere/favicon.png",
      telephone: "418 686-4661",
      sameAs: [
        "https://x.com/ecoleseclacama",
        "https://www.facebook.com/ecoleseclacama",
        "https://www.youtube.com/channel/UCyDl_03vuTbJIsWk813sHRg",
        "https://www.flickr.com/photos/126694081@N05/albums/",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "3400, boulevard Neuvialle",
        addressLocality: "Québec",
        addressRegion: "QC",
        postalCode: "G1P 3A8",
        addressCountry: "CA",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://arts-tic.crealab.ca/#website",
      url: "https://arts-tic.crealab.ca",
      name: "Arts & TIC",
      publisher: {
        "@id": "https://arts-tic.crealab.ca/#organization",
      },
    },
    {
      "@type": "Person",
      "@id": "https://morin.moi/#person",
      name: "Ludovic Morin",
      url: "https://morin.moi",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`body text-black ${FunnelDisplay.className}`}>
        <Header />
        <Render disabled className='max-w-screen flex flex-col items-center'>
          {children}
        </Render>
      </body>
    </html>
  );
}
