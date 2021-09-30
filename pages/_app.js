import "../checkout.css"
import "tailwindcss/tailwind.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "/assets/styles/app.css";
import { Provider } from 'react-redux'

const bestSellers = [
  {
    id: 1,
    image:
      "https://www.getnow.pk/wp-content/uploads/2018/03/The-fault-in-our-stars-433x433.png",
    title: "The Fault in Our Stars",
    author: "John Green",
    rating: 4.5,
    price: 25,
  },
  {
    id: 2,
    image:
      "https://www.getnow.pk/wp-content/uploads/2018/03/Subtle-Art-Of-Not-Giving-A-FCk-433x433.png",
    title: "The Subtle Art of Not Giving a F*uk",
    author: "Mark Manson",
    rating: 4.5,
    price: 25,
  },
  {
    id: 3,
    image: "https://www.getnow.pk/wp-content/uploads/2018/03/7-433x433.png",
    title: "7 Habits of Highly Effective People",
    author: "Jim Collins",
    rating: 4.5,
    price: 25,
  },
  {
    id: 4,
    image:
      "https://www.getnow.pk/wp-content/uploads/2018/03/The-Deathly-Hallows-433x433.png",
    title: "Harry Potter & The Deathly Hallows",
    author: "JK Rolling ",
    rating: 4.5,
    price: 25,
  },
];




function MyApp({ Component, pageProps }) {

  return (

    <Provider store={store} >
      <div data-theme='light' className="bg-base-100 text-base-100">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
