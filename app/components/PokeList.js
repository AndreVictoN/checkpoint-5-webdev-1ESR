import Pokemon from "./Pokemon";

const PokeList = ({ pokemon }) => {
    return(
        <>
            <section className="p-3">
                <ul>
                    {pokemon.length === 0 ? (<li className="text-gray-500">Nenhum Pokémon Encontrado</li>) : 
                    (pokemon.map((pkm) => {
                        const id = pkm.url.split("pokemon-species/")[1].slice(0, -1);
                        return(<Pokemon key={id} pokemon={pkm} id={id} />);
                    }))}
                </ul>
            </section>
        </>
    );
};

export default PokeList;