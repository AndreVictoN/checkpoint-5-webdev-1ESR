import Capitalize from "../Utils/Methods";
import PokemonClass from "./PokemonClass";

const PokemonAttributes = ({ pkm, pokeData, typesData, router }) => {
    return(
        <>
            {/* verifica se as principais informações do pokémon já foram obtidas e as exibe */}
            <p className="text-2xl">[{pkm.id}] - <b>{pkm.name.toUpperCase()}</b> - {typesData?.[0] ? Capitalize(typesData?.[0]?.type?.name) : ""}
                {typesData?.[1] ? ", " + Capitalize(typesData?.[1]?.type?.name) : ""}</p>
            <p className="my-4 text-xl">Cor: {pokeData.color ? Capitalize(pokeData.color?.name) : ""}</p>
            <p className="text-lg">Egg Group: {pokeData.egg_groups?.[0] ? Capitalize(pokeData.egg_groups?.[0]?.name) : ""}</p>

            {/* verifica se há diferença de visual entre os pokémon de gênero masculino e feminino para alterar o tamanho do texto, que pode afetar as sprites */}
            {pokeData.has_gender_differences ?
                (<p className="max-w-100 mt-3 text-center text-lg">Descrição: {pokeData.flavor_text_entries ? pokeData.flavor_text_entries?.[0]?.flavor_text : ""}</p>) :
                (<p className="max-w-150 mt-3 text-center text-lg">Descrição: {pokeData.flavor_text_entries ? pokeData.flavor_text_entries?.[0]?.flavor_text : ""}</p>)
            }

            {/* verifica se o pokémon tem alguma classificação especial e a exibe, caso tenha */}
            <PokemonClass classCheck={pokeData.is_baby} classText="um bebê"/>
            <PokemonClass classCheck={pokeData.is_legendary} classText="LENDÁRIO"/>
            <PokemonClass classCheck={pokeData.is_mythical} classText="MÍTICO"/>
            
            {/* exibe o botão de voltar */}
            <div className="flex items-center justify-center">
                <button onClick={() => router.back()} className=" mt-2 w-20 bg-slate-500 hover:text-amber-400 transition duration-500 hover:scale-105 text-gray-900 px-4 py-2 rounded-2xl border border-slate-700">Voltar</button>
            </div>
        </>
    );
};

export default PokemonAttributes;