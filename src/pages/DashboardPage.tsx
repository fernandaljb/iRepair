import { useState } from "react";
import { NewServiceForm } from "../components/NewServiceForm";
import { ServiceCard } from "../components/ServiceCard";
import type { ServiceOrder } from "../types";
import { getAllServiceOrders } from "../services/serviceServiceOrder";
import { useEffect } from "react";
import { deleteServiceOrder } from "../services/serviceServiceOrder";

export function DashboardPage() {
  // criamos um estado na forma de lista vazia
  // [valor, funçãoParaMudarValor] = useState(valorInicial)
  const [lista_ordens_servico, set_lista_ordem_servico] = useState<
    ServiceOrder[]
  >([]);

  useEffect(() => {
    getAllServiceOrders().then((dados) => {
      // Só salva se for uma lista real. Se for erro se torna lista vazia [].
      set_lista_ordem_servico(Array.isArray(dados) ? dados : []);
    });
  }, []);
  // criando a função que adiciona o item
  const adicionarOS = (novaOrdem: ServiceOrder) => {
    set_lista_ordem_servico([novaOrdem, ...lista_ordens_servico]);
  }; // a nova ordem entra primeiro na lista de ordens
  // ts criando a interface em html (jsx)
  // FUNÇÃO DE DELETAR:
  const removerOS = async (id: number) => {
    try {
      await deleteServiceOrder(id);
      set_lista_ordem_servico(
        lista_ordens_servico.filter((os) => os.id !== id),
      );
    } catch (error) {
      alert("Erro ao excluir ordem.");
    }
  };
  return (
    <div className="bg-black min-h-screen">
      <main>
        <NewServiceForm conectar={adicionarOS} />
        <div className="space-y-4 p-4">
          {lista_ordens_servico.map((ordem_atual) => (
            <ServiceCard
              key={ordem_atual.id}
              ServiceOrder={ordem_atual}
              aoExcluir={removerOS} // Passa a função para o Card
            />
          ))}
        </div>
      </main>
    </div>
  );
}
