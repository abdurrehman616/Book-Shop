import React from 'react'
import Link from "next/Link";

export const Subtotal = () => {
    return (
        <div className="grid grid-cols-2 lg:m-20 my-10 bg-light-brown rounded-xl">
            {/* left Side */}
            <div className="lg:p-2 lg:m-5">
                {/* Shopping Summary */}
                <div className="flex flex-col m-3">
                    <span className="text-xl font-bold p-3">Shopping Summary</span>
                    <span className="p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum possimus harum id! Voluptas, natus?</span>
                </div>
                {/* Have Coupon Button */}
                <div className="flex flex-col m-3">
                    <span className="font-bold p-3">Have a coupon code?</span>
                    <div className="form-control p-3">
                        <div className="relative">
                            <input type="text" placeholder="Coupon code.." className="w-full pr-16 input input-sm  lg:input-md input-ghost input-bordered" />
                            <button className="absolute top-0 right-0 rounded-l-none btn btn-sm lg:btn-md btn-info">go</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="p-5 m-5">
                <div className="flex justify-between font-bold p-2">
                    <div>Subtotal</div>
                    <div>$25</div>
                </div>
                <div className="flex justify-between font-bold p-2">
                    <div>Tax</div>
                    <div>$7.25</div>
                </div>
                <hr />
                <div className="flex justify-between font-bold p-2">
                    <div>Total</div>
                    <div>$32.25</div>
                </div>

                <div className="flex flex-col justify-center mt-20 cursor-pointer">
                    <button className="btn btn-info btn-xs md:btn-sm lg:btn-md xl:btn-lg">CHeckout</button>
                    <Link href="/"><span className="text-center p-2 text-xs lg:text-base">Continue Shopping</span></Link>
                </div>
            </div>
        </div>
    )
}
