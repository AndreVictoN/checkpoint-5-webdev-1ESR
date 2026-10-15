// função que transforma a primeira letra de qualquer string em maiúscula
const Capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Capitalize;