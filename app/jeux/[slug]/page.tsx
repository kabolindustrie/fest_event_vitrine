import { notFound } from "next/navigation";
import { jeuxGonflables } from "@/data/jeux";
import { Euro, Ruler, Users } from "lucide-react";
import JeuCarousel from "@/components/JeuCarousel";

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const jeu = jeuxGonflables.find((item) => item.slug === params.slug);
  if (!jeu) return notFound();

  return (
    <main className="max-w-6xl mx-auto p-6 mt-[200px]">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          {jeu.images?.length > 0 && <JeuCarousel images={jeu.images} />}
        </div>

        <div className="md:w-1/2 flex flex-col justify-center p-3 border-2 border-amber-600/10 rounded-2xl shadow-xl">
          <h1 className="text-5xl font-bold mb-4">{jeu.titre}</h1>
          <p className="text-gray-700 text-base mb-6">{jeu.descriptionLongue}</p>

          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-3">
              <Euro className="text-pink-600" />
              <span>
                <span className="font-bold text-pink-700">Tarif :</span>{" "}
                {jeu.tarif.toFixed(2)}€
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Ruler className="text-pink-600" />
              <span>
                <span className="font-bold text-pink-700">Dimensions :</span>{" "}
                {jeu.dimensions}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-pink-600" />
              <span>
                <span className="font-bold text-pink-700">Âge :</span>{" "}
                {jeu.age}
              </span>
            </div>

            <div className="mt-12 text-start">
              <h2 className="text-2xl font-semibold mb-4">Voulez-vous un devis ?</h2>
              <a
                href="/contact"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-lg transition"
              >
                Réserver
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
