"use client";

import React from "react";

interface Tech {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

const technologies: Tech[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Framework Fullstack",
    icon: (
      <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r="90" fill="#000" />
        <path
          fill="url(#next-grad)"
          d="M149.508 157.52L69.142 54H54v72h14.4V72.937l66.924 86.837a89.65 89.65 0 0014.184-2.254z"
        />
        <path fill="#FFF" d="M115.2 54h14.4v72h-14.4z" />
        <defs>
          <linearGradient
            id="next-grad"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF" />
            <stop offset="1" stopColor="#FFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "react",
    name: "React",
    category: "Librería Frontend",
    icon: (
      <svg className="w-8 h-8 text-[#61DAFB]" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(30 50 50)"/>
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(90 50 50)"/>
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(150 50 50)"/>
        <circle cx="50" cy="50" r="8" />
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Lenguaje Tipado",
    icon: (
      <svg className="w-8 h-8 rounded-md" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="16" fill="#3178C6"/>
        <path fill="#FFFFFF" d="M116 102.3c-1.8 2.8-4.4 5-7.8 6.7-3.4 1.7-7.4 2.5-12 2.5-4.4 0-8.3-.9-11.7-2.6-3.4-1.7-6-4.2-7.8-7.4l10.4-6.3c1.2 2.2 2.7 3.8 4.6 4.9 1.9 1.1 4 1.6 6.3 1.6 2.3 0 4.1-.4 5.3-1.3 1.2-.9 1.8-2.1 1.8-3.6 0-1.2-.4-2.2-1.3-3-.9-.8-2.6-1.6-5.1-2.4l-3.9-1.3c-4.4-1.4-7.7-3.2-9.9-5.4-2.2-2.2-3.3-5-3.3-8.4 0-4 1.5-7.3 4.5-9.8 3-2.5 7-3.8 12.1-3.8 4.2 0 7.8.8 10.9 2.5 3.1 1.7 5.5 3.9 7.1 6.8l-9.8 6.1c-1.1-1.8-2.4-3.1-3.9-3.9-1.5-.8-3.2-1.2-5-1.2-2.1 0-3.7.4-4.8 1.2-1.1.8-1.6 1.8-1.6 3 0 1.1.4 2 1.3 2.7.9.7 2.5 1.4 4.8 2.2l3.9 1.3c4.6 1.5 8 3.3 10.2 5.6 2.2 2.3 3.3 5.2 3.3 8.7 0 4.2-1.5 7.6-4.5 10.2zM57.6 74.2H42.7v36.3H29V74.2H14V62.8h43.6v11.4z"/>
      </svg>
    ),
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Lenguaje de Programación",
    icon: (
      <svg className="w-8 h-8 rounded-md" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="16" fill="#F7DF1E"/>
        <path fill="#000000" d="M67.31 103.86c3.25 5.42 7.6 9.4 14.77 9.4 6.22 0 10.22-3.11 10.22-7.44 0-5.18-4.13-7-11.03-10l-3.8-1.63c-10.97-4.66-18.23-10.45-18.23-22.95 0-11.38 8.8-20.08 22.56-20.08 9.8 0 16.53 3.48 21.18 11.64l-10.08 6.47c-2.58-4.65-5.42-6.47-11.1-6.47-4.9 0-8.15 3.1-8.15 6.72 0 4.65 3.1 6.33 10.08 9.32l3.8 1.63c12.92 5.56 19.4 11.12 19.4 23.7 0 13.43-10.34 21.31-25.54 21.31-14.35 0-22.88-6.98-27.27-15.63l13.2-8.01zm-38.3.4c2.07 3.62 4.78 6.72 9.56 6.72 4.9 0 8.01-2.45 8.01-12.01V52.1h15.25v47.28c0 17.83-10.2 25.07-24.81 25.07-11.37 0-18.35-5.94-22.22-13.95l14.21-6.24z"/>
      </svg>
    ),
  },
  {
    id: "sql",
    name: "SQL",
    category: "BBDD Relacional",
    icon: (
      <svg className="w-8 h-8 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#38BDF8" fillOpacity="0.2" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" strokeLinecap="round" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Estilos & UI",
    icon: (
      <svg className="w-8 h-8 text-[#38BDF8]" viewBox="0 0 100 100" fill="currentColor">
        <path d="M26 32c5-10 13-13 22-9 6 3 9 9 12 14 5 7 10 11 20 10-5 10-13 13-22 9-6-3-9-9-12-14-5-7-10-11-20-10zm-12 24c5-10 13-13 22-9 6 3 9 9 12 14 5 7 10 11 20 10-5 10-13 13-22 9-6-3-9-9-12-14-5-7-10-11-20-10z" />
      </svg>
    ),
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Backend / Auth",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 100 100">
        <path fill="#FFCA28" d="M18 78l17-64 20 30z"/>
        <path fill="#FFA000" d="M55 44l10-18 20 52z"/>
        <path fill="#F57C00" d="M18 78l37-34 30 34-67 11z"/>
      </svg>
    ),
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "Base de Datos",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 100 100">
        <path fill="url(#supa-grad-2)" d="M54 8L12 56h34L38 92l50-48H52l8-36z"/>
        <defs>
          <linearGradient id="supa-grad-2" x1="12" y1="8" x2="88" y2="92" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3ECF8E"/>
            <stop offset="1" stopColor="#24B47E"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "github",
    name: "Git & GitHub",
    category: "Control de Versiones",
    icon: (
      <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 98 96">
        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.224-5.624-5.421-7.17-5.421-7.17-4.446-3.016.324-2.95.324-2.95 4.932.35 7.526 5.109 7.526 5.109 4.367 7.55 11.482 5.378 14.361 4.114.436-3.18 1.698-5.378 3.076-6.6-10.849-1.222-22.254-5.45-22.254-24.312 0-5.378 1.94-9.778 5.12-13.217-.502-1.222-2.224-6.273.47-13.04 0 0 4.127-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.128 0 8.33.571 12.213 1.63 9.299-6.356 13.413-5.052 13.413-5.052 2.707 6.767.985 11.818.483 13.04 3.2 3.439 5.108 7.839 5.108 13.217 0 18.913-11.428 23.074-22.335 24.296 1.765 1.536 3.328 4.545 3.328 9.157 0 6.608-.067 11.907-.067 13.538 0 1.31.879 2.88 3.344 2.382C84.053 89.37 98 70.97 98 49.217 98 22 76.146 0 48.854 0z" />
      </svg>
    ),
  },
];

export const Carrusel = () => {
  const doubleTechs = [...technologies, ...technologies];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center justify-center mb-10 text-center">
        <h2 className="text-3xl font-bold text-white tracking-wide">
          Mi Stack Tecnológico
        </h2>
        {/* Subrayado */}
        <div className="w-20 h-[3px] bg-sky-500 rounded-full mt-2.5 shadow-[0_0_12px_#0099ff]" />
      </div>

      {/* Contenedor */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused] py-4">
          {doubleTechs.map((tech, index) => (
            <div
              key={`${tech.id}-${index}`}
              className="flex items-center gap-3.5 px-5 py-3.5 rounded-xl bg-[#111A2E]/90 border border-sky-500/20 backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] cursor-pointer group"
            >
              {/* Contenedor del Logo */}
              <div className="p-2 rounded-lg bg-[#0B132B] border border-sky-500/20 group-hover:border-sky-400/40 transition-colors">
                {tech.icon}
              </div>

              {/* Información */}
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[11px] text-sky-400 font-medium">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}