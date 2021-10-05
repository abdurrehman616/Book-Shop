const books = [
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

const BestSellers = () => {
  return (
    <div className="flex flex-col w-full lg:px-12 text-black">
      <div className="flex justify-between w-full p-10">
        {/* Heading */}
        <div className="text-3xl font-bold">
          <span>Best Sellers</span>
        </div>
        {/* View More Button */}
        <div>
          <a href="#">View More</a>
        </div>
      </div>
      <div className="mx-auto lg:flex justify-center grid grid-cols-2 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3">
        {books?.map((book) => {
          return (
            <div
              key={book.id}
              className="card bordered text-black bg-light-brown lg:m-5 md:m-4"
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
                  <button className="btn btn-info" onClick={() => (addToCart(book))}>Add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {

  const { books } = state
  return { books }
}

export default BestSellers