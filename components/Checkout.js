import React, { useState } from 'react'
import { Subtotal } from './Subtotal';
import { connect } from 'react-redux'

const Checkout = () => {
    const [quantity, setQuantity] = useState(0);
    const checkoutBooks = []
    return (
        <div className="text-black">
            <div className="lg:m-6 grid grid-cols-6 items-center shadow-lg rounded bg-light-brown lg:p-4 lg:text-lg">
                <div ></div>
                <div className="font-bold">Item</div>
                <div className="m-auto font-bold">Quantity</div>
                <div className="m-auto font-bold">Price</div>
                <div className="m-auto font-bold">Total Price</div>
                <div></div>
            </div>
            {
                checkoutBooks?.map(book => {
                    return (
                        <div key={book.id} className="lg:m-6 my-6 grid grid-cols-6 items-center shadow-lg rounded">

                            <img src={book.image} alt="Product Image" className="lg:w-4/5" />

                            <div className="flex flex-col">
                                <span className="font-bold">{book.title}</span>
                                <span className="text-xs">{book.author}</span>
                            </div>

                            <div className="custom-number-input ">
                                <div className="flex flex-row rounded-lg relative bg-transparent w-2/3 m-auto">
                                    <button onClick={() => { quantity && setQuantity(quantity - 1) }} data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                        <span className="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={quantity}></input>
                                    <button onClick={setQuantity(quantity + 1)} data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>

                            <div className="m-auto font-bold">${book.price}</div>

                            <div className="m-auto font-bold">$125</div>

                            <div className="m-auto"><button className="btn btn-error btn-xs md:btn-sm lg:btn-md">Delete</button></div>

                        </div>

                    );
                })
            }

            <Subtotal />
        </div>
    )
}
export default Checkout