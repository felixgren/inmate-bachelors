import React, { useState, useEffect } from "react";
import SwipeCard from "./SwipeCard";
import Test from "./Test";
import Description from "./Description";

const SwipePage = () => {
  const [bachelors, setBachelors] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [active, setActive] = useState(0);

  // fetch bachelors
  const fetchBachelors = async () => {
    const data = await fetch("/api/1/recent/?source_id=az-mcso", {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((response) => response.json())
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

  console.log(bachelors);

  console.log(active);

  return (
    <div className="flex flex-col items-center justify-center mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
      <div className="pt-4" style={{ marginBottom: "320px", width: "253px" }}>
        {bachelors.map((bachelor, index) => {
          const largeImg = bachelor.mugshot.replace("small/", "");
          return (
            <div
              key={index}
              style={{ position: "absolute", zIndex: `calc(1000 - ${index})` }}
            >
              <SwipeCard index={index} setActive={setActive} src={largeImg} />
            </div>
          );
        })}
      </div>

      <Description data={bachelors[active]} />

      <Test />
    </div>
  );
};

export default SwipePage;
