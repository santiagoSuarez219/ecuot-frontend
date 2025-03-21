const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const handleDate = (date: string) => {
  const dateFormated = new Date(date);
  dateFormated.setDate(dateFormated.getDate() + 1);

  return `${dateFormated.getDate()} de ${
    months[dateFormated.getMonth()]
  } de ${dateFormated.getFullYear()}`;
};

export default handleDate;
