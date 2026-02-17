import type { Metadata } from "next";
import { Italiana, Outfit, Quicksand } from "next/font/google";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "D Design Hub | Interior Design",
  description: "Transforming Spaces into Dreams. Premium Interior Design Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${quicksand.variable} ${italiana.variable} antialiased bg-stone-50 text-stone-900 font-sans`}
      >
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
