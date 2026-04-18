import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";

import { AppShell } from "@/components/layout/app-shell";
import { APP_DESCRIPTION, APP_NAME, APP_URL } from "@/lib/constants/app";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit"
});

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono"
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
  },
  icons: {
    icon: "/tn-voter-helper-favicon.svg"
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
      <body className={`${outfit.variable} ${geistSans.variable} ${geistMono.variable} font-sans`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
