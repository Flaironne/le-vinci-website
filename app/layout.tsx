import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://le-vinci.fr",
  ),
  title: {
    default: "Le Vinci | Restaurant français à Sausheim",
    template: "%s | Le Vinci",
  },
  description:
    "Le Vinci, restaurant français traditionnel à Sausheim. Une cuisine généreuse et authentique dans une ambiance chaleureuse.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Le Vinci",
    title: "Le Vinci | Restaurant français à Sausheim",
    description:
      "Une cuisine française traditionnelle dans un cadre chaleureux à Sausheim.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Vinci | Restaurant français à Sausheim",
    description:
      "Une cuisine française traditionnelle dans un cadre chaleureux à Sausheim.",
  },
  icons: { icon: "/icon.svg", apple: "/icon-192.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
