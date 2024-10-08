"use client"
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center md:my-0 my-10">
          <div className="max-w-6xl w-full flex items-center justify-between space-x-8 px-6">
            {/* Contenedor del texto */}
            <div className="flex flex-col space-y-6 max-w-lg">

              {/* Título principal */}
              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} animate={{ opacity: 0, x: 0 }} transition={{ duration: 0.7 }}  className="text-5xl font-bold leading-tight">
                <p className="text-3xl">Hola, soy</p>
                Brian Uriel Marchese
                <p className="text-3xl text-sky-500 mt-2">Desarrollador Front End</p>
              </motion.div>
              <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} animate={{ opacity: 0, x: 0 }} transition={{ duration: 0.7 }} className="text-xl">Actualmente me encuentro en la búsqueda de proyectos o empresas que me permitan volcar mis conocimientos, pero también adquirir nuevos. A la hora de trabajar en equipo me siento cómodo, ya que con un equipo se puede llegar a un mejor resultado final.</motion.p>
              <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} animate={{ opacity: 0, x: 0 }} transition={{ duration: 0.7 }} className="text-xl"> Debajo encontrarás <span className="text-sky-500">mis redes</span>. Gracias por tomarte el tiempo de leer esto y por tu atención.</motion.p>
              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} animate={{ opacity: 0, x: 0 }} transition={{ duration: 0.7 }} className="flex items-center">
                <Link href={ "https://github.com/BrianMarchese" } target="_blank">
                  <FaGithub size={33} className="mx-2 hover:text-sky-500 transition-all"/>
                </Link>
                <Link href={ "https://www.linkedin.com/in/brian-uriel-marchese/" } target="_blank">
                  <CiLinkedin size={35} className="mx-2 hover:text-sky-500 transition-all"/>
                </Link>
                <Link href={ "mailto:brianmarchese@hotmail.com" } target="_blank">
                  <CiMail size={33} className="mx-2 hover:text-sky-500 transition-all"/>
                </Link>
              </motion.div>
              {/* Botones */}
              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} animate={{ opacity: 0, x: 0 }} transition={{ duration: 0.7 }} className="flex space-x-4">
                <Link href="/CV Brian Uriel Marchese.pdf" download target="_blank">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Descargar CV
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Contenedor de la imagen */}
            <motion.div initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="hidden md:block">
              {/*           <Image
                src="/Foto-removebg-preview.png" // cambia esto al nombre de tu imagen
                alt="Profile Image"
                width={300}
                height={300}
                className="rounded-full shadow-xl shadow-sky-600 bg-sky-500/70"
                /> */}
                <Image
                src="/Foto.jpg" // cambia esto al nombre de tu imagen
                alt="Profile Image"
                width={300}
                height={300}
                className="rounded-3xl shadow-xl shadow-sky-600"
              />
            </motion.div>
          </div>
        </div>
      <Footer />
    </div>
  );
}
