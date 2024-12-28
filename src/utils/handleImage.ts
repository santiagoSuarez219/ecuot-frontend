const handleImage = (internalSystem: string) => {
  if (
    internalSystem ===
    "Sistema de Espacio Público, Parques, Plazas, Plazoletas y Zonas Verdes"
  ) {
    return "sistema_espacio_publico.avif";
  }
  if (internalSystem === "Sistema Movilidad") {
    return "sistema_movilidad.avif";
  }
  if (internalSystem === "Sistema Vial y de Transporte") {
    return "sistema_vial.avif";
  }
  if (internalSystem === "Sistema de Equipamientos") {
    return "sistema_equipamientos.avif";
  }
  if (internalSystem === "Sistema de Servicios Publicos") {
    return "sistema_servicios_publicos.avif";
  }
  if (
    internalSystem === "Sistema Habitacional" ||
    internalSystem === "Asentamientos Humanos y Sistema Habitacional"
  ) {
    return "sistema_habitacional.avif";
  }
  if (internalSystem === "Sistema de Centralidades") {
    return "centralidades_urbanas.avif";
  }
  if (internalSystem === "Sistema Habitacional") {
    return "sistema_habitacional.avif";
  }
  // TODO: verificar sistema de Patrimonio
  if (internalSystem === "Sistema de Patrimonio") {
    return "logo.avif";
  }
  return "logo.avif";
};

export default handleImage;
