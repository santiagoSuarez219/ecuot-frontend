type FilterFormProps = {
  setSearchKeyWords: (value: string) => void;
  setSearchByHierarchy: (value: string) => void;
  setSearchBySystem: (value: string) => void;
};

// Opciones de jerarquía
const hierarchyOptions = [
  { value: "", label: "Todas las jerarquías" },
  { value: "6894c5d74cad0142c0ca580b", label: "Ciudad" },
  { value: "6894c5d74cad0142c0ca580c", label: "Barrial y Suburbano" },
  { value: "6894c5d74cad0142c0ca580d", label: "Metropolitano y Regional" },
  { value: "6894c5d74cad0142c0ca580e", label: "Zonal y Corregimental" },
];

// Opciones de sistema
const systemOptions = [
  { value: "", label: "Todos los sistemas" },
  { value: "67d9e3749f394f4c2c8bcf6b", label: "Sistema de Espacio Público de esparcimiento y encuentro" },
  { value: "67d9e3a79f394f4c2c8bcf6e", label: "Sistema de Movilidad (vías, caminos, ciclorutas, transporte)" },
  { value: "67d9e3b49f394f4c2c8bcf71", label: "Sistema de Equipamientos" },
  { value: "67d9e3cd9f394f4c2c8bcf74", label: "Sistema de Servicios Públicos (domiciliarios y no domiciliarios)" },
  { value: "67d9e3da9f394f4c2c8bcf77", label: "Sistema Habitacional" },
  { value: "67d9e3e79f394f4c2c8bcf7a", label: "Sistema de Centralidades" },
  { value: "67d9e3f29f394f4c2c8bcf7d", label: "Sistema de Patrimonio Cultural Inmueble" },
];

export default function FilterForm({
  setSearchKeyWords,
  setSearchByHierarchy,
  setSearchBySystem,
}: FilterFormProps) {
  return (
    <form className="w-full md:mt-6 grid grid-cols-1 lg:grid-cols-2 min-[1704px]:grid-cols-3 rounded-lg md:border shadow-sm items-center px-0 py-6 md:p-4 gap-6 justify-between">

      {/* Campo de búsqueda */}
      <div className="flex flex-col justify-between h-full mb-2">
        <div className="space-y-1">
          <label htmlFor="search" className="text-xl md:text-2xl font-semibold text-primary">
            Buscar
          </label>
          <p className="text-md text-font-color leading-tight">
            Filtrar por un nombre o una descripción
          </p>
        </div>
        <input
          id="search"
          type="search"
          placeholder="Buscar por nombre o descripción..."
          className="w-full rounded-md border px-3 py-2 text-md text-font-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          onChange={(event) => setSearchKeyWords(event.target.value)}
        />
      </div>

      {/* Jerarquía */}
      <div className="flex flex-col justify-between h-full mb-2">
        <div className="space-y-1">
          <label htmlFor="hierarchy" className="text-xl md:text-2xl font-semibold text-primary">
            Jerarquía
          </label>
          <p className="text-md text-font-color leading-tight">
            Organización y clasificación de las acciones urbanísticas según los niveles de importancia y función dentro del ordenamiento del territorio.
          </p>
        </div>
        <select
          id="hierarchy"
          name="hierarchy"
          className="w-full rounded-md border px-3 py-2 text-md text-font-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          onChange={(event) => setSearchByHierarchy(event.target.value)}
        >
          {hierarchyOptions.map(({ value, label }) => (
            <option key={value || "default-hierarchy"} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Sistema */}
      <div className="flex flex-col justify-between h-full mb-2">
        <div className="space-y-1">
          <label htmlFor="system" className="text-xl md:text-2xl font-semibold text-primary">
            Sistema
          </label>
          <p className="text-md text-font-color leading-tight">
            Elementos en torno a los cuales se organiza y estructura el territorio para favorecer su desarrollo.
          </p>
        </div>
        <select
          id="system"
          name="system"
          className="w-full rounded-md border px-3 py-2 text-md text-font-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          onChange={(event) => setSearchBySystem(event.target.value)}
        >
          {systemOptions.map(({ value, label }) => (
            <option key={value || "default-system"} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
