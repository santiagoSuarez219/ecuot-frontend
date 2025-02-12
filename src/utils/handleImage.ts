const handleImage = (internalSystem: string) => {
  if (
    internalSystem === "Sistema de Espacio Público de esparcimiento y encuentro"
  ) {
    return "sistema_espacio_publico.avif";
  }
  if (
    internalSystem ===
    "Sistema de Movilidad (vías, caminos, ciclorutas, transporte)"
  ) {
    return "sistema_movilidad.avif";
  }
  // Se va modificar la imagen posteriormente
  if (internalSystem === "Sistema de Equipamientos") {
    return "sistema_equipamientos.avif";
  }
  if (
    internalSystem ===
    "Sistema de Servicios Públicos (domiciliarios y no domiciliarios)"
  ) {
    return "sistema_servicios_publicos.avif";
  }
  if (internalSystem === "Sistema Habitacional") {
    return "sistema_habitacional.avif";
  }
  if (internalSystem === "Sistema de Centralidades") {
    return "centralidades_urbanas.avif";
  }

  // TODO: No hay imagen sistema de patrimonio
  // if (internalSystem === "Sistema de Patrimonio") {
  //   return "logo.avif";
  // }
  return "logo.avif";
};

export default handleImage;
