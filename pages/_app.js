import "../checkout.css"
import "tailwindcss/tailwind.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "/assets/styles/app.css";

function MyApp({ Component, pageProps }) {

  return (
    <div data-theme='light'  className="bg-base-100 text-base-100">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;