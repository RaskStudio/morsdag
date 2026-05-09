import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Glædelig Mors Dag | ARKEN Tur",
  description: "En digital gave til verdens bedste mor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#fdf8f4]`}>
        {children}
      </body>
    </html>
  );
}
