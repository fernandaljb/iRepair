import { useEffect, useState } from "react";
import { getAllClients, deleteClient } from "../services/clientService";
import type { Client } from "../types";

export const ClientsPage = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getAllClients();
      setClients(data);
      setIsLoading(false);
    }
    load();
  }, []);

  async function handleDelete(id: number) {
    await deleteClient(id);
    setClients((prev) => prev.filter((c) => c.id !== id));
  }
  // se estiver carregando mosrta Carregando
  if (isLoading) return <p>Carregando...</p>;

  return (
    <ul>
      {clients.map((client) => (
        <li key={client.id}>
          {client.name}
          <button onClick={() => handleDelete(client.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};
