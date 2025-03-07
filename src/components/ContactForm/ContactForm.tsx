import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormType } from "../../types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const initialValues: ContactFormType = {
    user_name: "",
    user_email: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({ defaultValues: initialValues });

  const form = useRef<HTMLFormElement | null>(null);

  const onChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const sendEmail = () => {
    if (!isTermsAccepted) {
      toast.error("Debes aceptar los términos y condiciones");
      return;
    }

    if (!recaptchaValue) {
      toast.error("Debes completar el captcha");
      return;
    }

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_19odtfb",
        "template_a99ax3r",
        form.current,
        "IymxSgipHgUQboi6z"
      )
      .then(
        () => {
          toast.success("Mensaje enviado correctamente");
          reset();
          setIsTermsAccepted(false);
          setRecaptchaValue(null);
        },
        (error) => {
          toast.error("Error al enviar el mensaje");
          console.error(error);
        }
      );
  };

  return (
    <section className="mt-0 md:mt-12 lg:mt-4 mb-8 mx-4 lg:mx-12 md:py-14 py-6 px-4 lg:px-16 md:rounded-[60px] rounded-2xl relative overflow-hidden bg-primary">
      <h1 className="text-center text-4xl md:text-6xl text-white font-semibold mb-6 md:mb-16 bg-transparent z-10 relative">
        ¿Quieres conocer más sobre el proyecto?
      </h1>
      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        noValidate
        className="text-lg [&>div>div>label]:text-white"
      >
        <div className="flex gap-5">
          <div className="flex-1">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              className="w-full mt-2 p-3 border rounded-lg bg-[#FFFEFEE5]/90 focus:outline-none"
              type="text"
              placeholder="John Doe"
              {...register("user_name", { required: "El nombre es requerido" })}
            />
            {errors.user_name && (
              <span className="text-red-700 text-sm">
                {errors.user_name.message}
              </span>
            )}
          </div>
          <div className="flex-1">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              className="w-full mt-2 p-3 border rounded-lg bg-[#FFFEFEE5]/90 focus:outline-none"
              type="email"
              placeholder="Escribe aquí tu correo"
              {...register("user_email", {
                required: "El correo es requerido",
              })}
            />
            {errors.user_email && (
              <span className="text-red-700 text-sm">
                {errors.user_email.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="flex-1 mt-5">
            <label htmlFor="message">Déjanos tu pregunta o mensaje.</label>
            <textarea
              id="message"
              className="w-full h-44 mt-2 p-3 border rounded-lg bg-[#FFFEFEE5]/90 focus:outline-none"
              placeholder="Escribe aquí tu mensaje"
              {...register("message", { required: "El mensaje es requerido" })}
            />
            {errors.message && (
              <span className="text-red-700 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>
        </div>
        <div className="text-white [&>span]:text-white flex gap-2 items-center mt-5">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4"
            checked={isTermsAccepted}
            onChange={(e) => setIsTermsAccepted(e.target.checked)}
          />
          <label htmlFor="terms">
            Acepta los <span className="italic">términos y condiciones</span>
          </label>
        </div>
        <div className="flex justify-end gap-6">
          <ReCAPTCHA
            sitekey="6Le5uOwqAAAAAK_kL7COC26CvUoagEr46wR9xzIQ"
            onChange={onChange}
          />
          <button
            type="submit"
            className="bg-quaternary px-16 py-4 rounded-3xl text-lg text-white font-bold hover:scale-105 transition-all duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
