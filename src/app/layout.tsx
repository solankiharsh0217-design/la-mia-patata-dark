import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "La Mia Patata | Gastronomia Riccione",
  description: "Un solo ingrediente. Infinite possibilità. Gastronomia specializzata in ricette a base di patata a Riccione.",
  keywords: ["La Mia Patata", "gastronomia", "Riccione", "patate", "baked potato", "street food"],
  openGraph: {
    title: "La Mia Patata | Un solo ingrediente. Infinite possibilità.",
    description: "Gastronomia specializzata in ricette a base di patata a Riccione.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}