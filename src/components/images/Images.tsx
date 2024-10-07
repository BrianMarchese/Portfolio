import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  className?: React.ReactNode
}

const Images = ({ src, alt, className }: Props) => {
  return (
    <div className="mx-4 md:mx-0">
      <Image
        src={src}
        alt={alt}
        width={1920} 
        height={1080}
        className={`object-cover rounded-md transform transition duration-300 hover:scale-105 mb-5 md:mb-0 ${ className }`}
      />
    </div>
  );
};

export default Images;
