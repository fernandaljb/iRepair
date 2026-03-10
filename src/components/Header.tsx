export function Header() {
  return (
    // p-5 é o padding que espaça os 4 lados dos elementos
    <header className="bg-black text-white p-5">
      {/* usando flexbox no logo*/}
      {/* flexbox: podemos colocar os elementos um do lado do outro e não um em cima do outro */}
      <div className=" flex justify-between items-center">
        <h1 className="font-bold text-xl">iRepair</h1>
        {/* temos que ter a borda e a cor da borda */}
        <p className="text-sm border border-white">Início</p>
      </div>
    </header>
  );
}
