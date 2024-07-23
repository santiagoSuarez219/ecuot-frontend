import axios from "axios";

type FormInterventionProps = {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
};

export default function ImageUpload({
  setImage,
  image,
}: FormInterventionProps) {
  const changeUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "x9o8xzzx");

    // TODO: CAMBIAR A VARIABLES DE ENTORNO

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/ecuot/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImage(response.data.secure_url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="space-y-2">
        <div className="flex flex-col items-center justify-center ">
          <label className="w-full flex flex-col items-center  relative rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer hover:opacity-70 transition p-10 border-neutral-300  justify-center  gap-2 text-neutral-600 bg-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="mt-2 text-base leading-normal">
              Sube una imagen
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={changeUploadImage}
              className="hidden"
            />
            {image && (
              <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center gap-2 bg-slate-100 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="mt-2 text-lg leading-normal">Imagen cargada</p>
              </div>
            )}
          </label>
        </div>
      </div>
    </>
  );
}
