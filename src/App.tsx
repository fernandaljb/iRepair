import { useState } from "react";
import { Header } from "./components/Header";
import { NewServiceForm } from "./components/NewServiceForm";
import { ServiceCard } from "./components/ServiceCard";
// Sua interface aqui
export interface os {
  Cliente: string;
  Modelo: string;
  Defeito: string;
  Status: string;
}

export function App() {
  // criamos um estado na forma de lista vazia
  // [valor, funçãoParaMudarValor] = useState(valorInicial)
  const [lista_ordens_servico, set_lista_ordem_servico] = useState<os[]>([]);
  // criando a função que adiciona o item
  const adicionarOS = (novaOrdem: os) => {
    set_lista_ordem_servico([novaOrdem, ...lista_ordens_servico]);
  }; // a nova ordem entra primeiro na lista de ordens
  // ts criando a interface em html (jsx)
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        {/* aqui é onde conectamos o a função adicionar ao componente newServiceForm por meio da função conectar */}
        <NewServiceForm conectar={adicionarOS} />

        <div>
          {lista_ordens_servico.map((ordem_atual, id) => (
            <ServiceCard key={id} os={ordem_atual} />
          ))}
        </div>
      </main>
    </div>
  );
}
