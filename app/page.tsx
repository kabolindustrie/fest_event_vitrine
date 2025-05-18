import JeuCard from "../components/JeuCard";
import { jeuxGonflables } from "@/data/jeux";

export default function Home() {
  return (
    <>
      {/* VIDEO BANNIÈRE */}
      <div className="w-full overflow-hidden">
        <video
          className="w-full h-[] md:h-[400px]  object-cover"
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
      <section className="text-center mt-20 px-4">
        <h2 className="text-4xl font-bold text-gray-800 animate-fade-in-up">
          Nos structures disponibles
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          <span className="text-pink-600 font-medium">FestiEvent</span> vous propose une
          <span className="text-purple-600 font-medium"> aventure gonflée de fun</span> ! <br />
          <span className="text-blue-600">Châteaux colorés</span>, <span className="text-yellow-600">parcours sportifs</span>,
          <span className="text-green-600"> toboggans géants</span>, jeux originaux et animations sucrées :
          tout pour émerveiller vos invités et réussir vos fêtes, anniversaires ou événements pro.
          <br />
          <span className="text-sm text-gray-500 italic block mt-4">
            Certaines images ont été générées via une intelligence artificielle, mais représentent fidèlement les structures réelles.
          </span>
        </p>
      </section>



      {/* CONTENU */}
      <main className="px-6 py-10 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8">
        {jeuxGonflables.map((jeu) => (
          <JeuCard
            key={jeu.id}
            titre={jeu.titre}
            image={jeu.images}
            description={jeu.descriptionCourte}
            slug={jeu.slug}
          />
        ))}
      </main>
    </>
  );
}
