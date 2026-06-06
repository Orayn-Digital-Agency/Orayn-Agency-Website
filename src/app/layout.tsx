import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orayn Digital Agency — Custom Websites, Apps & Automation",
  description:
    "Orayn builds production-grade websites, mobile apps, web applications, and automation systems for businesses ready to grow their digital presence.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://orayn.studio",
  ),
  openGraph: {
    title: "Orayn Digital Agency",
    description:
      "We build digital presence that wins clients. Custom websites, apps, and automation — no templates, no shortcuts.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://orayn.studio",
    siteName: "Orayn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orayn Digital Agency",
    description:
      "We build digital presence that wins clients. Custom websites, apps, and automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-white text-orayn-text">{children}</body>
    </html>
  );
}
