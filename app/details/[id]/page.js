"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

import api from "../../API/api";
import PokemonParams from "../../components/PokemonParams";

const PokemonPage = () => {
    const router = useRouter();
    const [pkm, setPkm] = useState(null);
    const [pokeData, setPokeData] = useState([]);
    const [spritesData, setSpritesData] = useState([]);

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
                    <div>
                        <div className="flex flex-col items-center border 1 p-2">
                            <img src={spritesData.front_default} className="size-50" />
                            <p>[{pkm.id}] - {pkm.name}</p>
                        </div>
                    </div>
                </section>
            }
        </main>
    );
};

export default PokemonPage;