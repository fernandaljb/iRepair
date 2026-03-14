import axios from "axios"; /* biblioteca axio = busca dados do servidor do cliente*/
//biblioteca de requisição http
export const api = axios.create({
  /* criamos a isntância (objeto) chamada api */
  baseURL: "https://trainee.fidelis.workers.dev/api",
  headers: {
    Authorization: "Bearer d49abdb7-b5f4-4fb6-96f6-9b8582ed6167",
    "Content-Type": "application/json",
  },
});
// porque criar um objeto api?
//se o endereço mudar não é necessário digitar a URL da api em todos os arquivos, só precisamos alterar no api
//headers: não precisamos escrever o token de novo nas outras páginas
