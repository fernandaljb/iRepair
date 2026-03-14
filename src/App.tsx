import { BrowserRouter, Routes, Route } from "react-router";
import { DashboardPage } from "./pages/DashboardPage";
import { ClientsPage } from "./pages/ClientePage";
import { MainLayout } from "./components/layout";

// No App.tsx, você aninha as rotas filhas dentro do layout
const App = () => {
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
