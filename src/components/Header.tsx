"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-3 md:p-4 lg:p-6 bg-zinc-950 transition-all duration-300">
      <div className="text-xl hover:scale-105 transition-transform">
        <Link href="/" className="text-center hover:text-gray-300">Geancarlo Bastos</Link>
      </div>

      <div className="hidden md:flex space-x-4 lg:space-x-8">
        <Link href="/" className="hover:text-gray-300 transition-colors duration-200 hover:-translate-y-0.5">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors duration-200 hover:-translate-y-0.5">
          Sobre
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition-colors duration-200 hover:-translate-y-0.5">
          Contatos
        </Link>
      </div>

      <button
        className="md:hidden hover:scale-110 transition-transform"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 right-4 w-48 py-2 bg-zinc-900 rounded-lg shadow-xl md:hidden transform transition-all duration-200">
          <Link href="/" className="block px-4 py-2 hover:bg-zinc-800 transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-zinc-800 transition-colors duration-200">
            Sobre
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-zinc-800 transition-colors duration-200">
            Contatos
          </Link>
        </div>
      )}
    </nav>
  );
}