
// components/Card.jsx
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa"; // Ejemplo de íconos
import { RxArrowTopRight } from "react-icons/rx";

interface Props {
    src: string
    title: string
    description: string
    technologies: IconType[];
    githubUrl: string; // URL del repositorio de GitHub
    liveUrl: string;   // URL del sitio web del proyecto
}

const Card = ({ src, title, description, technologies, githubUrl, liveUrl }: Props) => {
  return (
<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden relative md:max-w-xl flex flex-col bg-transparent shadow-sky-500">
    <div className="overflow-hidden">
        <Image
            width={1920}
            height={1080}
            src={src}
            alt={"hola"}
            className="w-full object-cover transform transition duration-300 hover:scale-105 md:h-60"
        />
    </div>
    <div className="p-4 text-white h-auto flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 mt-auto">{title}</h3>
        <p className="mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between">
            <div className="flex space-x-2 hover:cursor-pointer">
                {technologies.map((TechIcon, index) => (
                    <TechIcon key={index} className="text-sky-500 w-6 h-6" />
                ))}
            </div>
            <div className="flex space-x-2">
                <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition"
                    aria-label="Ver Código en GitHub"
                >
                    <button className="flex px-2 py-2 bg-sky-500 hover:bg-sky-600 transition-all rounded-md">
                        Código
                        <FaGithub className="w-5 h-5 ml-2" />
                    </button>
                </Link>
                <Link
                    href={liveUrl}
                    target="_blank"
                    className="text-white transition"
                    aria-label="Ir al Sitio Web"
                >
                    <button className="px-2 py-2 bg-sky-500 hover:bg-sky-600 rounded-md transition-all flex">
                        Ir al sitio
                        <RxArrowTopRight className="w-5 h-5 ml-2" />
                    </button>
                </Link>
            </div>
        </div>
    </div>
</div>
  );
};

export default Card;
