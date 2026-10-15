"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

import PokemonParams from "../../components/PokemonParams";

const PokemonPage = () => {
    const router = useRouter();

    const [pkm, setPkm] = useState(null);

    useEffect(() => {
        if (!pkm) return;

        document.title = pkm.name;
    }, [pkm]);

    return(
        <main>
            <Suspense fallback={<p>Carregando Pokémon...</p>}>
                <PokemonParams onGet={setPkm} />
            </Suspense>

            {pkm &&
                <section className="">{pkm.name}</section>
            }
        </main>
    );
};

export default PokemonPage;