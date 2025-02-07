import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geancarlo",
  description: "Site destinado a falar sobre Geancarlo Bastos.",
  keywords: ["Geancarlo", "Bastos", "Geancarlo Bastos", "Frontend", "Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
