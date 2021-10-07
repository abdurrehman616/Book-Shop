import Head from "next/head";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const index = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axios.get('http//api/books/');
      console.log(data)
      setBooks(data);
    }

    fetchBooks();
  }, [])

  return (
    <div>
      <Head>
        <title>Browse Books</title>
      </Head>

      <main>
        <div className="mx-auto lg:flex justify-center grid grid-cols-2 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3">
          {books.map((book) => {
            return (
              <div
                key={book.id}
                className="card bordered  bg-light-brown lg:m-5 md:m-4"
              >
                <figure>
                  <img src={book.image} />
                </figure>
                <div className="card p-5">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{book.title}</h2>
                    <span className="pl-6 font-bold">${book.price}</span>
                  </div>
                  <p className="text-xs">{book.author}</p>
                  <div className="justify-between card-actions flex items-center">
                    <div className="flex gap-2 items-center">
                      <i className="fas fa-star text-warning" />
                      <span>{book.rating}</span>
                    </div>
                    <button className="btn btn-info">Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default index;
