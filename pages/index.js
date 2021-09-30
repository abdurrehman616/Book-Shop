import Head from "next/head";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { BookType } from "../components/BookType";
import { AnotherBanner } from "../components/AnotherBanner";
import { Footer } from "../components/Footer";
import BestSellers from "../components/BestSellers";


export default function Home() {

  return (

    <div className="flex flex-col min-h-screen bg-base-10 text-base-100">
      <Head>
        <title>Book Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center min-h-screen w-full">
          <Banner />

          {/* search Bar */}
          <div className="form-control ">
            <div className="relative flex p-2 lg:my-16 gap-4">
              <input
                type="text"
                placeholder="Book Name"
                className="w-full lg:pr-16 input  input-bordered"
              />
              <input
                type="text"
                placeholder="Author Name"
                className="w-full pr-16 input input-bordered"
              />
              <button className="rounded btn btn-info">go</button>
            </div>
          </div>

          {/* Book Type */}
          <BookType />

          {/* Another banner */}
          <AnotherBanner />

          {/* Best Seller */}
          <BestSellers />
        </div>
      </main>
    </div>

  );
}
