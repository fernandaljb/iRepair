import { Outlet } from "react-router-dom";
import { Header } from "./Header"; // Importa o SEU componente Header

export function MainLayout() {
  return (
    <div className="bg-black min-h-screen">
      {/* Aqui entra o seu Header que já tem os links de Início, setClientIds e Ordens */}
      <Header />

      <main className="p-6">
        {/* O Outlet é onde o conteúdo das páginas (Dashboard, setClientIds, etc) vai ser "injetado" */}
        <Outlet />
      </main>
    </div>
  );
}
