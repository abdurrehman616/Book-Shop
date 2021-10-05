import React from "react";
import Head from "next/head";

export const BookType = () => {
  return (
    <div className="flex flex-col mb-16">
      <Head>
        <script
          src="https://kit.fontawesome.com/yourcode.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {/* Heading */}
      <div className="flex text-3xl text-bold justify-center mb-10 text-black">
        <span>Book Type</span>
      </div>

      {/* Icons */}
      <div className="flex-wrap flex gap-16 justify-center">
        <div className="flex flex-col ">
          <button className="btn btn-circle btn-lg">
            <i className="fad fa-child" />
          </button>
          <span className="text-center">Child</span>
        </div>
        <div className="flex flex-col ">
          <button className="btn btn-circle btn-lg">
            <i className="fad fa-atlas" />
          </button>
          <span className="text-center">History</span>
        </div>
        <div className="flex flex-col ">
          <button className="btn btn-circle btn-lg">
            <i className="fad fa-robot" />
          </button>
          <span className="text-center">Fiction</span>
        </div>
        <div className="flex flex-col ">
          <button className="btn btn-circle btn-lg">
            <i className="fad fa-ghost" />
          </button>
          <span className="text-center">Thiller</span>
        </div>
        <div className="flex flex-col ">
          <button className="btn btn-circle btn-lg">
            <i className="fad fa-heart" />
          </button>
          <span className="text-center">Romance</span>
        </div>
        <div className="flex flex-col ">
          <button className="btn btn-circle btn-lg">
            <i className="fad fa-yin-yang" />
          </button>
          <span className="text-center">Comic</span>
        </div>
      </div>
    </div>
  );
};
