'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi' // Iconos para el menú hamburguesa
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-800/60 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          <Link href="/">
              <Image src="/logo.png" width={50} height={50} alt="Logo" />
          </Link>
        </div>

        {/* Navegación en pantallas grandes */}
        <ul className="hidden md:flex space-x-8 text-white text-lg">
          <li className="flex items-center">
            <Link href="/" className={`hover:text-sky-500 transition-all ${ pathName === "/" ? "text-sky-500" : "text-white" }`}>
              Inicio
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/proyectos" className={`hover:text-sky-500 transition-all ${ pathName === "/proyectos" ? "text-sky-500" : "text-white" }`}>
              Proyectos
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/educacion" className={`hover:text-sky-500 transition-all ${ pathName === "/educacion" ? "text-sky-500" : "text-white" }`}>
              Certificados
            </Link>
          </li>
        </ul>

        {/* Menú hamburguesa para móviles */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <ul className="md:hidden text-white space-y-4 text-center mt-4 ">
          <li className="flex justify-center items-center">
            <Link href="/" className={`block hover:text-sky-500 transition-all ${ pathName === "/" ? "text-sky-500" : "text-white" }`}>
              Inicio
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link href="/proyectos" className={`block hover:text-sky-500 transition-all ${ pathName === "/proyectos" ? "text-sky-500" : "text-white" }`}>
              Proyectos
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link href="/educacion" className={`block hover:text-sky-500 transition-all ${ pathName === "/educacion" ? "text-sky-500" : "text-white" }`}>
              Certificados
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar
