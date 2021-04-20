import React, { useState, useEffect } from "react";
import SwipeCard from "./SwipeCard";
import Description from "./Description";

const SwipePage = () => {
  const [bachelors, setBachelors] = useState([]);
  const [active, setActive] = useState(0);
  const [swipe, setSwipe] = useState(null);

  console.log(swipe);

  // fetch bachelors
  const fetchBachelors = async () => {
    // const data = await fetch("/api/1/recent/?source_id=az-mcso", {
    await fetch("/api/1/search/?source_id=az-mcso&last_name=smith", {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((response) => response.json())
      // .then((response) => console.log(response.json())
      .then((response) => {
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
              <SwipeCard
                setSwipe={setSwipe}
                index={index}
                setActive={setActive}
                src={largeImg}
              />
            </div>
          );
        })}
      </div>

      <div style={{ zIndex: "5" }} className="py-4 flex justify-center">
        {swipe === "left" && (
          <button className="mr-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            Left😐
          </button>
        )}
        {swipe === "right" && (
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Right😍
          </button>
        )}
      </div>

      <Description data={bachelors[active] ? bachelors[active] : null} />
    </div>
  );
};

export default SwipePage;
