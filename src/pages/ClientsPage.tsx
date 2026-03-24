import { useState, useEffect } from "react";
import { ClientCard } from "../components/ClientCard";
import { NewClientForm } from "../components/NewClientForm";
import { type Client } from "../types/client";
import { getAllClients, deleteClient } from "../services/clientService";

export function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    try {
      const dados = await getAllClients();
      // Garante que o estado sempre receba um array para não quebrar o .map
      setClients(dados);
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
    } finally {
      setIsLoading(false);
    }
  }

  // Alterado de adicionarsetClientId para adicionarCliente
  const adicionarCliente = (novo: Client) => {
    setClients([novo, ...clients]);
  };

  // Alterado de removersetClientId para removerCliente
  const removerCliente = async (id: number) => {
    if (!confirm("Deseja realmente remover este cliente?")) return;

    try {
      await deleteClient(id);
      setClients(clients.filter((c) => c.id !== id));
    } catch (error) {
      alert("Erro ao excluir cliente.");
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <main className="max-w-4xl mx-auto p-4">
        {/* Ajustado o nome da prop da função */}
        <NewClientForm aoCadastrar={adicionarCliente} />

        <h2 className="text-white text-2xl font-bold mb-6 border-b border-white pb-2">
          Seus Clientes
        </h2>

        {isLoading ? (
          <p className="text-white">Carregando clientes...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clients && clients.length > 0 ? (
              clients.map((client) => (
                <ClientCard
                  key={client.id} // Fundamental para o erro de console sumir
                  client={client}
                  aoExcluir={removerCliente}
                />
              ))
            ) : (
              <p className="text-gray-400">Nenhum cliente encontrado.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
