"use client";

import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';

const contactInfo = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="w-12 h-12" />,
    link: 'https://linkedin.com/in/geancarlobastos',
    description: 'Conecte-se comigo profissionalmente',
    color: 'hover:bg-[#0A66C2]'
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="w-12 h-12" />,
    link: 'https://github.com/GeancarloBastos',
    description: 'Veja meus projetos e contribuições',
    color: 'hover:bg-[#333]'
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp className="w-12 h-12" />,
    link: 'https://wa.me/5553991507241',
    description: 'Vamos conversar?',
    color: 'hover:bg-[#25D366]'
  },
  {
    name: 'Email',
    icon: <FaEnvelope className="w-12 h-12" />,
    link: 'mailto:geancarloads@gmail.com',
    description: 'Entre em contato por email',
    color: 'hover:bg-[#EA4335]'
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className="w-12 h-12" />,
    link: 'https://www.instagram.com/geanbastos01/?hl=pt-br',
    description: 'Siga-me no Instagram',
    color: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]'
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-400">
            Escolha a melhor forma de se conectar comigo
          </p>
        </div>

        {/* Grid de Contatos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.slice(0, 4).map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                block p-6 rounded-lg
                bg-zinc-900 
                transform hover:scale-105
                transition-all duration-300
                ${contact.color}
                hover:text-white
                group
              `}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                  {contact.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1">{contact.name}</h2>
                  <p className="text-gray-400 group-hover:text-gray-200">
                    {contact.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            key={contactInfo[4].name}
            href={contactInfo[4].link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block p-6 rounded-lg
              bg-zinc-900 
              transform hover:scale-105
              transition-all duration-300
              ${contactInfo[4].color}
              hover:text-white
              group
              w-full md:w-1/2
            `}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                {contactInfo[4].icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-1">{contactInfo[4].name}</h2>
                <p className="text-gray-400 group-hover:text-gray-200">
                  {contactInfo[4].description}
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Mensagem Adicional */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Disponível para oportunidades e colaborações! 
            <br />
            Vamos criar algo incrível juntos? 🚀
          </p>
        </div>
      </div>
    </div>
  );
}