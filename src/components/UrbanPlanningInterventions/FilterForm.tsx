type FilterFormProps = {
  setSearchKeyWords: (value: string) => void;
  setSearchByHierarchy: (value: string) => void;
  setSearchBySystem: (value: string) => void;
};

export default function FilterForm({
  setSearchKeyWords,
  setSearchByHierarchy,
  setSearchBySystem,
}: FilterFormProps) {
  return (
    <form className="w-full md:mt-6 grid grid-cols-1 md:grid-cols-3 rounded-lg md:border shadow-sm items-center px-0 py-6 md:p-6 gap-6 justify-between">
      <div className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="search"
            className="text-xl md:text-2xl font-semibold text-primary"
          >
            Buscar
          </label>
          <p className="text-md text-font-color leading-tight">
            Filtrar por un nombre o una descripcion
          </p>
        </div>
        <input
          className="w-full rounded-md border px-3 py-2 text-md text-font-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          placeholder="Buscar por nombre o descripcion..."
          type="search"
          id="search"
          onChange={(event) => setSearchKeyWords(event.target.value)}
        />
      </div>
      <div className="space-y-4 ">
        <div className="space-y-1">
          <label
            htmlFor="hierarchy"
            className="text-xl md:text-2xl font-semibold text-primary"
          >
            Jerarquia
          </label>
          <p className="text-md text-font-color leading-tight">
            Filtrar por una jerarquia
          </p>
        </div>
        <select
          name="hierarchy"
          id="hierarchy"
          className="w-full rounded-md border px-3 py-2 text-md text-font-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          onChange={(event) => setSearchByHierarchy(event.target.value)}
        >
          <option value=""> -- Seleccione -- </option>
          <option value="Ciudad">Ciudad</option>
          <option value="Barrial y Suburbano">Barrial y Suburbano</option>
          <option value="Metropolitano y Regional">
            Metropolitano y Regional
          </option>
          <option value="Zonal y Corregimental">Zonal y Corregimental</option>
        </select>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="hierarchy"
            className="text-xl md:text-2xl font-semibold text-primary"
          >
            Sistema
          </label>
          <p className="text-md text-font-color leading-tight">
            Filtrar por un sistema al que pertenece
          </p>
        </div>
        <select
          name="system"
          id="system"
          className="w-full rounded-md border px-3 py-2 text-md text-font-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          onChange={(event) => setSearchBySystem(event.target.value)}
        >
          <option value=""> -- Seleccione -- </option>
          <option value="Sistema de Espacio Público, Parques, Plazas, Plazoletas y Zonas Verdes">
            Sistema de Espacio Público, Parques, Plazas, Plazoletas y Zonas
            Verdes
          </option>
          <option value="Sistema Movilidad">Sistema Movilidad</option>
          <option value="Sistema Vial y de Transporte">
            {" "}
            Sistema Vial y de Transporte
          </option>
          <option value="Sistema de Equipamientos">
            Sistema de Equipamientos
          </option>
          <option value="Sistema de Servicios Publicos">
            Sistema de Servicios Publicos
          </option>
          <option value="Sistema Habitacional">Sistema Habitacional</option>
          <option value="Asentamientos Humanos y Sistema Habitacional">
            Asentamientos Humanos y Sistema Habitacional
          </option>
          <option value="Sistema de Centralidades">
            Sistema de Centralidades
          </option>
          <option value="Sistema de Centralidades">
            Sistema de Patrimonio
          </option>

          <option value="No Aplica">No Aplica</option>
        </select>
      </div>
    </form>
  );
}
