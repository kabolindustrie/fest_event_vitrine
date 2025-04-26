import { JeuGonflable } from "@/app/interface/jeuxInterface";

export const jeuxGonflables: JeuGonflable[] = [
  {
    id: 1,
    titre: "Château Licorne",
    slug: "chateau-licorne",
    images: [
      "/images/chateaulicorne.png",
      "/images/chateaulicorne2.png",
      "/images/chateaulicorne3.png"
    ],
    descriptionCourte: "Un château coloré et féérique pour les enfants.",
    descriptionLongue:
      "Plongez dans un univers féerique avec ce château licorne aux couleurs pastel. Conçu pour stimuler l’imagination des plus petits, il offre un espace sécurisé pour sauter, courir et rêver en toute liberté.",
    tarif: 250,
    dimensions: "6 x 5 m",
    age: "à partir de 3 ans",
    categories: ["chateau", "enfant"],
  },
  {
    id: 2,
    titre: "Toboggan Médiéval",
    slug: "toboggan-medieval",
    images: [
      "/images/toboganmedieval.png",
      "/images/toboganmedieval2.png",
      "/images/toboganmedieval3.png"
    ],
    descriptionCourte: "Un grand toboggan à thème médiéval pour les aventuriers.",
    descriptionLongue:
      "Un toboggan gonflable au look médiéval, idéal pour les chevaliers en herbe. Avec sa glissade fluide et ses remparts stylisés, il transforme chaque descente en quête héroïque.",
    tarif: 280,
    dimensions: "10 x 4 m",
    age: "à partir de 5 ans",
    categories: ["toboggan", "chateau"],
  },
  {
    id: 3,
    titre: "Chevalier",
    slug: "chevalier",
    images: [
      "/images/chevalier.png",
      "/images/chevalier2.png"
    ],
    descriptionCourte: "Structure gonflable à thème chevaleresque.",
    descriptionLongue:
      "Cette structure à thème chevaleresque transporte les enfants au cœur d’un château fort. Parfaite pour les jeux de rôle, elle favorise l’imaginaire tout en offrant des activités physiques amusantes.",
    tarif: 240,
    dimensions: "5 x 5 m",
    age: "à partir de 4 ans",
    categories: ["chateau", "enfant"],
  },
  {
    id: 4,
    titre: "Combat Sumo",
    slug: "combat-sumo",
    images: [
      "/images/combatsumo.png",
      "/images/combatsumo2.png",
      "/images/combatsumo3.png"
    ],
    descriptionCourte: "Affrontez-vous dans des costumes de sumo géants.",
    descriptionLongue:
      "Enfilez un costume de sumo et entrez dans l’arène pour des combats hilarants en toute sécurité. Une animation idéale pour les ados et adultes en quête de fous rires.",
    tarif: 200,
    dimensions: "4 x 4 m",
    age: "à partir de 10 ans",
    categories: ["animation", "combat"],
  },
  {
    id: 5,
    titre: "Double Faucheuse",
    slug: "double-faucheuse",
    images: [
      "/images/double_Faucheuse.png",
      "/images/doublefaucheusse2.png"
    ],
    descriptionCourte: "Un jeu d'équilibre et de réflexes avec bras rotatifs.",
    descriptionLongue:
      "Un défi d’agilité et de rapidité où il faut esquiver les bras rotatifs pour rester debout. Parfait pour les compétitions entre amis ou collègues.",
    tarif: 350,
    dimensions: "10 x 10 m",
    age: "à partir de 8 ans",
    categories: ["animation", "combat"],
  },
  {
    id: 6,
    titre: "Puissance 4 Géant",
    slug: "puissance-4",
    images: [
      "/images/puissance4.png",
      "/images/puissance42.png",
      "/images/puissance43.png"
    ],
    descriptionCourte: "Le jeu classique en version XXL !",
    descriptionLongue:
      "Le célèbre jeu de stratégie en format géant. Accessible à tous les âges, il invite à la réflexion et à la convivialité dans un format XXL.",
    tarif: 120,
    dimensions: "2 x 1.5 m",
    age: "tout public",
    categories: ["animation", "jeux géants"],
  },
  {
    id: 7,
    titre: "Stand Popcorn",
    slug: "stand-popcorn",
    images: ["/images/machinepopcorn.jpg"],
    descriptionCourte: "Parfait pour une ambiance fête foraine !",
    descriptionLongue:
      "Une animation sucrée incontournable pour les fêtes. Ce stand diffuse l’odeur irrésistible du popcorn chaud et apporte une touche de fête foraine à votre événement.",
    tarif: 150,
    dimensions: "1.5 x 1 m",
    age: "tout public",
    categories: ["snack", "animation"],
  },
  {
    id: 8,
    titre: "Machine Barbe à Papa",
    slug: "machine-barbe-a-papa",
    images: ["/images/machinebarbeapapa.jpg"],
    descriptionCourte: "Pour régaler les petits comme les grands.",
    descriptionLongue:
      "Régalez vos invités avec de délicieuses barbes à papa colorées. Une animation qui ravira les enfants et fera retomber les adultes en enfance.",
    tarif: 150,
    dimensions: "1.5 x 1 m",
    age: "tout public",
    categories: ["snack", "animation"],
  },
  {
    id: 9,
    titre: "Le Château Enchanté",
    slug: "chateau-enchante",
    images: [
      "/images/lechateauenchanté.png",
      "/images/lechateauenchanté2.png",
      "/images/lechateauenchanté3.png"
    ],
    descriptionCourte: "Un château magique pour des moments féériques.",
    descriptionLongue:
      "Un château gonflable grand format aux détails magiques, parfait pour les princesses et les jeunes aventuriers. Un incontournable pour les anniversaires féeriques.",
    tarif: 260,
    dimensions: "7 x 6 m",
    age: "à partir de 3 ans",
    categories: ["chateau", "enfant"],
  },
  {
    id: 10,
    titre: "Tir au But",
    slug: "tir-au-but",
    images: [
      "/images/tiraubut.png",
      "/images/tiraubut2.png"
    ],
    descriptionCourte: "Montre ton talent de footballeur !",
    descriptionLongue:
      "Idéal pour tester son adresse et organiser des mini-tournois, ce jeu ravira les fans de football de tous âges. Visez juste et marquez des points !",
    tarif: 180,
    dimensions: "4 x 3 m",
    age: "à partir de 6 ans",
    categories: ["animation", "sport"],
  },
  {
    id: 11,
    titre: "Parcours Color",
    slug: "parcours-color",
    images: [
      "/images/parcourt_color.png",
      "/images/parcourscolor2.png",
      "/images/parcourscolor3.png",
      "/images/parcourscolor4.png"
    ],
    descriptionCourte: "Un parcours gonflable dynamique et coloré.",
    descriptionLongue:
      "Un parcours gonflable riche en couleurs, tunnels, obstacles et glissades. Idéal pour canaliser l’énergie débordante des enfants dans un cadre sécurisé et ludique.",
    tarif: 280,
    dimensions: "15 x 5 m",
    age: "à partir de 7 ans",
    categories: ["parcours", "toboggan"],
  },
  {
    id: 12,
    titre: "Toboggan Animaux",
    slug: "toboggan-animaux",
    images: ["/images/tobogananimaux.png"],
    descriptionCourte: "Toboggan animalier amusant et décoratif.",
    descriptionLongue:
      "Avec ses décors animaliers et ses couleurs vives, ce toboggan émerveille les plus petits tout en leur offrant un moment de glisse en toute sécurité.",
    tarif: 260,
    dimensions: "10 x 4 m",
    age: "à partir de 5 ans",
    categories: ["toboggan", "enfant"],
  },
  {
    id: 13,
    titre: "Gladiateur",
    slug: "gladiateur",
    images: [
      "/images/gladiateur.png",
      "/images/gladiateur2.png"
    ],
    descriptionCourte: "Affrontez-vous dans une arène gonflable.",
    descriptionLongue:
      "Deux participants s’affrontent sur une plateforme gonflable avec des bâtons en mousse dans une ambiance de duel. Sensations fortes et rires garantis.",
    tarif: 300,
    dimensions: "8 x 8 m",
    age: "à partir de 8 ans",
    categories: ["animation", "combat"],
  },
  {
    id: 14,
    titre: "Château Minions",
    slug: "chateauminions",
    images: [
      "/images/chateauminions.png",
      "/images/chateauminions3.png",
      "/images/chateauminions4.png"
    ],
    descriptionCourte: "Un château gonflable fun et coloré aux couleurs des célèbres Minions.",
    descriptionLongue:
      "Plongez dans l'univers déjanté des Minions avec ce château gonflable coloré ! Parfait pour les enfants, il offre un espace sécurisé pour sauter, courir et s'amuser avec leurs personnages préférés.",
    tarif: 270,
    dimensions: "6 x 5 m",
    age: "à partir de 3 ans",
    categories: ["chateau", "enfant"],
  },
  {
    id: 15,
    titre: "Toboggan Minions",
    slug: "tobogganminions",
    images: [
      "/images/tobogganminions.png",
      "/images/toboganminion2.png"
    ],
    descriptionCourte: "Un toboggan gonflable aux couleurs éclatantes des Minions pour des descentes amusantes.",
    descriptionLongue:
      "Découvrez des descentes endiablées avec ce toboggan gonflable Minions ! Sa glissade haute en couleurs garantit des moments de fun absolu pour les enfants dès 4 ans.",
    tarif: 290,
    dimensions: "10 x 4 m",
    age: "à partir de 4 ans",
    categories: ["toboggan", "enfant"],
  },
  {
    id: 16,
    titre: "Pierreafeu",
    slug: "pierreafeu",
    images: [
      "/images/pierreafeu.png",
      "/images/pierreafeu2.png",
      "/images/pierreafeu3.png"
    ],
    descriptionCourte: "Un module gonflable inspiré de l'univers des Pierrafeu pour les plus petits.",
    descriptionLongue:
      "Plongez dans l'âge de pierre avec cette structure gonflable aux couleurs vives et aux dessins inspirés des célèbres Pierrafeu ! Ce jeu est parfait pour les jeunes enfants qui souhaitent explorer, sauter et se faufiler dans un décor préhistorique amusant. Adapté aux anniversaires, événements familiaux et animations extérieures.",
    tarif: 240,
    dimensions: "6 x 4 m",
    age: "à partir de 3 ans",
    categories: ["chateau", "enfant"],
  }

];
