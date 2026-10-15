const PokemonClass = ({ classCheck, classText }) => {
    return(
        <>
            {/* verifica se o pokémon tem alguma classificação especial e a exibe, caso tenha */}
            {classCheck &&
                <p className="mt-4">Este pokémon é <b>{classText}</b>!</p>
            }
        </>
    );
};

export default PokemonClass;