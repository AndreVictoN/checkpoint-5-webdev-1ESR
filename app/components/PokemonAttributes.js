import Capitalize from "../Utils/Methods";
import PokemonClass from "./PokemonClass";

const PokemonAttributes = ({ pkm, pokeData, router }) => {
    return(
        <>
            <p>[{pkm.id}] - <b>{pkm.name.toUpperCase()}</b></p>
            <p className="mt-4">Cor: {pokeData.color ? Capitalize(pokeData.color?.name) : ""}</p>
            <p>Egg Group: {pokeData.egg_groups?.[0] ? Capitalize(pokeData.egg_groups?.[0]?.name) : ""}</p>

            {pokeData.has_gender_differences ?
                (<p className="max-w-100">Descrição: {pokeData.flavor_text_entries ? pokeData.flavor_text_entries?.[0]?.flavor_text : ""}</p>) :
                (<p className="max-w-150">Descrição: {pokeData.flavor_text_entries ? pokeData.flavor_text_entries?.[0]?.flavor_text : ""}</p>)
            }


            <PokemonClass classCheck={pokeData.is_baby} classText="um bebê"/>
            <PokemonClass classCheck={pokeData.is_legendary} classText="LENDÁRIO"/>
            <PokemonClass classCheck={pokeData.is_mythical} classText="MÍTICO"/>

            <div className="flex items-center justify-center">
                <button onClick={() => router.back()} className="mt-30 w-20 bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded ">Voltar</button>
            </div>
        </>
    );
};

export default PokemonAttributes;