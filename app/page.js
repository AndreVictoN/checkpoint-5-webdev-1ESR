"use client";
import { useEffect, useState } from "react"

import api from "./API/api";

export default function Home() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    async function carregar() {
      const res = await api.get("generation/4/");
      console.log(JSON.stringify(res.data.pokemon_species));
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

      </main>
    </div>
  );
}
