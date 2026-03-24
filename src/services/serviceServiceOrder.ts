import { api } from "./api";
import type { ServiceOrder, NewServiceOrder } from "../types";

// Função para buscar todas as Ordens de Serviço (verbo http: (GET))
export async function getAllServiceOrders(): Promise<ServiceOrder[]> {
  const dados = await api.get("/service-orders");
  return dados.data?.data ?? dados.data;
}

// Função para criar uma nova Ordem de Serviço ( verbo http (POST))
/* essa função envia dados do formulário para o meu backend */
export async function createServiceOrder(
  data: NewServiceOrder,
): Promise<ServiceOrder> {
  /* esse data depois do endpoint informa o tipo de conteúdo que vamos enviar, não é necessário no get*/
  const dados = await api.post("/service-orders", data);
  return dados.data?.data ?? dados.data;
}
/* função para deletar os */
export async function deleteServiceOrder(id: number) {
  await api.delete(`/service-orders/${id}`);
}
