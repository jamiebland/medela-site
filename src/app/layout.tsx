import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Medela Learning Support — Educational Therapy in Lisbon",
  description:
    "Specialist one-to-one educational therapy for children with learning differences in Lisbon and across Portugal. Founded by Becs and Jamille.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
