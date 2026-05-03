import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "טל כהן — יועץ משכנתאות | TAL COHEN",
  description:
    "ייעוץ משכנתאות אישי ומקצועי עם טל כהן — ריביות הכי טובות, ליווי מלא עד לחתימה.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark text-white font-[family-name:var(--font-heebo)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* WhatsApp floating button — appears on ALL pages */}
        <WhatsAppButton />
      </body>
    </html>
  );
}