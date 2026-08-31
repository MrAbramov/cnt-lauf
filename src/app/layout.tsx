import type { Metadata } from "next";
import { Inter, Chivo_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-chivo-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CNT-Lauf",
  description:
    "CNT-Lauf.de – Ihr IT-Partner für Computer, Netzwerke, Cloud, Sicherheit und Automatisierung in Lauf an der Pegnitz.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${chivoMono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
