import { BrowserRouter, Routes, Route } from "react-router";
import { DashboardPage } from "./pages/DashboardPage";
import { MainLayout } from "./components/layout";
import { ClientsPage } from "./pages/ClientsPage";

// No App.tsx, você aninha as rotas filhas dentro do layout
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/clients" element={<ClientsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
