type FilterFormProps = {
  setSearchKeyWords: (value: string) => void;
};

export default function FilterForm({ setSearchKeyWords }: FilterFormProps) {
  return (
    <form className="w-full mt-6 grid grid-cols-1 rounded-lg items-center p-6 gap-6 justify-between bg-white">
      <div className="space-y-4 flex gap-6">
        <div className="space-y-1">
          <label
            htmlFor="search"
            className="text-2xl font-semibold text-primary"
          >
            Buscar
          </label>
          <p className="text-md text-font-color leading-tight">
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
      </div>
    </form>
  );
}
