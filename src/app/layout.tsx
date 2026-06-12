import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kevroy.com";

export const metadata: Metadata = {
  title: "Kevin Roy",
  description: "designer by heart, developer by hands.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Kevin Roy",
    description: "designer by heart, developer by hands.",
    url: siteUrl,
    siteName: "Kevin Roy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Roy",
    description: "designer by heart, developer by hands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0a0a0a]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed]`}
      >
        {children}
      </body>
    </html>
  );
}
