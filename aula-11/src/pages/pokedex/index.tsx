import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { PokemonListItem } from "@/types";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { useLoaderData, Outlet, useNavigate } from "react-router-dom";

const columns: GridColumns<PokemonListItem> = [
  {
    field: "id",
    headerName: "Number",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Pokemon",
    flex: 2,
  },
  {
    field: "img",
    headerName: "Image",
    flex: 2,
    renderCell: (params) => <img src={params.value}></img>,
  },
];

export default function Pokedex() {
  const [pokemonName, setPokemonName] = useState("");
  const nav = useNavigate()

  const pokemonList = useLoaderData() as PokemonListItem[];

  useEffect(() => {
    if (!pokemonName) return
    nav(pokemonName)
  }, [pokemonName])

  return (
    <Box
      sx={{
        padding: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
      }}
    >
      <Outlet />
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
        component="main"
        gap={5}
        className="App"
      >
        <Typography variant="h2">Pokemon</Typography>
        <Autocomplete
          id="select-pokemon"
          options={pokemonList}
          sx={{ width: 350 }}
          getOptionLabel={(option) => option.name}
          onChange={(_, newValue) => setPokemonName(newValue?.name || "")}
          renderInput={(params) => (
            <TextField {...params} label="Selecione seu pokemon" />
          )}
        />
        <Box height={631} width="100%">
          <DataGrid
            rows={pokemonList}
            getRowId={(row) => row.id}
            onRowClick={(p) => setPokemonName(p.row.name || "")}
            columns={columns}
            pageSize={10}
          />
        </Box>
      </Box>
    </Box>
  );
}
