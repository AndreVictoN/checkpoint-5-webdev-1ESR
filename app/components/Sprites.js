const Sprites = ({ has_gender_differences, spritesData }) => {
    return(
        <>
            {has_gender_differences ? (
                    <>
                        <div className="text-center items-center">
                            <img src={spritesData.front_default} className="size-50" />
                            <p>MACHO</p>
                        </div>

                        <div className="text-center items-center">
                            <img src={spritesData.front_shiny} className="size-50" />
                            <p>MACHO ✨</p>
                        </div>

                        <div className="text-center items-center">
                            <img src={spritesData.front_female} className="size-50" />
                            <p>FÊMEA</p>
                        </div>

                        <div className="text-center items-center">
                            <img src={spritesData.front_shiny_female} className="size-50" />
                            <p>FÊMEA ✨</p>
                        </div>
                    </>
                ) : (
                    <>  
                        <img src={spritesData.front_default} className="size-80 row-span-2" />
                        <img src={spritesData.front_shiny} className="size-80 row-span-2" />
                        <p>MACHO/FÊMEA</p>
                        <p>MACHO/FÊMEA ✨</p>
                    </>
                )
            }
        </>
    );
}

export default Sprites;