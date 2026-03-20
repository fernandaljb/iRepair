// formulário react para capturar dados
// usando props e state para controlar os inputs
import { useState, useEffect } from "react";
import { type ServiceOrder, type NewServiceOrder } from "../types";
import { type Client } from "../types";
import { createServiceOrder } from "../services/serviceServiceOrder";
import { getAllClients } from "../services/clientService";
// essa interface indica quais propriedades que o componente NewServiceForm recebe
interface NewServiceFormProps {
  conectar: (novaOS: ServiceOrder) => void;
}
// criamos 4 estados: cliente,Modelo,Defeito e status para receber dados do usuário
// os 3 primeiros começam com uma string vazia, já o status começa com aberto
// aqui começa a definição do componente
export function NewServiceForm({ conectar }: NewServiceFormProps) {
  // lógica do componente os estados e as funções
  const [listaClientes, setListaClientes] = useState<Client[]>([]);
  const [ClienteId, setClienteId] = useState("");
  const [Modelo, setModelo] = useState("");
  const [Defeito, setDefeito] = useState("");
  const [status, setstatus] = useState("Aberto");
  const [isLoading, setIsLoading] = useState(false);

  // Carregando os clientes obrigatórios para o Select
  useEffect(() => {
    async function carregarClientes() {
      try {
        const dados = await getAllClients();
        setListaClientes(dados);
      } catch (error) {
        console.error("Erro ao carregar clientes");
      }
    }
    carregarClientes();
  }, []);

  // função que envia dados de volta para o pai
  const EnviaDados = async () => {
    const novaOSData: NewServiceOrder = {
      client_id: Number(ClienteId),
      device: Modelo,
      issue: Defeito,
      status: status === "Aberto" ? "OPEN" : "FINISHED",
    };
    try {
      setIsLoading(true);
      const osSalvaNoBanco = await createServiceOrder(novaOSData);
      conectar(osSalvaNoBanco);

      /* limpar os campos */
      setClienteId("");
      setModelo("");
      setDefeito("");
      setstatus("Aberto");
    } catch (error) {
      alert("Erro ao criar Ordem de Serviço");
    } finally {
      setIsLoading(false);
    }
  };

  // aqui é  o visual do componente
  return (
    <div className="bg-black p-6 border border-white space-y-5">
      <h2 className="text-xl font-bold text-white">Nova Ordem</h2>

      {/* colocamos um select para listaClientes como foi pedido no notion*/}
      <select
        className="w-full border border-white text-white bg-black p-2"
        value={ClienteId}
        onChange={(e) => setClienteId(e.target.value)}
      >
        <option value="">Selecione o Cliente</option>
        {listaClientes?.map((cliente) => (
          <option key={cliente.id} value={cliente.id}>
            {cliente.name}
          </option>
        ))}
      </select>

      <input
        className="w-full border border-white text-white bg-black p-2"
        placeholder="Modelo"
        value={Modelo}
        onChange={(e) => setModelo(e.target.value)}
      />

      <textarea
        className="w-full border border-white text-white bg-black p-2"
        placeholder="Defeito"
        value={Defeito}
        onChange={(e) => setDefeito(e.target.value)}
      />

      <select
        className="cursor-pointer w-full border border-white text-white font-bold bg-black p-2"
        value={status}
        onChange={(e) => setstatus(e.target.value)}
      >
        <option value="Aberto">Aberto</option>
        <option value="Finalizado">Finalizado</option>
      </select>

      <button
        onClick={EnviaDados}
        disabled={isLoading}
        className="mx-auto block bg-white font-bold text-black border cursor-pointer p-2 px-4 hover:bg-gray-200 disabled:opacity-50"
      >
        {isLoading ? "Enviando..." : "Criar Ordem de Serviço"}
      </button>
    </div>
  );
}
