"use client";
import { useEffect, useState } from "react"

import api from "./API/api";
import PokeList from "./components/PokeList"

export default function Home() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    async function carregar() {
      const res = await api.get("generation/4/");
      setPokeData(res.data.pokemon_species);
    }

    try{
      carregar();
    } catch (e) {
      setError(`Erro ao coletar dados da API: ${e}`);
    }
  }, []);

  return (
    <div>
      <main className="flex flex-col justify-center items-center">
        <PokeList pokemon={pokeData} />
      </main>
    </div>
  );
}
