import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const OTSono = localFont({
  src: [
    {
      path: "../../public/fonts/OTSono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/OTSono-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/OTSono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/OTSono-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/OTSono-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The intelligent platform for travel and spend | Perk",
  description: "Perk offers the freedom travelers want, and the control companies need. Enjoy an industry-leading travel inventory, 24/7 support and easy booking.",
  icons: {
    icon: "/images/favicon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-us" className="motion-safe:scroll-smooth">
      <head>
        <link rel="preload" href="/fonts/OTSono-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/OTSono-Medium.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/OTSono-Semibold.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body suppressHydrationWarning className={`${OTSono.className} ${OTSono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
