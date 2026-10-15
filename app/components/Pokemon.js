"use client"
import Link from "next/link"
import Capitalize from "../Utils/Methods";

const Pokemon  = ({ pokemon, id }) => {
    const pkmName = Capitalize(pokemon.name);

    return(
        <li className="p-2 border-b flex justify-between">
            <p key={id}>[{id}] {pkmName}</p>
            {/* link que leva para a página de detalhes do Pokémon e passa os parâmetros id, nome e url, com caracteres especiais codificados, pela url */}
            <Link href={`/details/${id}?name=${encodeURIComponent(pkmName)}&url=${encodeURIComponent(pokemon.url)}`} className="text-blue-500 no-underline">Ver detalhes</Link>
        </li>
    );
};

export default Pokemon;