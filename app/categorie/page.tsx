import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    nom: "Châteaux Gonflables",
    slug: "chateau",
    image: "/images/chateaucover.png",
  },
  {
    nom: "Toboggans",
    slug: "toboggan",
    image: "/images/toboggancover.png",
  },
  {
    nom: "Parcours Gonflables",
    slug: "parcours",
    image: "/images/parcourscover.png",
  },
  {
    nom: "Snacks",
    slug: "snack",
    image: "/images/snackcover.png",
  },
];

export default function CategoriesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-40">
      <h1 className="text-4xl font-bold text-center mb-12">Nos Catégories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/categorie/${cat.slug}`} className="relative group">
              <Image
                src={cat.image}
                alt={cat.nom}
                width={500}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h2 className="text-white text-2xl font-bold">{cat.nom}</h2>
              </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
