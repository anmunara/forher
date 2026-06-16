import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://formula-for-her.vercel.app"),
  title: {
    default: "Formula for her — Portal Penggemar Formula 1",
    template: "%s — Formula for her"
  },
  description:
    "Klasemen, jadwal, pembalap, tim, dan berita terkini dari dunia Formula 1 musim 2026.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Formula for her — Portal Penggemar Formula 1",
    description:
      "Klasemen, jadwal, pembalap, tim, dan berita terkini dari dunia Formula 1 musim 2026.",
    type: "website",
    locale: "id_ID",
    images: [{ url: "/img/hero-feature.jpg", width: 1600, alt: "Formula for her" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Formula for her — Portal Penggemar Formula 1",
    description:
      "Klasemen, jadwal, pembalap, tim, dan berita terkini dari dunia Formula 1 musim 2026.",
    images: ["/img/hero-feature.jpg"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-f1black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
