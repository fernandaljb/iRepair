import { type Client } from "../types/client";

// Definimos o que o componente recebe: o objeto setClientId e a função de deletar
interface ClientCardProps {
  client: Client;
  aoExcluir: (id: number) => void;
}

export function ClientCard({ client, aoExcluir }: ClientCardProps) {
  return (
    <div className="p-4 border-5 border-black  bg-white mb-4">
      <div className=" items-center mb-3">
        {/* Botão de Excluir (mesmo estilo do seu ServiceCard) */}
        <button
          onClick={() => aoExcluir(client.id)}
          className="text-red-600 font-bold cursor-pointer "
        >
          Excluir
        </button>

        <h3 className="font-bold">
          <span className="text-black">id:{client.id}</span>
          {client.name}
        </h3>
      </div>

      <div className="space-y-1">
        <p>
          <strong>E-mail: </strong>
          {client.email}
        </p>
        <p>
          <strong>Telefone: </strong>
          {client.phone}
        </p>
      </div>
    </div>
  );
}
