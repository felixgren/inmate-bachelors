import React, { useState, useEffect } from "react";
import SwipeCard from "./SwipeCard";
import Description from "./Description";

const SwipePage = () => {
  const [bachelors, setBachelors] = useState([]);
  const [active, setActive] = useState(0);

  // fetch bachelors
  const fetchBachelors = async () => {
    // const data = await fetch("/api/1/recent/?source_id=az-mcso", {
    await fetch("/api/1/search/?source_id=az-mcso&last_name=smith", {
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
    <div
      className="flex flex-col items-center justify-center mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="pt-4"
        style={{
          width: "100%",
          maxWidth: "252px",
          height: "300px",
          // position: "relative",
          // marginBottom: "290px",
          // width: "253px",
        }}
      >
        {bachelors.map((bachelor, index) => {
          const largeImg = bachelor.mugshot.replace("small/", "");
          return (
            <div
              key={index}
              style={{
                // width: "100%",
                position: "absolute",
                zIndex: `calc(1000 - ${index})`,
              }}
            >
              <SwipeCard index={index} setActive={setActive} src={largeImg} />
            </div>
          );
        })}
      </div>

      <Description data={bachelors[active] ? bachelors[active] : null} />
    </div>
  );
};

export default SwipePage;
