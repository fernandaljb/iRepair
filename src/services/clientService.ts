/* nesse arquivo (clientService) apenas definimos as funções fazemos a requisição e retornamos os dados */
/* o tratamento de erros (try e catch) será feito nos componentes que chamam essa função */
import { api } from "./api";
import type { Client, NewClient } from "../types/client";
/* função que le e busca os dados dos setClientIds já disponíveis no servidor */

export async function getAllClients(): Promise<Client[]> {
  try {
    const dados = await api.get("/clients");
    // Verifica se os dados realmente são um array antes de retornar
    return dados.data.data;
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    return [];
  }
}

/* função que le os dados que são digitados pelos usuários e envia ao servidor para criar novos setClientIds */
export const createClient = async (data: NewClient): Promise<Client> => {
  const dados = await api.post("/clients", data);
  // API retorna em dados.data.data (
  // usado em getAllClients), então normaliza aqui também.
  return dados.data?.data ?? dados.data;
};

/* função para deletar um setClientId pelo id*/
export async function deleteClient(id: number): Promise<void> {
  await api.delete(`/clients/${id}`);
}
