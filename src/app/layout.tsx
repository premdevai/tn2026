import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Inter } from "next/font/google";

import { AppShell } from "@/components/layout/app-shell";
import { APP_DESCRIPTION, APP_NAME, APP_URL } from "@/lib/constants/app";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans"
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  authors: [{ name: "Vote Smart TN" }],
  keywords: [
    "Tamil Nadu election",
    "Chennai polling booth",
    "voter checklist",
    "candidate guide",
    "booth finder"
  ],
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    locale: "en_IN",
    siteName: APP_NAME,
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#2C694E",
  width: "device-width",
  initialScale: 1
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-IN">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400..700,0,0"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${inter.variable}`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
