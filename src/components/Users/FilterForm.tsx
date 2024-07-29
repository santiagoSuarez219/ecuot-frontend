type FilterFormProps = {
  setSearchKeyWords: (value: string) => void;
};

export default function FilterForm({ setSearchKeyWords }: FilterFormProps) {
  return (
    <form className="w-full md:mt-6 rounded-lg md:p-6 p-4 bg-white">
      <div className="flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-6 lg:items-center">
        <div className="space-y-1">
          <label
            htmlFor="search"
            className="text-2xl font-semibold text-primary"
          >
            Buscar
          </label>
          <p className="hidden md:block text-md text-font-color leading-tight">
            Filtrar por un nombre, apellido o un usuario
          </p>
        </div>
        <input
          className="w-full rounded-md border px-3 py-2 lg:py-3 text-md text-font-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          placeholder="Buscar por nombre o descripcion..."
          type="search"
          id="search"
          onChange={(event) => setSearchKeyWords(event.target.value)}
        />
      </div>
      {/* <div className="w-full space-y-4 flex gap-6 items-center">
        <div className="space-y-1">
          <label
            htmlFor="search"
            className="text-2xl font-semibold text-primary"
          >
            Buscar
          </label>
          <p className="hidden md:block text-md text-font-color leading-tight">
            Filtrar por un nombre, apellido o un usuario
          </p>
        </div>
        <input
          className="w-full rounded-md border px-3 py-2 text-md text-font-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          placeholder="Buscar por nombre o descripcion..."
          type="search"
          id="search"
          onChange={(event) => setSearchKeyWords(event.target.value)}
        />
      </div> */}
    </form>
  );
}
