import React from "react";

export const Banner = () => {
  return (
    <div className="lg:flex hidden bg-light-brown w-full h-96 items-center">
      {/* Text */}
      <div className="flex flex-col w-2/4 gap-6 p-5 lg:p-16">
        <span className="text-xl lg:text-3xl font-bold text-navy-blue">
          2021 Reading Challenge
        </span>
        <div className="flex flex-col text-navy-blue text-sm lg:text-base">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            similique ut cum commodi dolore voluptatibus modi error fugiat.
          </span>
        </div>

        {/* Button */}
        <div className="flex">
          <button className="btn btn-sm btn-info">Learn More</button>{" "}
        </div>

        {/* Soical Icon */}
        <div className="flex gap-1 lg:gap-6">
          <a href="#" className="btn btn-ghost">
            <svg
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              fill="indigo"
              stroke="currentColor"
              strokeWidth="0"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          <a href="#" className="btn btn-ghost">
            <svg
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              fill="deepskyblue"
              stroke="currentColor"
              strokeWidth="0"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>

          <a href="#" className="btn btn-ghost">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fb3958"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex justify-center h-2/4 items-center lg:h-auto">
        <img src="/book.png" alt="" />
      </div>
    </div>
  );
};
