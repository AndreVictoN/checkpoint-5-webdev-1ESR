import Pokemon from "./Pokemon";

const PokeList = ({ pokemon }) => {
    return(
        <>
            <section className="p-3 flex flex-col text-center">
                <h1>SINNOH POKÉMON</h1>
                <ul>
                    {// verifica se exitem pokémon na lista e, caso existam, retorna seus respectivos componentes
                        pokemon.length === 0 ? (<li className="text-gray-500">Nenhum Pokémon Encontrado</li>) : 
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