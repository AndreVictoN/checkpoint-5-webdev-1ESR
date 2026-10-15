const PokemonClass = ({ classCheck, classText }) => {
    return(
        <>
            {classCheck &&
                <p className="mt-4">Este pokémon é <b>{classText}</b>!</p>
            }
        </>
    );
};

export default PokemonClass;