import axios from "axios";

//URL FILMES EM CARTAZ:
//https://api.themoviedb.org/3/
//movie/now_playing &language=pt-BR &page=1

export const key = "5f0ed6a583e2ca7725693d5604f07ecd";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
