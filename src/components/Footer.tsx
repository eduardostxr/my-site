import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <nav className="flex space-x-6 mb-4">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              Sobre
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contato
            </Link>
          </nav>

          <div className="flex space-x-6">
            <a
              href="https://github.com/GeancarloBastos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/geancarlobastos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/geanbastos01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>

          <div className="text-gray-400 text-sm mt-6">
            <p>© {currentYear} Geancarlo Bastos. Todos os direitos reservados.</p>
          </div>

          <div className="text-gray-500 text-xs mt-2">
            <p>Desenvolvido com ❤️ por Geancarlo Bastos</p>
          </div>
        </div>
      </div>
    </footer>
  );
}