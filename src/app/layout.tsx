import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AQ Accessories | Mobile Accessories Lahore",
  description:
    "AQ Accessories is Lahore's trusted mobile accessories shop for high-quality mobile chargers, data cables, airbuds, and headphones. Order instantly via WhatsApp.",
  metadataBase: new URL('https://your-domain-placeholder.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AQ Accessories | Premium Mobile Accessories in Lahore",
    description:
      "Quality mobile chargers, data cables, airbuds, and headphones — tested for performance and delivered to your doorstep in Lahore.",
    type: "website",
    locale: "en_PK",
    siteName: "AQ Accessories Shop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
