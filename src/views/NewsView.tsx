import FilterForm from "../components/News/FilterForm";
import NewFormAdd from "../components/News/NewFormAdd";
import CrudButton from "../components/CrudButton";
import Pagination from "../components/Pagination";
import CardNew from "../components/News/CardNew";

export default function NewsView() {
  return (
    <section className="layout__urban-planning-interventions mx-20">
      <h2 className="urban-planning-interventions__title text-[4.5rem] capitalize text-primary font-semibold">
        Acontecimientos noticiosos
      </h2>
      <p className="urban-planning-interventions__description text-lg text-font-color">
        Listado de todos los acontecimientos noticiosos asociados a una
        actuación urbanística
      </p>
      <div className="my-6 grid grid-cols-3 gap-6">
        <CrudButton
          icon="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          text="Agregar"
          color="primary"
          route="newNews"
        />
        <CrudButton
          icon="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          text="Editar"
          color="primary"
          route="editNews"
        />
        <CrudButton
          icon="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          text="Eliminar"
          color="primary"
          route="deleteNews"
        />
      </div>
      <FilterForm />
      <div className="urban-planning-interventions__list w-full mt-6 mb-12 grid grid-cols-1 gap-6">
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
      </div>
      <Pagination />
      <NewFormAdd />
    </section>
  );
}
