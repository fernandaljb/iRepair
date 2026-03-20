import { Link, useNavigate } from "react-router";
export function Header() {
  return (
    // p-5 é o padding que espaça os 4 lados dos elementos
    <header className="bg-black text-white p-5">
      {/* usando flexbox no logo*/}
      {/* flexbox: podemos colocar os elementos um do lado do outro e não um em cima do outro */}
      <div className=" flex justify-between items-center">
        {/* o logo agora é um link para o dashboard retirei o h1*/}
        <Link to="/" className="font-bold text-xl">
          iRepair
        </Link>
        {/* construindo o menu de navegação: */}
        {/* temos que ter a borda e a cor da borda */}
        <Link to="/" className="text-sm border border-gray-600">
          Início
        </Link>
        <Link to="/clients" className="text-sm border border-gray-600">
          Clientes
        </Link>
        <Link to="/ordens" className="text-sm border border-gray-600 ">
          Ordens
        </Link>
      </div>
    </header>
  );
}
