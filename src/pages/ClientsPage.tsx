import { useState, useEffect } from "react";
import { ClientCard } from "../components/ClientCard";
import { NewClientForm } from "../components/NewClientForm";
import { type Client } from "../types/client";
/* estamos importando as funções assíncronas que eu criei no services */
import { getAllClients, deleteClient } from "../services/clientService";
/* criando estados para os dados e para o carregamento */
export function ClientsPage() {
  const [clients, set_clients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /* useEffect para o código deixar de ser estático */
  // pegamos o retorno da função e salvamos no estado
  useEffect(() => {
    // Criamos uma função interna assíncrona
    async function carregar() {
      try {
        const dados = await getAllClients(); // <--- O await entra aqui
        set_clients(dados);
      } catch (error) {
        console.error("Erro ao carregar");
      } finally {
        setIsLoading(false);
      }
    }

    carregar();
  }, []);

  //Função para adicionar o novo setClientId na tela
  const adicionarsetClientId = (novo: Client) => {
    set_clients([novo, ...clients]);
  };

  // Função para deletar o setClientId do banco e da tela
  const removersetClientId = async (id: number) => {
    if (!confirm("Remover setClientId?")) return;

    try {
      await deleteClient(id);
      set_clients(clients.filter((c) => c.id !== id));
    } catch (error) {
      alert("Erro");
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <main className="max-w-4xl mx-auto p-4">
        {/* Formulário para cadastrar novo setClientId */}
        <NewClientForm aoCadastrar={adicionarsetClientId} />

        {/* Título da seção */}
        <h2 className="text-white text-2xl font-bold mb-6 border-b border-white pb-2">
          Seus setClientIds
        </h2>

        {isLoading ? (
          <p className="text-white">Loading state...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* A correção principal está aqui: verificar se é Array antes do map */}
            {Array.isArray(clients) && clients.length > 0 ? (
              clients.map((client) => (
                <ClientCard
                  key={client.id}
                  client={client}
                  aoExcluir={removersetClientId}
                />
              ))
            ) : (
              <p className="text-gray-400">Nenhum setClientId encontrado.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
