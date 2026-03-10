interface EducationItem {
  fecha: string;
  titulo: string;
  institucion: string;
  descripcion?: string;
}

const educationData: EducationItem[] = [
  {
    fecha: "2025 - Actualidad",
    titulo: "Tecnicatura Superior en Programación",
    institucion: "Teclab",
    descripcion: "Formación orientada al desarrollo de software seguro y moderno con distintas metodologías y tecnologías."
  },
  {
    fecha: "2021 - 2024",
    titulo: "Bachiller Universitario en Ciencias de la Computación",
    institucion: "Universidad Nacional de Rosario - UNR",
    descripcion: "Formación universitaria enfocada principalmente en los cimientos de la ingeniería de software y las ciencias de la computación."
  },
  {
    fecha: "2026 - 2020",
    titulo: "Bachiller en Economía y Administración",
    institucion: "Colegio Nuestra Señora de la Merced"
  }
];

const EducationTimeline = () => {
  return (
    <div className="max-w-6xl mx-auto pb-4 px-6">
      <h2 className="text-3xl font-bold mb-8 text-white">Mi Formación</h2>
      
      <div className="relative border-l border-blue-500 ml-3">
        {educationData.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* El punto de la línea de tiempo */}
            <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full -left-[8.5px] ring-4 hover:bg-sky-400 transition-all duration-300">
            </span>
            {/* cuerpo de la card */}
            <div className="p-5 bg-gray-800 rounded-xl border border-gray-700 shadow-sm hover:border-sky-500 transition-all duration-300 cursor-pointer">
              <time className="block mb-2 text-xs font-semibold uppercase tracking-wide text-sky-400">
                {item.fecha}
              </time>
              <h3 className="text-xl font-bold text-white">
                {item.titulo}
              </h3>
              <p className="text-md font-medium text-gray-300">
                {item.institucion}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {item.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;