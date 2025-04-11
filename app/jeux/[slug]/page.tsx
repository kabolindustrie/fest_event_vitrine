import { notFound } from "next/navigation";
import { jeuxGonflables } from "@/data/jeux";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export default function PageDetail({ params }: Props) {
  const jeu = jeuxGonflables.find((item) => item.slug === params.slug);

  if (!jeu) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="relative w-full h-150 rounded-xl overflow-hidden mb-6 shadow-md">
        <Image
          src={jeu.image}
          alt={jeu.titre}
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">{jeu.titre}</h1>
      <p className="text-gray-600 mb-4">{jeu.description}</p>
      <p className="text-sm text-gray-500">Catégorie : {jeu.categorie}</p>
    </main>
  );
}
