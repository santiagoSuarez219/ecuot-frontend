export default function FilterForm() {
  return (
    <form className="urban-planning-interventions__form w-full mt-6 grid grid-cols-3 rounded-lg border shadow-sm items-center p-6 gap-6 justify-between">
      <div className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="search"
            className="text-2xl font-semibold text-primary"
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
        />
      </div>
      <div className="space-y-4 ">
        <div className="space-y-1">
          <label
            htmlFor="hierarchy"
            className="text-2xl font-semibold text-primary"
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
        >
          <option value="1">Jerarquia 1</option>
          <option value="2">Jerarquia 2</option>
          <option value="3">Jerarquia 3</option>
        </select>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="hierarchy"
            className="text-2xl font-semibold text-primary"
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
        >
          <option value="1">Sistema 1</option>
          <option value="2">Sistema 2</option>
          <option value="3">Sistema 3</option>
        </select>
      </div>
    </form>
  );
}
