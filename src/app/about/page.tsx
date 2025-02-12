"use client";

import Image from 'next/image';

const technologies = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg',
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
  },
  {
    name: 'Visual Studio Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg',
  },
  {
    name: 'Ubuntu',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original-wordmark.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  },
];

export default function About() {
  return (
    <main className="bg-zinc-950 min-h-screen py-8">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden mb-8">
            <Image
              src="/euw.jpeg"
              alt="Geancarlo Bastos"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">Sobre</h1>
          <div className="w-12 h-1 bg-blue-500 mb-8"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-lg shadow-xl">
          <p className="text-gray-300 text-lg mb-6">
            Olá! Que ótimo você ter chegado até aqui! Fiquei tão feliz por seu interesse em me conhecer melhor que até desbloqueou minha foto sorrindo. 😄
          </p>
          <p className="text-gray-300 text-lg mb-6">
            Sou apaixonado por tecnologia e me encontrei na área do front-end. Estou sempre buscando aprender coisas novas e me aprimorar cada vez mais. A seguir, vou compartilhar um pouco mais sobre as tecnologias que conheço e meus objetivos. 🚀
          </p>
          <p className='text-gray-300 text-lg mb-6'>
            Minhas características mais fortes incluem proatividade, liderança, facilidade de aprendizado, comunicação e humildade. Estou sempre disposto a ajudar e a aprender com os outros.  🤝
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Tecnologias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-zinc-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 group hover:bg-zinc-100"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center font-semibold text-gray-300 group-hover:text-zinc-900 transition-colors duration-300">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Objetivos</h2>
          <p className="text-gray-300 text-lg mb-4">
            Estou focado em me desenvolver como programador Front-End. Até o momento, fui líder da equipe de front-end em todos os projetos em que participei na faculdade. Tive algumas experiências em projetos externos, mas ainda não tive a oportunidade de estagiar na área. Espero conseguir isso em breve, para que meu conhecimento não fique estagnado.

            No front-end, tenho um conhecimento de nível júnior, mas nas demais áreas me considero um estagiário, pois acabei focando muito no front, que é realmente o que me dá prazer em programar. 🎯
          </p>
        </div>
      </div>
    </main>
  );
}
