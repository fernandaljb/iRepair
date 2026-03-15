import { type ServiceOrder } from "../types/serviceOrder";
//primeiro os: é uma propriedade, ou seja, o nome do dado que o pai vai passar
// segundo os: é uma variávvel, ou seja, nome que usaremos dentro do código
// terceiro os: é um tipo que você importou lá em cima, regra que diz quais campos como cliente, modelo, etc existem
export function ServiceCard({ ServiceOrder }: { ServiceOrder: ServiceOrder }) {
  return (
    <div className="p-4 border-5 border-black rounded-lg bg-white">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold">{ServiceOrder.client_id}</h3>

        {/* fica verde se status aberto e cinza se não for, lógica condicional */}
        <span
          className={`text-[10px] font-bold uppercase ${
            ServiceOrder.status === "Aberto"
              ? "text-green-600"
              : "text-gray-600"
          }`}
        >
          {ServiceOrder.status}
        </span>
      </div>

      <div>
        <p>
          <strong>Modelo: </strong>
          {ServiceOrder.device}
        </p>
        <p>
          <strong>Defeito: </strong>
          {ServiceOrder.isue}
        </p>
      </div>
    </div>
  );
}
