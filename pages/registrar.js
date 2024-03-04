import { useState } from "react";
import axios from "axios";
import RegistrarUsuario from "@/components/RegistrarUsuario";

export default function registrar() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [rol, setRol] = useState("usuario");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("entre");
    if ([nombre, email, password, repetirPassword, rol].includes("")) {
      setAlerta({
        error: true,
        msg: "Todos los campos son obligatorios",
      });
      return;
    }
    if (password !== repetirPassword) {
      setAlerta({
        error: true,
        msg: "Las contraseñas no son iguales",
      });
      return;
    }
    if (password.length < 6) {
      setAlerta({
        error: true,
        msg: "La contraseña debe tener al menos 6 caracteres",
      });
      return;
    }
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/usuarios`,
        {
          nombre,
          email,
          password,
          rol,
        }
      );
      setAlerta({
        error: false,
        msg: data.msg,
      });
      setNombre("");
      setEmail("");
      setPassword("");
      setRepetirPassword("");
      setRol("usuario");
    } catch (error) {
      setAlerta({
        error: true,
        msg: error.response.data.msg,
      });
    }
  };

  const { msg } = alerta;

  return (
    <RegistrarUsuario
      msg={msg}
      alerta={alerta}
      handleSubmit={handleSubmit}
      nombre={nombre}
      setNombre={setNombre}
      apellido={apellido}
      setApellido={setApellido}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      repetirPassword={repetirPassword}
      setRepetirPassword={setRepetirPassword}
      rol={rol}
      setRol={setRol}
    />
  );
}
