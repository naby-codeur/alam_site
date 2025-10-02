import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALAM - Alliance des Loyaux et Adeptes de Mahdi",
  description: "Consortium d'organisations multisectorielles caractérisé par un système d'administration socioéconomique centralisé aux dimensions internationales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
