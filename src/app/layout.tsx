import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <body className="bg-zinc-950 text-zinc-50">
        <Header />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>  
    </html>
  );
}
