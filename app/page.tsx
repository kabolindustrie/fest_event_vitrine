import JeuCard from "../components/JeuCard";
import { jeuxGonflables } from "@/data/jeux";

export default function Home() {
  return (
    <main className="px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {jeuxGonflables.map((jeu) => (
        <JeuCard
          key={jeu.id}
          titre={jeu.titre}
          image={jeu.image}
          description={jeu.description}
          slug={jeu.slug}
        />
      ))}
    </main>
  );
}
