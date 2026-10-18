"use client"
import Link from "next/link"
import Capitalize from "../Utils/Methods";

const Pokemon  = ({ pokemon, id }) => {
    const pkmName = Capitalize(pokemon.name);

    return(
        <li className="p-2 border-b flex justify-between">
            <p className="font-bold text-xl" key={id}>[{id}] {pkmName}</p>
            {/* link que leva para a página de detalhes do Pokémon e passa os parâmetros id, nome e url, com caracteres especiais codificados, pela url */}
            <Link href={`/details/${id}?name=${encodeURIComponent(pkmName)}&url=${encodeURIComponent(pokemon.url)}`} className="border-2 px-2 py-1 border-slate-700 rounded-2xl no-underline bg-slate-500 text-white font-bold transition duration-500 hover:text-amber-400 hover:scale-105">Ver detalhes</Link>
        </li>
    );
};

export default Pokemon;