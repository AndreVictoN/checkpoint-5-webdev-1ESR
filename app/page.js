"use client";
import { useEffect, useState } from "react"

import api from "./API/api";
import PokeList from "./components/PokeList"

export default function Home() {
  // define o useState que manipula os dados iniciais
  const [pokeData, setPokeData] = useState([]);

  // define o useEffect que carrega os dados após a montagem da página
  useEffect(() => {
    // carrega os dados da api PokéApi e armazena em pokeData
    async function carregar() {
      try{
        const res = await api.get("generation/4/");
        setPokeData(res.data.pokemon_species);
      } catch (e) {
        setError(`Erro ao coletar dados da API: ${e}`);
      }
    }
    
    carregar();
    document.title = "Sinnoh Pokémon"
  }, []);

  return (
    <div>
      <main className="flex flex-col justify-center items-center">
        <PokeList pokemon={pokeData} />
      </main>
    </div>
  );
}
