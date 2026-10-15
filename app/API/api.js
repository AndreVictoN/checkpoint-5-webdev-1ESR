import axios from "axios";

// Inicializa a API PokéApi com axios
const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 30000
});

export default api;