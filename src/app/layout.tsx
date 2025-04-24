import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

// Fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nook",
  description: "Plataforma de tecnologia da NOOK focada na inclusão de jovens no mercado de trabalho, com impacto social e desenvolvimento profissional transformador.",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
       <link rel="icon" href="/favicon.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
