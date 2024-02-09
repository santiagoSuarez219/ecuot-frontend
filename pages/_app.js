import "@/styles/globals.css";
import { EcuotProvider } from "../context/EcuotProvider";

export default function App({ Component, pageProps }) {
  return (
    <EcuotProvider>
      <Component {...pageProps} />
    </EcuotProvider>
  );
}
