import { useEffect, useReducer } from "react";
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

import { getInterventions } from "../../api/InterventionAPI";
import { Intervention, NewsFormData } from "../../types";
import ImageUpload from "../ImageUpload";
import Loader from "../Loader/Loader";

type NewFormAddProps = {
  register: UseFormRegister<NewsFormData>;
  errors: FieldErrors<NewsFormData>;
  setValue: UseFormSetValue<NewsFormData>;
  getValues?: UseFormGetValues<NewsFormData>;
  interventionId?: string;
};

// Estado inicial para el reducer
const initialState = {
  image: "",
  selectedOption: "sameImage",
  selectedInterventionId: "",
  selectedIntervention: null as Intervention | null,
  flag: false,
};

// Acciones del reducer
type Action =
  | { type: "SET_IMAGE"; payload: string }
  | { type: "SET_SELECTED_OPTION"; payload: string }
  | { type: "SET_SELECTED_INTERVENTION_ID"; payload: string }
  | { type: "SET_SELECTED_INTERVENTION"; payload: Intervention | null }
  | { type: "SET_FLAG"; payload: boolean };

// Reducer para manejar el estado
function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "SET_SELECTED_OPTION":
      return { ...state, selectedOption: action.payload };
    case "SET_SELECTED_INTERVENTION_ID":
      return { ...state, selectedInterventionId: action.payload };
    case "SET_SELECTED_INTERVENTION":
      return { ...state, selectedIntervention: action.payload };
    case "SET_FLAG":
      return { ...state, flag: action.payload };
    default:
      return state;
  }
}

export default function NewFormAdd({
  errors,
  register,
  setValue,
  getValues,
  interventionId,
}: NewFormAddProps) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    selectedInterventionId: interventionId || "",
  });

  const {
    image,
    selectedOption,
    selectedInterventionId,
    selectedIntervention,
    flag,
  } = state;

  const {
    data: interventions,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["interventions"],
    queryFn: getInterventions,
  });

  useEffect(() => {
    if (interventions) {
      const intervention = interventions.find(
        (int) => int._id === selectedInterventionId
      );
      dispatch({
        type: "SET_SELECTED_INTERVENTION",
        payload: intervention || null,
      });
    }
  }, [interventions, selectedInterventionId]);

  useEffect(() => {
    if (getValues && selectedIntervention) {
      if (!flag) {
        const currentImage = getValues("image");
        if (currentImage === selectedIntervention.image) {
          dispatch({ type: "SET_FLAG", payload: true });
          dispatch({ type: "SET_SELECTED_OPTION", payload: "sameImage" });
        } else {
          dispatch({ type: "SET_SELECTED_OPTION", payload: "otherImage" });
        }
      }
    }
  }, [getValues, selectedIntervention, flag]);

  useEffect(() => {
    if (selectedOption === "sameImage" && selectedIntervention?.image) {
      setValue("image", selectedIntervention.image);
    } else if (selectedOption === "otherImage") {
      setValue("image", "");
    }
  }, [selectedOption, selectedIntervention, setValue]);

  if (isLoading) return <Loader />;
  if (isError) return <p>Ha ocurrido un error</p>;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="mb-2 space-y-2 flex-grow text-sm md:text-base">
          <label htmlFor="newsName" className="font-medium">
            Titular de la noticia
          </label>
          <input
            id="newsName"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.newsName
                ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                : ""
            }`}
            type="text"
            placeholder={
              errors.newsName
                ? errors.newsName.message
                : "Titular de la noticia"
            }
            {...register("newsName", {
              required: "Este campo es obligatorio",
            })}
          />
        </div>
        <div className="mb-2 space-y-2 flex-grow text-sm md:text-base">
          <label htmlFor="newsDate" className="font-medium">
            Fecha de la noticia
          </label>
          <input
            id="newsDate"
            className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
              errors.newsDate
                ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
                : ""
            }`}
            type="date"
            {...register("newsDate", {
              required: "Este campo es obligatorio",
            })}
          />
        </div>
      </div>
      <div className="mb-2 space-y-2 text-sm md:text-base">
        <label htmlFor="description" className="font-medium">
          Descripción
        </label>
        <textarea
          id="description"
          className={`w-full h-32 mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
            errors.description
              ? "border-red-500 placeholder:text-red-500 focus:ring-red-500"
              : ""
          }`}
          placeholder={
            errors.description
              ? errors.description.message
              : "Descripción de la noticia"
          }
          {...register("description", {
            required: "La descripcion es obligatoria",
          })}
        />
      </div>
      <div className="mb-2 space-y-2 flex-grow">
        <label htmlFor="intervention" className="font-medium">
          Actuación urbanística relacionada
        </label>
        <select
          id="intervention"
          className={`w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
            errors.intervention ? "border-red-500 focus:ring-red-500 " : ""
          }`}
          {...register("intervention", {
            required: "Este campo es obligatorio",
          })}
          onChange={(e) =>
            dispatch({
              type: "SET_SELECTED_INTERVENTION_ID",
              payload: e.target.value,
            })
          }
        >
          <option value="">Seleccione una opción</option>
          {interventions?.map((intervention) => (
            <option key={intervention._id} value={intervention._id}>
              {intervention.interventionName}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2 space-y-2 flex-grow gap-2 md:gap-4 text-sm md:text-base">
        <div className="flex justify-between">
          <label htmlFor="image" className="font-medium">
            Imagen
          </label>
          <a
            href="https://imgto.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary border-b border-primary"
          >
            Optimizador de imágenes
          </a>
        </div>
        <fieldset className="w-full mb-4">
          <legend>Seleccione una opción:</legend>
          <div className="flex gap-6 items-center [&>div]:flex [&>div]:gap-2">
            <div>
              <input
                type="radio"
                id="sameImage"
                name="imageOption"
                value="sameImage"
                checked={selectedOption === "sameImage"}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SELECTED_OPTION",
                    payload: e.target.value,
                  })
                }
              />
              <label htmlFor="sameImage">
                Utilizar imagen de la actuación urbanística
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="otherImage"
                name="imageOption"
                value="otherImage"
                checked={selectedOption === "otherImage"}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SELECTED_OPTION",
                    payload: e.target.value,
                  })
                }
              />
              <label htmlFor="otherImage">Utilizar nueva imagen</label>
            </div>
          </div>
        </fieldset>
        <input
          id="image"
          className={`${
            selectedOption === "sameImage" ? "hidden" : ""
          } w-full mt-2 p-3 border border-primary rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors `}
          type="text"
          placeholder={"URL de la imagen"}
          {...register("image")}
        />
      </div>
      {selectedOption === "sameImage" && selectedIntervention?.image && (
        <div className="w-full h-56 bg-slate-100 border-neutral-300 justify-center items-center flex">
          <figure className="h-full aspect-square bg-center bg-cover">
            <img
              src={selectedIntervention.image}
              alt={`Imagen de ${selectedIntervention.interventionName}`}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      )}
      {selectedOption === "otherImage" && (
        <>
          <div className="mb-2 space-y-2">
            <p className="w-full mt-2 p-3 border border-neutral-300 rounded-lg bg-gray-50 text-sm md:text-base">
              {image ? image : "Carga una imagen"}
            </p>
          </div>
          <ImageUpload
            image={image}
            setImage={(img) => dispatch({ type: "SET_IMAGE", payload: img })}
          />
        </>
      )}
    </>
  );
}
