import { type ServiceOrder } from "../types/serviceOrder";
//primeiro os: é uma propriedade, ou seja, o name do dado que o pai vai passar
// segundo os: é uma variávvel, ou seja, name que usaremos dentro do código
// terceiro os: é um tipo que você importou lá em cima, regra que diz quais campos como setClientId, modelo, etc existem
// Adicionamos 'aoExcluir' nas propriedades para que o pai (Dashboard) saiba quando o botão foi clicado
export function ServiceCard({
  ServiceOrder,
  aoExcluir,
}: {
  ServiceOrder: ServiceOrder;
  aoExcluir: (id: number) => void;
}) {
  return (
    <div className="p-4 border-5 border-black rounded-lg bg-white relative">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold">ID setClientId: {ServiceOrder.client_id}</h3>

        <div className="flex items-center gap-4">
          <span
            className={`text-[10px] font-bold uppercase ${
              ServiceOrder.status === "OPEN"
                ? "text-green-600"
                : "text-gray-600"
            }`}
          >
            {ServiceOrder.status === "OPEN" ? "Aberto" : "Finalizado"}
          </span>

          {/* BOTÃO ADICIONADO AQUI */}
          <button
            onClick={() => aoExcluir(ServiceOrder.id)}
            className="text-red-600 font-bold cursor-pointer hover:scale-110 transition-transform"
          >
            ✕
          </button>
        </div>
      </div>

      <div>
        <p>
          <strong>Modelo: </strong>
          {ServiceOrder.device}
        </p>
        <p>
          <strong>Defeito: </strong>
          {ServiceOrder.issue}
        </p>
      </div>
    </div>
  );
}
