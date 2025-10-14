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
import { set } from "react-hook-form";
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

  const navigate = useNavigate();

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

    try {
      setLoadingPagos(true);
      const data = await obtenerPagosPorRenta(id);
      if (Array.isArray(data.pagos) && data.pagos.length > 0) {

        const selectedRentaObj = obligacionesList.find(r => r.id === e.target.value);

        setRentaData({
          id: formConfig.renta,
          name: selectedRentaObj.name
        });

        setPagos(data.pagos);
        setErrorPagos(false);
      } else {
        setPagos([]);
        setErrorPagos(true);
      }
    } catch (error) {
      setErrorPagos(true);
      setPagos([]);
    } finally {
      setLoadingPagos(false);
    }
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

  // Al cambiar el pago
  const handlePagoChange = (e) => {
    const selectedId = e.target.value;
    const selectedPagoObj = pagos.find((ent) => ent.id === selectedId);
    formConfig.pago = selectedId;
    setSelectedPago(selectedId);
    if (selectedPagoObj) {
      console.log("Pago seleccionado:", selectedPagoObj);
      setPagoData({
        id: selectedPagoObj.id,
        name: selectedPagoObj.nombre
      })
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

      console.log("Request configuración:", request);
      const configResponse = await guardarConfiguracionCliente(request);

      // Validar respuesta y obtener el ID del cliente configurado
      //console.log("Respuesta de configuración:", configResponse);

      toast.success("Configuración guardada correctamente");

      //Construir la obligación usando el ID obtenido
      const obligacionData = {
        usuarioClienteId: localStorage.getItem("clienteId"),
        pagoId: formConfig.pago, // suponiendo que selectedRenta representa la obligación seleccionada
      };

      //Guardar la obligación
      const obligacionResponse = await guardarObligacionCliente(obligacionData);
      //console.log("Respuesta de obligación:", obligacionResponse);

      const configuracionObligacionData = {
        usuarioId: localStorage.getItem("userId"),
        clienteId: localStorage.getItem("clienteId"),
        nombreCliente: cliente,
        entidad: entidadData.name,
        renta: rentaData.name,
        pago: pagoData.name,
        fecha: obligacionResponse.fecha
      };

      const configuracionObligacionesResponse = guardarConfiguracionObligaciones(configuracionObligacionData)
      console.log("Respuesta de configuracion obligacion data:", configuracionObligacionData);

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


  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-7xl p-8">
        {/* --- Header Configuración --- */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Configuración de Obligaciones
          </h2>
          <button
            onClick={handleGuardarTodo}
            className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <Save size={18} /> Guardar
          </button>
        </div>
        <p className="text-gray-500 text-sm mb-5">
          Control de configuración de obligaciones a Clientes
        </p>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
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
          <div className="col-span-2">
            <label className="block text-sm text-gray-700 mb-1">
              Documento:
            </label>
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
          <div className="col-span-2">
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


        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
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
                <option key={idx} value={entidad.id}>
                  {entidad.name}
                </option>
              ))}
            </select>
          </div>

          {/* --- Rentas --- */}
          <div className="col-span-2">
            <label className="block text-sm text-gray-700 mb-1">Rentas Obligaciones:</label>
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


          {/* --- Pagos --- */}
          <div className="col-span-2">
            <label className="block text-sm text-gray-700 mb-1">Pagos:</label>
            <select
              name="pago"
              value={selectedPago}
              onChange={handlePagoChange}
              className={`border rounded-md p-2 w-full ${errorPagos ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
              disabled={loadingPagos || !selectedRenta}
            >
              <option value="">
                {loadingPagos
                  ? "Cargando pagos..."
                  : errorPagos
                    ? "Sin resultados"
                    : "Seleccione..."}
              </option>

              {pagos.map((pago) => (
                <option key={pago.id} value={pago.id}>
                  {pago.nombre || pago.descripcion || pago.id}
                </option>
              ))}
            </select>

            {/* Mensaje de error */}
            {errorPagos && (
              <p className="text-red-600 text-sm mt-2">
                No se encontró ningún pago con la renta seleccionada.
              </p>
            )}
          </div>
        </div>

        {/* --- Switches --- */}
        <div className="flex gap-10 mb-10">
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
        <div className="border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2 w-full">
              <input
                placeholder="Nombre"
                className="border rounded-md p-2 w-1/4"
              />
              <select className="border rounded-md p-2 w-1/4">
                <option>Entidad</option>
              </select>
              <select className="border rounded-md p-2 w-1/4">
                <option>Renta</option>
              </select>
              <select className="border rounded-md p-2 w-1/4">
                <option>Pagos</option>
              </select>
              <input
                placeholder="Fecha (EJ: FEBRERO/06/2025)"
                className="border rounded-md p-2 w-1/3"
              />
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 rounded-md hover:bg-green-700 transition">
                <Search size={18} /> Buscar
              </button>
            </div>
          </div>

          <TableObligaciones
            obligaciones={configuracionObligacionesList}
            loading={loading}
            page={page}
            totalPages={totalPages}
            onPrev={() => cargarConfiguracionClientes(page - 1, filtros)}
            onNext={() => cargarConfiguracionClientes(page + 1, filtros)}
            onEdit={(id) => navigate(`/home/editar-obligacion/${id}`)}
            onDelete={handleDelete}
          />

        </div>
      </div>
    </div>
  );
};

export default ConfiguracionObligaciones;
