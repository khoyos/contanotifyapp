import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  guardarConfiguracionCliente,
  guardarConfiguracionObligaciones,
  guardarObligacionCliente,
  obtenerConfiguracionObligaciones,
} from "../services/ConfiguracionService";
import { Save, Search, Edit, Trash2 } from "lucide-react";
import { Switch } from "@headlessui/react";
import { buscarClientePorIdentidad } from "../services/ClienteService";
import { obtenerEntidades, obtenerObligaciones, obtenerPagosPorRenta } from "../services/MasterService";
import TableObligaciones from "../components/Obligacion/TableObligaciones";
import { useNavigate } from "react-router-dom";

const ConfiguracionObligaciones = () => {
  const [obligacionesList, setObligacionesList] = useState([]);
  const [entidadesList, setEntidadesList] = useState([]);
  const [configuracionObligacionesList, setConfiguracionObligacionesList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filtros, setFiltros] = useState({
    identidadCliente: "",
    nombre: "",
    entidad: "",
    renta: "",
    pago: "",
    fecha: "",
  });

  const [pagos, setPagos] = useState([]);
  const [selectedRenta, setSelectedRenta] = useState("");
  const [selectedEntidad, setSelectedEntidad] = useState("");
  const [selectedPago, setSelectedPago] = useState("");
  const [errorPagos, setErrorPagos] = useState(false);
  const [loadingPagos, setLoadingPagos] = useState(false);
  const [entidadData, setEntidadData] = useState({ id: "", name: "" });
  const [rentaData, setRentaData] = useState({ id: "", name: "" });
  const [pagoData, setPagoData] = useState({ id: "", name: "" });
  const [cliente, setCliente] = useState("");

  const initialFormConfig = {
    tipoDocumento: "",
    documento: "",
    nombre: "",
    entidad: "",
    renta: "",
    pago: "",
    notificarCliente: false,
    notificarContador: false,
  };

  const [formConfig, setFormConfig] = useState(initialFormConfig);

  const limpiarFormulario = () => {
    setSelectedEntidad("");
    setSelectedRenta("");
    setSelectedPago("");
    setFormConfig(initialFormConfig);
  };


  const cargarObligaciones = async () => {
    try {
      const data = await obtenerObligaciones();
      setObligacionesList(data.obligaciones);
    } catch (error) {
      console.error("Error al cargar obligaciones:", error);
    }
  };

  const cargarEntidades = async () => {
    try {
      const data = await obtenerEntidades();
      setEntidadesList(data.entidades);
    } catch (error) {
      console.error("Error al cargar entidades:", error);
    }
  };

  useEffect(() => {
    cargarObligaciones();
    cargarEntidades();
    cargarConfiguracionObligaciones(0);
  }, []);

  // Al seleccionar renta, cargar pagos
  const handleRentaChange = async (e) => {
    const id = e.target.value;
    formConfig.renta = id;
    setSelectedRenta(id);
    setSelectedPago("");
    setPagos([]);
    setErrorPagos(false);

    if (!id) return;

    const selectedRentaObj = obligacionesList.find(r => r.id === e.target.value);

    console.log("selectedRentaObj", selectedRentaObj);

    setRentaData({ id: formConfig.renta, name: selectedRentaObj.name });

  };


  const handleEntidadChange = (e) => {
    const selectedId = e.target.value;
    const selectedEntidadObj = entidadesList.find((ent) => ent.id === selectedId);
    formConfig.entidad = selectedId;
    setSelectedEntidad(selectedId);
    if (selectedEntidadObj) {
      setEntidadData({
        id: selectedEntidadObj.id,
        name: selectedEntidadObj.name
      });

    }
  };

  const handleChangeConfig = (e) => {
    const { name, value, type, checked } = e.target;
    setFormConfig({
      ...formConfig,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Buscar cliente en backend
  const handleBuscarCliente = async () => {
    const { tipoDocumento, documento } = formConfig;
    if (!tipoDocumento || !documento) {
      toast.warn("Seleccione tipo de documento y escriba un número válido");
      return;
    }

    try {
      const response = await buscarClientePorIdentidad(
        tipoDocumento.toLowerCase(),
        documento
      );

      // Mapea los datos del backend a los campos del formulario
      if (response?.cliente) {
        setFormConfig((prev) => ({
          ...prev,
          nombre: response.cliente.nombre || "",
          telefono: response.cliente.telefono || "",
          email: response.cliente.email || "",
        }));
        setCliente(response.cliente.nombre || "");
        toast.success("Cliente encontrado correctamente");
      } else {
        toast.info("No se encontró el cliente con los datos ingresados");
      }
    } catch (error) {
      console.error("Error al buscar cliente:", error);
    }
  };

  // Permitir buscar con la tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleBuscarCliente();
    }
  };


  // Guardar configuración y luego obligación automáticamente
  const handleGuardarTodo = async () => {
    try {
      //Guardar configuración del cliente
      console.log("Guardando configuración del cliente...", formConfig);

      const request = {
        usuarioId: localStorage.getItem("userId"),
        usuarioClienteId: localStorage.getItem("clienteId"),
        entidadId: formConfig.entidad,
        notificarCliente: formConfig.notificarCliente,
        notificarContador: formConfig.notificarContador,
        notificarWhatsapp: false,
        notificarSms: false,
        notificarEmail: true
      }

      //console.log("Request configuración:", request);
      await guardarConfiguracionCliente(request);

      // Validar respuesta y obtener el ID del cliente configurado
      //console.log("Respuesta de configuración:", configResponse);

      toast.success("Configuración guardada correctamente");

      //Construir la obligación usando el ID obtenido
      const obligacionData = {
        usuarioClienteId: localStorage.getItem("clienteId"),
        obligacionRentaId: formConfig.renta, // suponiendo que selectedRenta representa la obligación seleccionada
      };

      //Guardar la obligación
      const obligacionResponse = await guardarObligacionCliente(obligacionData);
      console.log("obligacionResponse ==>", obligacionResponse);
      obligacionResponse.pagos.map(async (pago)=>{
        const configuracionObligacionData = {
          usuarioId: localStorage.getItem("userId"),
          clienteId: localStorage.getItem("clienteId"),
          identidadCliente: formConfig.documento,
          nombreCliente: cliente,
          entidad: entidadData.name,
          renta: rentaData.name,
          pago: pago.nombrePago,
          fecha: pago.fecha,
          obligacionClienteId: pago.obligacionClienteId
        };     
         await guardarConfiguracionObligaciones(configuracionObligacionData);
      });

      //console.log("Respuesta de configuracion obligacion data:", configuracionObligacionData);

      toast.success("Obligación registrada correctamente");

      cargarConfiguracionObligaciones(0);

      limpiarFormulario();

    } catch (error) {
      console.error("Error en el guardado combinado:", error);
      toast.error(
        error.response?.data?.message ||
        error.message ||
        "Error al guardar configuración y obligación"
      );
    }

    cargarConfiguracionObligaciones(0);

  };


  const cargarConfiguracionObligaciones = async (pagina = 0, filtrosActuales = filtros) => {
    try {
      setLoading(true);
      const data = await obtenerConfiguracionObligaciones(pagina, 5, filtrosActuales);
      setConfiguracionObligacionesList(data.content || []);
      setTotalPages(data.totalPages || 1);
      setPage(pagina);
    } catch (error) {
      console.error(error);
      toast.error("Error al cargar configuracion obligaciones");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este cliente?")) return;
    try {
      //await eliminarCliente(id);
      toast.success("Cliente eliminado correctamente");
      //cargarClientes(page);
    } catch (error) {
      toast.error("Error al eliminar cliente");
    }
  };

  const handleBuscar = (e) => {
    e.preventDefault();
    cargarConfiguracionObligaciones(0, filtros);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };


  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-6 px-3 sm:px-6">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-7xl p-5 sm:p-8">
        {/* --- Header Configuración --- */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Configuración de Obligaciones
          </h2>
          <button
            onClick={handleGuardarTodo}
            className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full sm:w-auto"
          >
            <Save size={18} /> Guardar
          </button>
        </div>

        <p className="text-gray-500 text-sm mb-5">
          Control de configuración de obligaciones a Clientes
        </p>

        {/* --- Filtros superiores --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
          {/* --- Tipo Documento --- */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Tipo Documento:
            </label>
            <select
              name="tipoDocumento"
              value={formConfig.tipoDocumento}
              onChange={handleChangeConfig}
              className="border rounded-md p-2 w-full"
            >
              <option value="">Seleccione...</option>
              <option value="NIT">NIT</option>
              <option value="CEDULA">Cédula</option>
            </select>
          </div>

          {/* --- Documento + Lupa --- */}
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-700 mb-1">Documento:</label>
            <div className="flex items-center gap-2">
              <input
                name="documento"
                value={formConfig.documento}
                onChange={handleChangeConfig}
                onKeyDown={handleKeyPress}
                className="border rounded-md p-2 w-full"
                placeholder="Ingrese documento"
              />
              <Search
                className="cursor-pointer text-gray-500 hover:text-gray-700"
                size={22}
                onClick={handleBuscarCliente}
              />
            </div>
          </div>

          {/* --- Nombre --- */}
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-700 mb-1">Nombre:</label>
            <input
              name="nombre"
              value={formConfig.nombre}
              onChange={handleChangeConfig}
              className="border rounded-md p-2 w-full"
              placeholder="Nombre del cliente"
              disabled={true}
            />
          </div>
        </div>

        {/* --- Segunda fila de filtros --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
          {/* --- Entidades --- */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Entidades:</label>
            <select
              name="entidad"
              value={selectedEntidad}
              onChange={handleEntidadChange}
              className="border rounded-md p-2 w-full"
            >
              <option value="">Seleccione...</option>
              {entidadesList.map((entidad, idx) => (
                <option key={idx} value={entidad.id} className="capitalize">
                  {entidad.name}
                </option>
              ))}
            </select>
          </div>

          {/* --- Rentas --- */}
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-700 mb-1">
              Rentas Obligaciones:
            </label>
            <select
              name="renta"
              value={selectedRenta}
              onChange={handleRentaChange}
              className="border rounded-md p-2 w-full"
            >
              <option value="">Seleccione...</option>
              {obligacionesList.map((obligacion, idx) => (
                <option key={idx} value={obligacion.id}>
                  {obligacion.name}
                </option>
              ))}
            </select>
          </div>


        </div>

        {/* --- Switches --- */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-10">
          <div className="flex items-center gap-3">
            <Switch
              checked={formConfig.notificarCliente}
              onChange={(value) =>
                setFormConfig({ ...formConfig, notificarCliente: value })
              }
              className={`${formConfig.notificarCliente ? "bg-blue-600" : "bg-gray-300"
                } relative inline-flex h-6 w-11 items-center rounded-full transition`}
            >
              <span
                className={`${formConfig.notificarCliente
                  ? "translate-x-6"
                  : "translate-x-1"
                  } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
            <span className="text-gray-700 text-sm">Notificar a Cliente</span>
          </div>

          <div className="flex items-center gap-3">
            <Switch
              checked={formConfig.notificarContador}
              onChange={(value) =>
                setFormConfig({ ...formConfig, notificarContador: value })
              }
              className={`${formConfig.notificarContador ? "bg-blue-600" : "bg-gray-300"
                } relative inline-flex h-6 w-11 items-center rounded-full transition`}
            >
              <span
                className={`${formConfig.notificarContador
                  ? "translate-x-6"
                  : "translate-x-1"
                  } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
            <span className="text-gray-700 text-sm">Notificar a Contador</span>
          </div>
        </div>

        {/* --- Tabla --- */}
        <div className="border-t pt-6 overflow-x-auto">
          <form onSubmit={handleBuscar} >
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-4 gap-3">
              <div className="flex flex-wrap gap-2 w-full">
                <input
                  type="text"
                  name="identidadCliente"
                  value={filtros.identidadCliente}
                  onChange={handleChange}
                  placeholder="Buscar por Identidad"
                  className="border rounded-md p-2 flex-1 min-w-[130px]"
                />

                <input
                  type="text"
                  name="nombre"
                  value={filtros.nombre}
                  onChange={handleChange}
                  placeholder="Buscar por Nombre"
                  className="border rounded-md p-2 flex-1 min-w-[130px]"
                />

                <input
                  type="text"
                  name="entidad"
                  value={filtros.entidad}
                  onChange={handleChange}
                  placeholder="Buscar por Entidad"
                  className="border rounded-md p-2 flex-1 min-w-[130px]"
                />

                <input
                  type="text"
                  name="renta"
                  value={filtros.renta}
                  onChange={handleChange}
                  placeholder="Buscar por Renta"
                  className="border rounded-md p-2 flex-1 min-w-[130px]"
                />

                <input
                  type="text"
                  name="pago"
                  value={filtros.pago}
                  onChange={handleChange}
                  placeholder="Buscar por Pago"
                  className="border rounded-md p-2 flex-1 min-w-[130px]"
                />

                <input
                  type="text"
                  name="fecha"
                  value={filtros.fecha}
                  onChange={handleChange}
                  placeholder="Fecha (YYYY-MM-DD)"
                  className="border rounded-md p-2 flex-1 min-w-[180px]"
                />
                <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-md p-2 transition">
                  <Search size={18} /> Buscar
                </button>
              </div>
            </div>
          </form>

          <TableObligaciones
            obligaciones={configuracionObligacionesList}
            loading={loading}
            page={page}
            totalPages={totalPages}
            onPrev={() => cargarConfiguracionObligaciones(page - 1, filtros)}
            onNext={() => cargarConfiguracionObligaciones(page + 1, filtros)}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );

};

export default ConfiguracionObligaciones;
