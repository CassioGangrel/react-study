import { Pokemon } from "../types";

type Response = { results: { name: string; url: string }[] };

export type ApiPokemon = Response['results'][0]

const baseURL = "https://pokeapi.co/api/v2/pokemon"

export const fetchPokemons = () => {
  const url = `${baseURL}?limit=100000&offset=0`;
  return fetch(url)
    .then((response) => response.json())
    .then((data: Response) => data.results);
};

export const fetchPokemon = (name: string) => {
  const url = `${baseURL}/${name}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data: any) => ({
      id: data.id,
      name: name,
      img: data.sprites.other["official-artwork"].front_default,
      abilities1: data.abilities[0].ability.name,
      abilities2: data.abilities[1].ability.name,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      species: data.species.name,
      type: `${data.types[0].type.name}/${data.types[1]?.type?.name || ''}`,
      weight: data.weight
    } as Pokemon));
}
