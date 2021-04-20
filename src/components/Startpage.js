import React from "react";

const Startpage = (props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">
                Brand new app
              </p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Everything you
              <br className="hidden md:block" />
              imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                can be real
              </span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Look no further, the dating app for jailed inmates is here! If you
              are a regular go-getter or simply curious, why not give it a try,
              have a swipe or two!
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/felixgren"
              className="w-28 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://user-images.githubusercontent.com/33127919/115332962-1f2c5780-a199-11eb-92bb-7d2ceae53990.png"
                className="object-cover object-top w-full h-auto mx-auto border rounded-md"
                alt="felix github"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            <img
              className="object-cover"
              src="https://kitwind.io/assets/kometa/one-girl-phone.png"
              alt=""
            />
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32">
            <img
              className="object-cover"
              src="https://i.imgur.com/CXbWNYD.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <a
        href="/swipe"
        aria-label="Swipe"
        className="flex items-center justify-center text-lg w-30 h-15 md:py-2 p-1 mx-auto text-gray-900 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-md hover:shadow hover:scale-105 md:hover:scale-110"
      >
        <p className="mr-5">START SWIPING</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </a>
    </div>
  );
};

export default Startpage;
