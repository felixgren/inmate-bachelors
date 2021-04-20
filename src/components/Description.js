import React from "react";

const Description = ({ data }) => {
  const { name, charges } = data;
  console.log(data);
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {name}
          </h1>

          <ul>
            {charges.map((charge, index) => {
              return <li>{charge}</li>;
            })}
          </ul>

          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
