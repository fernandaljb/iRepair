// formulário react para capturar dados
// usando props e state para controlar os inputs
import { useState } from "react";
import { type os } from "../App";
// essa interface indica quais propriedades que o componente NewServiceForm recebe
interface NewServiceFormProps {
  conectar: (novaOS: os) => void;
}
// criamos 4 estados: cliente,Modelo,Defeito e status para receber dados do usuário
// os 3 primeiros começam com uma string vazia, já o status começa com aberto
// aqui começa a definição do componente
export function NewServiceForm({ conectar }: NewServiceFormProps) {
  // lógica do componente os estados e as funções
  const [Cliente, setCliente] = useState("");
  const [Modelo, setModelo] = useState("");
  const [Defeito, setDefeito] = useState("");
  const [Status, setStatus] = useState("Aberto");
  // função que envia dados de volta para o pai
  const EnviaDados = () => {
    conectar({
      Cliente: Cliente,
      Modelo: Modelo,
      Defeito: Defeito,
      Status: Status,
    });
  };
  // aqui é  o visual do componente
  return (
    <div className="bg-black p-6  border border-white space-y-5">
      <h2 className="text-xl font-bold text-white">Nova Ordem</h2>

      <input
        className="w-full border border-white text-white"
        placeholder="Cliente"
        // usamos o onChange para alterar o valor ao digitar algo no input
        value={
          Cliente
        } /*diz ao input que o que deve aparecer na tela é o que está guardado no estado*/
        onChange={(e) =>
          setCliente(e.target.value)
        } /* após o evento de digitar o estado é atualizado */
      />

      <input
        className="w-full border border-white text-white"
        placeholder="Modelo"
        value={Modelo}
        onChange={(e) => setModelo(e.target.value)}
      />

      <textarea /* o input permite escrever apenas uma linha, o textarea várias */
        className="w-full border border-white text-white"
        placeholder="Defeito"
        value={Defeito}
        onChange={(e) => setDefeito(e.target.value)}
      />

      <select /* tag que abre uma caixa para slecionar aberto ou finalizado, não deixa o usuário escrever qualquer coisa */
        className="cursor-pointer w-full border border-white text-white font-bold"
        value={Status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Aberto">Aberto</option>
        <option value="Finalizado">Finalizado</option>
      </select>

      <button
        onClick={EnviaDados}
        // mx-auto block coloca o botão no meio de forma automática
        className="mx-auto block bg-white  font-bold text-black border cursor-pointer "
      >
        Criar Ordem de Serviço
      </button>
    </div>
  );
}
// termina o componente NewServiceForma
