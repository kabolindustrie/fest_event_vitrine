import JeuCard from "../components/JeuCard";
import { jeuxGonflables } from "@/data/jeux";

export default function Home() {
  return (
    <>
      {/* VIDEO BANNIÈRE */}
      <div className="w-full overflow-hidden">
        <video
          className="w-full h-[400px] object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
      </div>

      {/* TITRE DE SECTION */}
      <section className="text-center mt-20">
        <h2 className="text-4xl font-bold text-gray-800">Nos structures disponibles</h2>
        <p className="text-gray-500 mt-2">Découvrez nos jeux, châteaux, toboggans et animations</p>
      </section>

      {/* CONTENU */}
      <main className="px-6 py-10 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {jeuxGonflables.map((jeu) => (
          <JeuCard
            key={jeu.id}
            titre={jeu.titre}
            image={jeu.images}
            description={jeu.description}
            slug={jeu.slug}
          />
        ))}
      </main>
    </>
  );
}
