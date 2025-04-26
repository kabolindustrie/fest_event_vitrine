import { notFound } from "next/navigation";
import { jeuxGonflables } from "@/data/jeux";
import JeuCarousel from "@/components/JeuCarousel";
import { Euro, Ruler, Users } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return jeuxGonflables.map((jeu) => ({
    slug: jeu.slug,
  }));
}

export default function Page({ params }: PageProps) {
  const jeu = jeuxGonflables.find((item) => item.slug === params.slug);

  if (!jeu) return notFound();

  return (
    <main className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-8 pt-60">
        <div className="w-full md:w-1/2 flex items-center">
          {jeu.images && <JeuCarousel images={jeu.images} />}
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 border rounded-lg shadow-lg bg-white">
          <h1 className="text-4xl font-bold mb-6">{jeu.titre}</h1>
          <p className="text-gray-700 mb-6">{jeu.descriptionLongue}</p>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-3">
              <Euro className="text-pink-600" />
              <span><strong>Tarif :</strong> {jeu.tarif} €</span>
            </div>
            <div className="flex items-center gap-3">
              <Ruler className="text-pink-600" />
              <span><strong>Dimensions :</strong> {jeu.dimensions}</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-pink-600" />
              <span><strong>Âge :</strong> {jeu.age}</span>
            </div>
          </div>
          <div className="mt-10">
            <a href="/contact" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold">
              Réserver
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
