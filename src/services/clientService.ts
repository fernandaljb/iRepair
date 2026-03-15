import { api } from "./api";
import type { Client, NewClient } from "../types/client";

export async function getAllClients(): Promise<Client[]> {
  const response = await api.get<Client[]>("/clients");
  return response.data;
}

export async function createClient(data: NewClient): Promise<Client> {
  const response = await api.post<Client>("/clients", data);
  return response.data;
}

export async function deleteClient(id: number): Promise<void> {
  await api.delete(`/clients/${id}`);
}
