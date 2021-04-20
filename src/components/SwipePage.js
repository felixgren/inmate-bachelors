import React, { useState, useEffect } from "react";
import SwipeCard from "./SwipeCard";
import Description from "./Description";

const SwipePage = () => {
  const [bachelors, setBachelors] = useState([]);
  const [active, setActive] = useState(0);

  // fetch bachelors
  const fetchBachelors = async () => {
    // const data = await fetch("/api/1/recent/?source_id=az-mcso", {
    fetch("/api/1/search/?source_id=az-mcso&last_name=smith", {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((response) => response.json())
      // .then((response) => console.log(response.json())
      .then((response) => {
        console.log(response);
        setBachelors(response.records);
      });
  };

  useEffect(() => {
    fetchBachelors();
  }, []);

  if (!bachelors || bachelors.length === 0) {
    return null;
  }

  return (
    <div
      className="pt-4 flex flex-col items-center justify-center mx-auto md:max-w-full lg:pt-32 md:px-0"
      style={{ minHeight: "100vh" }}
    >
      <div
        style={{
          width: "90vw",
          maxWidth: "252px",
          height: "340px",
        }}
      >
        {bachelors.map((bachelor, index) => {
          const largeImg = bachelor.mugshot.replace("small/", "");
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                zIndex: `calc(1000 - ${index})`,
              }}
            >
              <SwipeCard index={index} setActive={setActive} src={largeImg} />
            </div>
          );
        })}
      </div>

      {/* <div className="py-8 flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
          Button
        </button>
      </div> */}

      <Description data={bachelors[active] ? bachelors[active] : null} />
    </div>
  );
};

export default SwipePage;
