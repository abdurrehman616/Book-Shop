import Head from "next/head";
import React from "react";
import Checkout from "../../components/Checkout";

const index = () => {
  return (
    <div>
      <Head>
        <title>Checkout</title>
      </Head>

      <main>
        <Checkout />
      </main>
    </div>
  );
}

export default index;
