import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/config";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const siteTitle = "Medela Learning Support — Educational Therapy in Lisbon";
const siteDescription =
  "Specialist one-to-one educational therapy for children with learning differences in Lisbon and across Portugal. Founded by Rebecca and Jamille.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: "%s — Medela Learning Support",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Medela Learning Support",
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medela Learning Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
