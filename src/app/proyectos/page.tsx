import Card from '@/components/card/Card';
import React from 'react'
import { FaBootstrap, FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from 'react-icons/io';
import Footer from '@/components/footer/Footer';

const projects = [
  {
    src: "/ventis.png",
    title: "VentisNova",
    description: "Página web desarrollada para la capacitación de mentorías y tutorías, creada con React, estilizada con Tailwind CSS y base de datos en Firebase para uso de blog, registro e inicio de sesíon de usuarios.",
    technologies: [FaReact, RiTailwindCssFill, IoLogoFirebase],
    githubUrl: "https://github.com/BrianMarchese/ventisnova",
    liveUrl: "https://www.ventisnova.com.ar",
  },
/*   {
    image: "/teslo.png",
    title: "Proyecto 2",
    description: "Página desarrollada para la charla de mentorias y tutorias, creada con React, estilizada con Tailwind CSS y base de datos en Firebase",
    technologies: [FaReact, FaNodeJs],
    githubUrl: "https://github.com/BrianMarchese",
    liveUrl: "https://github.com/BrianMarchese",l
  }, */
  {
    src: "/landing-page.png",
    title: "Transporte Brian",
    description: "Landing page realizada para un transporte de paquetería, estilizada con Tailwind CSS para adaptarse a cualquier dispositivo e implementación de funcionalidad con JavaScript.",
    technologies: [FaHtml5,IoLogoJavascript, RiTailwindCssFill],
    githubUrl: "https://github.com/BrianMarchese/Transporte-Brian",
    liveUrl: "https://transporte-brian.vercel.app/",
  },
  {
    src: "/la-barricaa.png",
    title: "La barrica",
    description: "Sitio web de venta de bebidas alcohólicas realizado en React, estilizado con Bootstrap y base de datos con stock controlado en Firebase para tener control de stock en tiempo real.",
    technologies: [FaReact, FaBootstrap, IoLogoFirebase],
    githubUrl: "https://github.com/BrianMarchese/ProyectoFinal-Marchese",
    liveUrl: "https://github.com/BrianMarchese/ProyectoFinal-Marchese/blob/master/NavegacionEntregaFinal.gif",
  },
  {
    src: "/cheerss.png",
    title: "Cheer´s",
    description: "Página web para el servicio de barras móviles de coctelería con la opción de venta de paquetes de contratación realizada con JavaScript, estilizada con Bootstrap y SASS.",
    technologies: [IoLogoJavascript, FaBootstrap, FaSass],
    githubUrl: "https://github.com/BrianMarchese/ProyectoFinal--Marchese",
    liveUrl: "https://brianmarchese.github.io/ProyectoFinal--Marchese/",
  },
];

const ProyectosPage = () => {
  return (
    <div>
      <div className="container mx-auto p-4 mt-8">
        <h1 className="text-3xl font-bold mb-1 text-white text-center">Mis Proyectos</h1>
        <div className='w-[180px] h-1 mx-auto bg-sky-500 mb-7'></div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              src={project.src}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProyectosPage