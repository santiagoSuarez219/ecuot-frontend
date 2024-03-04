import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import RegistrarUsuario from "@/components/RegistrarUsuario";

export default function registrar() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [rol, setRol] = useState("usuario");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword, rol].includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    if (password !== repetirPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    if (password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/usuarios`,
        {
          nombre,
          apellido,
          email,
          password,
          rol,
        }
      );
      toast.success(data.msg);
      setNombre("");
      setApellido("");
      setEmail("");
      setPassword("");
      setRepetirPassword("");
      setRol("usuario");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <RegistrarUsuario
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
