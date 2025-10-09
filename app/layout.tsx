import localFont from 'next/font/local';
import "./globals.css";
import Header from "@/components/header";
import Render from "@/components/render";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arts & TIC',
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
        <Render children={children} />
      </body>
    </html>
  );
}
