"use client"
import Footer from '@/components/footer/Footer'
import Images from '@/components/images/Images'
import React from 'react'


const images = [
  {
    src: "/db.png",
    alt: "certificado introduccion a base de datos",
    className: "lg:h-[320px]"
  },
  {
    src: "/python.png",
    alt: "certificado python"
  },
  {
    src: "/desarrolloWeb.png",
    alt: "certificado desarrollo web"
  },
  {
    src: "/js.png",
    alt: "certificado javascript"
  },
  {
    src: "/react.png",
    alt: "certificado react"
  },
  {
    src: "/ciberseguridad.png",
    alt: "certificado ciberseguridad"
  },
  {
    src: "/nextjs.png",
    alt: "certificado Next.js"
  },
]


const EducacionPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-1 text-white text-center mt-10">Certificaciones</h1>
      <div className='w-[180px] h-1 mx-auto bg-sky-500 mb-7'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 text-white container mx-auto md:gap-5'>
        {
          images.map( image => (
            <Images key={ image.alt } src={ image.src } alt={ image.alt } className={ image.className }/>
          ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default EducacionPage