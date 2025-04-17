import { jeuxGonflables } from "@/data/jeux";
import JeuCard from "../../../components/JeuCard";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function CategoriePage({ params }: Props) {
  const jeuxFiltres = jeuxGonflables.filter((jeu) =>
    // On vérifie si la catégorie du jeu correspond au slug de l'URL
    // On utilise toLowerCase pour ignorer la casse
    jeu.categories.some((cat) => cat.toLowerCase() === params.slug.toLowerCase())
  );

  // Si aucun jeu ne correspond à la catégorie, on retourne une page 404
  if (jeuxFiltres.length === 0) return notFound();

  return (
    <main className="px-6 py-10 mt-20">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        Catégorie : {params.slug}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jeuxFiltres.map((jeu) => (
          <JeuCard
            key={jeu.id}
            titre={jeu.titre}
            image={jeu.images}
            description={jeu.description}
            slug={jeu.slug}
          />
        ))}
      </div>
    </main>
  );
}
