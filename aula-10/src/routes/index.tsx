import Home from "@/pages";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
import Pokedex from "@/pages/pokedex";
import ErrorPage from "@/pages/error";
import MainLayout from "@/layout/main";
import { fetchPokemon, fetchPokemons } from "@/services/fetch-pokemons";
import { apiPokemonToPokemonListItem } from "@/mappers";
import { PokemonShow } from "@/pages/pokedex/show";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "pokemon",
        element: <Pokedex></Pokedex>,
        loader: () => fetchPokemons().then(apiPokemonToPokemonListItem),
        children: [{
          path: ":pokemon",
          loader: ({ params }) => fetchPokemon(params.pokemon ?? ''),
          element: <PokemonShow></PokemonShow>
        }]
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
