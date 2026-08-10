import type { Metadata } from "next";
import { display, dmSans, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://primsastoriesya.com"),
  title: "Primsa Storiesya — Premium Event Spaces in Koramangala, Bangalore",
  description:
    "Primsa Storiesya offers versatile premium event spaces in Koramangala, Bangalore — Elite Hall, Podcast Studio, Art Studio, and more. Host seminars, corporate events, cultural concerts, and sound healing sessions. Book your space today.",
  keywords: [
    "event space Bangalore",
    "event hall Koramangala",
    "podcast studio rental Bangalore",
    "art studio rental",
    "seminar hall Koramangala",
    "corporate event venue Bangalore",
    "sound healing space",
    "cultural event hall Bangalore",
    "Primsa Storiesya",
  ],
  openGraph: {
    title: "Primsa Storiesya — Inspire. Create. Transform.",
    description:
      "Premium, versatile event spaces in the heart of Koramangala, Bangalore. Elite Hall, Podcast Studio, Art Studio, and 6 more spaces for rent.",
    url: "https://primsastoriesya.com",
    siteName: "Primsa Storiesya",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/elite-hall.jpg",
        width: 1200,
        height: 630,
        alt: "Primsa Storiesya Elite Hall  —  Premium Event Space in Koramangala, Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primsa Storiesya — Premium Event Spaces in Koramangala",
    description:
      "Versatile event spaces for halls, podcasts, art, seminars, corporate events & cultural concerts.",
    images: ["/images/elite-hall.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${dmSans.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body className="bg-ivory text-ink antialiased flex flex-col min-h-screen">
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
