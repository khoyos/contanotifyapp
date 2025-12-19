import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";   
import ConfiguracionObligaciones from "./pages/ConfiguracionObligaciones";
import ClienteForm from "./components/cliente/ClienteForm";
import Register from "./pages/Register";
import MonitoreoObligaciones from "./pages/MonitoreoObligaciones";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />}>
            {/* Rutas hijas de /home (Outlet dentro de Home) */}
            <Route index element={<Dashboard />} /> 
            <Route path="clientes" element={<Clientes />} />
            <Route path="crear-cliente" element={<ClienteForm />} />
            <Route path="editar-cliente/:id" element={<ClienteForm />} />
            <Route path="crear-obligaciones" element={<ConfiguracionObligaciones />} />
            <Route path="monitoreo-obligaciones" element={<MonitoreoObligaciones />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </AuthProvider>
  );
}
