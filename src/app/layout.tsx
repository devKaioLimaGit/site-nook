import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // Importa o Script do Next.js

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
  description:
    "Plataforma de tecnologia da NOOK focada na inclusão de jovens no mercado de trabalho, com impacto social e desenvolvimento profissional transformador.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white`}
      >
        {children}

        {/* VLibras Plugin */}
        <div vw className="enabled">
          <div vw-access-button className="active"></div>
          <div vw-plugin-wrapper>
            <div className="vw-plugin-top-wrapper"></div>
          </div>
        </div>

        <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="afterInteractive" />
        <Script
          id="vlibras-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `new window.VLibras.Widget('https://vlibras.gov.br/app');`,
          }}
        />
      </body>
    </html>
  );
}
