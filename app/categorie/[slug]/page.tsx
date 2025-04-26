import { notFound } from "next/navigation";
import { jeuxGonflables } from "@/data/jeux";
import JeuCard from "@/components/JeuCard";

interface CategoriePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const categories = ["chateau", "toboggan", "parcours", "animation", "snack"];
  return categories.map((slug) => ({ slug }));
}

export default function CategoriePage({ params }: CategoriePageProps) {
  const jeuxFiltres = jeuxGonflables.filter((jeu) =>
    jeu.categories.some((cat) => cat.toLowerCase() === params.slug.toLowerCase())
  );

  if (jeuxFiltres.length === 0) {
    return notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-10 capitalize text-center mt-20">
        {params.slug.replace("-", " ")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jeuxFiltres.map((jeu) => (
          <JeuCard
            key={jeu.id}
            titre={jeu.titre}
            image={jeu.images}
            description={jeu.descriptionCourte}
            slug={jeu.slug}
          />
        ))}
      </div>
    </main>
  );
}
