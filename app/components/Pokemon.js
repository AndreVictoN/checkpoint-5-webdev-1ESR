"use client"
import Link from "next/link"

const Pokemon  = ({ pokemon, id }) => {
    const pkmName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return(
        <li className="p-2 border-b flex justify-between">
            <p key={id}>[{id}] {pkmName}</p>

            <Link href={`/details/${id}?name=${encodeURIComponent(pkmName)}&url=${encodeURIComponent(pokemon.url)}`} className="text-blue-500 no-underline">Ver detalhes</Link>
        </li>
    );
};

export default Pokemon;