import axios from "axios";

const requisicao = axios.create({
  baseURL: "https://localhost:44302/api/",
});

export default requisicao;
