import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Salinas Maragogi - Férias de Julho 2024",
  description: "Venha aproveitar nossos descontos e benefícios exclusivos para as férias de julho 2024 no Salinas Maragogi!",
  icons: "/motivos/icones-maragogi3.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${rubik.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
