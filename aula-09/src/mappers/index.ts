import { ApiPokemon } from "../services/fetch-pokemons";
import { PokemonListItem } from "../types";

export function apiPokemonToPokemonListItem(
  pokemons: ApiPokemon[]
): PokemonListItem[] {
  return pokemons.map(({ name, url }, index) => ({
    name,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));
}
