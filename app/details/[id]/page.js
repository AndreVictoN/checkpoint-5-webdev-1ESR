"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

import api from "../../API/api";
import Sprites from "../../components/Sprites";
import PokemonParams from "../../components/PokemonParams";
import PokemonAttributes from "../../components/PokemonAttributes";

const PokemonPage = () => {
    // define o início de uma rota e todos os useStates que manipularão os parâmetros recebidos e os novos dados das novas requisições à API
    const router = useRouter();
    const [pkm, setPkm] = useState(null);
    const [pokeData, setPokeData] = useState({});
    const [spritesData, setSpritesData] = useState({});

    // useEffect que altera o título da página para o nome do pokémon
    useEffect(() => {
        if (!pkm?.name) return;

        document.title = pkm.name;
    }, [pkm?.name]);
    
    // useEffect que carrega os novos dados vindos da API após o carregamento dos parâmetros recebidos
    useEffect(() => {
        if (!pkm) return;

        // função que carrega os dados da espécie do pokémon e armazena em pokeData
        async function carregarPokemon() {
            try{
                const res = await api.get(`pokemon-species/${pkm.id}/`);
                setPokeData(res.data);
            } catch (e) {
                setError(`Erro ao coletar dados da API: ${e}`);
            }
        }

        // função que carrega os dados das sprites do pokémon e armazena em spritesData
        async function carregarSprites() {
            try{
                const res = await api.get(`pokemon/${pkm.id}/`);
                setSpritesData(res.data.sprites);
            } catch (e) {
                setError(`Erro ao coletar dados da API: ${e}`);
            }
        }

        carregarPokemon();
        carregarSprites();
    }, [pkm]);

    return(
        <main className="flex flex-col p-10 items-center min-h-dvh">
            {/* carrega os parâmetros recebidos */}
            <Suspense fallback={<p>Carregando Pokémon...</p>}>
                <PokemonParams onGet={setPkm} />
            </Suspense>

            {pkm &&
                <section className="border-2 min-h-100 min-w-200 grid grid-cols-2 grid-rows-1 gap-2">
                    {/* exibe as sprites masculinas e femininas (caso existam) do pokémon e suas versões shiny */}
                    <div className="grid grid-cols-2 grid-rows-2 border gap-1 justify-center items-center text-center pb-10">
                        <Sprites has_gender_differences={pokeData.has_gender_differences} spritesData={spritesData} />
                    </div>

                    {/* exibe as características do pokémon */}
                    <div className="flex flex-col border 1 p-2 text-left gap-1">
                        <PokemonAttributes pkm={pkm} pokeData={pokeData} router={router} />
                    </div>
                </section>
            }
        </main>
    );
};

export default PokemonPage;