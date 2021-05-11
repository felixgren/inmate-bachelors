import React from "react";

const Description = ({ data }) => {
  let name = "No more matches for you";
  let charges = [""];
  let details = [""];

  if (data) {
    name = data.name;
    charges = data.charges;
    details = data.details;
  }

  return (
    <section
      style={{ marginTop: "-130px" }}
      className="w-full text-gray-400 bg-gray-900 body-font"
    >
      <div className="container mx-auto flex px-5 py-36 pb-16 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl select-none text-2xl mb-4 font-medium text-white">
            {name}
          </h1>

          {details.length > 0 && (
            <ol className="pb-6">
              {details.map((detail, index) => {
                return (
                  <li key={index} className="text-left select-none text-sm py-1">
                    {detail[0]} - {detail[1]}
                  </li>
                );
              })}
            </ol>
          )}

          {charges.length > 0 && (
            <ol>
              {charges.map((charge, index) => {
                return (
                  <li key={index} className="text-left text-sm py-1">
                    {charge}
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
};

export default Description;
