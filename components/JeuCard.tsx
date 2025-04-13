import Image from "next/image";
import Link from "next/link";

interface JeuCardProps {
  titre: string;
  image: string;
  description: string;
  slug: string;
}

export default function JeuCard({ titre, image, description, slug }: JeuCardProps) {
  return (
    <Link href={`/jeux/${slug}`} className="block">
      <div className="relative w-full h-64 overflow-hidden rounded-xl shadow-lg group cursor-pointer">
        <Image
          src={image}
          alt={titre}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white text-lg font-semibold">{titre}</h3>
          <p className="text-white text-sm mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
}
