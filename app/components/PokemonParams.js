"use client"
import { useEffect } from "react"
import { useParams, useSearchParams } from "next/navigation"

const PokemonParams = ({ onGet }) => {
    const params = useParams();
    const searchParams = useSearchParams();

    const pkm = {
        id: parseInt(params.id),
        name: searchParams.get('name')
    };

    useEffect(() => {
        onGet(pkm);
    }, [pkm.id, pkm.name]);

    return null;
};

export default PokemonParams;