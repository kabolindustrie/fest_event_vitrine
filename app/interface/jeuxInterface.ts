// types/jeu.ts
export interface JeuGonflable {
  id: number;
  titre: string;
  slug: string;
  images: string[];
  descriptionCourte: string;
  descriptionLongue: string;
  tarif: number;
  dimensions: string;
  age: string;
  categories: string[];
}
