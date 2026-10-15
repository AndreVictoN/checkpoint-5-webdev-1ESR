"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

import api from "../../API/api";
import Capitalize from "../../Utils/Methods";
import Sprites from "../../components/Sprites";
import PokemonParams from "../../components/PokemonParams";

const PokemonPage = () => {
    const router = useRouter();
    const [pkm, setPkm] = useState(null);
    const [pokeData, setPokeData] = useState({});
    const [spritesData, setSpritesData] = useState({});

    useEffect(() => {
        if (!pkm) return;

        document.title = pkm.name;
    }, [pkm]);
    
    useEffect(() => {
        if (!pkm) return;

        async function carregarPokemon() {
            const res = await api.get(`pokemon-species/${pkm.id}/`);
            setPokeData(res.data);
        }

        async function carregarSprites() {
            const res = await api.get(`pokemon/${pkm.id}/`);
            console.log(res.data.sprites.front_default);
            setSpritesData(res.data.sprites);
        }
    
        try{
            carregarPokemon();
            carregarSprites();
        } catch (e) {
            setError(`Erro ao coletar dados da API: ${e}`);
        }
    }, [pkm]);

    return(
        <main className="flex flex-col p-10 items-center min-h-dvh">
            <Suspense fallback={<p>Carregando Pokémon...</p>}>
                <PokemonParams onGet={setPkm} />
            </Suspense>

            {pkm &&
                <section className="border-2 min-h-100 min-w-200 grid grid-cols-2 grid-rows-1 gap-2">
                    <div className="grid grid-cols-2 grid-rows-2 border gap-1 justify-center items-center text-center pb-10">
                        <Sprites has_gender_differences={pokeData.has_gender_differences} spritesData={spritesData} />
                    </div>

                    <div className="flex flex-col border 1 p-2 text-left gap-1">
                        <p>[{pkm.id}] - <b>{pkm.name.toUpperCase()}</b></p>
                        <p className="mt-4">Cor: {pokeData.color ? Capitalize(pokeData.color?.name) : ""}</p>
                        <p>Egg Group: {pokeData.egg_groups?.[0] ? Capitalize(pokeData.egg_groups?.[0]?.name) : ""}</p>

                        {pokeData.is_baby &&
                            <p className="mt-4">Este pokémon é um <b>bebê</b>!</p>
                        }

                        {pokeData.is_legendary &&
                            <p className="mt-4">Este pokémon é <b>LENDÁRIO</b>!</p>
                        }

                        {pokeData.is_mythical &&
                            <p className="mt-4">Este pokémon é <b>MÍTICO</b>!</p>
                        }
                    </div>
                </section>
            }
        </main>
    );
};

export default PokemonPage;