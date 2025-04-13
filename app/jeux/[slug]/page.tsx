import { notFound } from "next/navigation";
import { jeuxGonflables } from "@/data/jeux";
import Image from "next/image";
import { Euro, Ruler, Users } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export default function PageDetail({ params }: Props) {
  const jeu = jeuxGonflables.find((item) => item.slug === params.slug);
  if (!jeu) return notFound();

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Layout image + infos */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image à gauche */}
        <div className="relative w-full h-80 md:h-[400px] md:w-1/2 rounded-xl overflow-hidden shadow-md">
          <Image src={jeu.image} alt={jeu.titre} fill className="object-cover" />
        </div>

        {/* Texte à droite */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{jeu.titre}</h1>
          <p className="text-gray-700 text-base mb-6">{jeu.description}</p>

          <div className="flex flex-col gap-4 text-sm">
            {/* Tarif */}
            <div className="flex items-center gap-3">
              <Euro className="text-pink-600" />
              <span>
                <span className="font-bold text-pink-700">Tarif :</span> {jeu.tarif.toFixed(2)}€
              </span>
            </div>

            {/* Dimensions */}
            <div className="flex items-center gap-3">
              <Ruler className="text-pink-600" />
              <span>
                <span className="font-bold text-pink-700">Dimensions :</span> {jeu.dimensions}
              </span>
            </div>

            {/* Âge */}
            <div className="flex items-center gap-3">
              <Users className="text-pink-600" />
              <span>
                <span className="font-bold text-pink-700">Âge :</span> {jeu.age}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
