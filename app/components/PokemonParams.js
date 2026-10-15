"use client"
import { useEffect } from "react"
import { useParams, useSearchParams } from "next/navigation"

const PokemonParams = ({ onGet }) => {
    // define os useParams e useSearchParams para coletar os parâmetros recebidos pela url
    const params = useParams();
    const searchParams = useSearchParams();

    // cria o objeto do pokémon com seus parâmetros básicos
    const pkm = {
        id: parseInt(params.id),
        name: searchParams.get('name')
    };

    // useEffect que transfere o objeto do pokémon para a página de detalhes, assim que seus parâmetros alteram
    useEffect(() => {
        onGet(pkm);
    }, [pkm.id, pkm.name]);

    return null;
};

export default PokemonParams;