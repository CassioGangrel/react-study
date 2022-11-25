export type Pokemon = {
  id: number;
  name: string;
  species: string;
  img: string;
  hp: string;
  attack: string;
  defense: string;
  speed: string;
  type: string;
  weight: string;
  abilities1: string;
  abilities2: string;
};

export type PokemonListItem = Pick<Pokemon, "id" | "name" | "img">;
