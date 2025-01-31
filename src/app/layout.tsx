import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/header/Header";

const geistInter = localFont({
  src: "../../src/app/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Projeto Petx",
  description: `Um sistema de gerenciamento interno para uma ONG de abrigo animal. O sistema vai contar com login, página de dashboard, paginas de cadastro e gerenciamento dos animais.
  <br>
  É um projeto de extensão da faculdade, sendo desenvolvido em grupo.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistInter.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
