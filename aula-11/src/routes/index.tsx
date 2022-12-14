import Home from "@/pages";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
import Pokedex from "@/pages/pokedex";
import ErrorPage from "@/pages/error";
import MainLayout from "@/layout/private";
import { fetchPokemon, fetchPokemons } from "@/services/fetch-pokemons";
import { apiPokemonToPokemonListItem } from "@/mappers";
import { PokemonShow } from "@/pages/pokedex/show";
import { BlankLayout } from "@/layout/blank";
import { Login, Register } from "@/pages/authentication";
import { UserPage } from "@/pages/users";
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
        children: [
          {
            path: ":pokemon",
            loader: ({ params }) => fetchPokemon(params.pokemon ?? ""),
            element: <PokemonShow></PokemonShow>,
          },
        ],
      },
      {
        path: "users",
        element: <UserPage />
      }
    ],
  },
  {
    path: "/publico",
    element: <BlankLayout />,
    children: [
      {
        path: "entrar",
        element: <Login/>
      },
      {
        path: "registrar",
        element: <Register/>
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
