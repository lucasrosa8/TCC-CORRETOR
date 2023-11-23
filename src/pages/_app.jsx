import { GlobalStyles } from "@styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
