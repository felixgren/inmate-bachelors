import React, { useState, useEffect } from "react";
import Test from "./Test";
import TinderCard from "react-tinder-card";
import Header from "./Header";
import TestProfile2 from "./TestProfile2";
import Footer from "./Footer";

const App = () => {
  const [bachelors, setBachelors] = useState([""]);
  const [isLoaded, setLoaded] = useState(false);

  const fetchBachelors = async () => {
    // const data = await fetch("https://www.breakingbadapi.com/api/characters?name=walter")
    const data = await fetch("/api/1/recent/?source_id=az-mcso", {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      // const data = await fetch("https://www.jailbase.com/api/1/search/?source_id=az-mcso&last_name=smith")
      // .then(response => console.log(response))
      .then((response) => response.json())
      .then((response) => {
        console.log(response.records);
      });

    console.log(data);
    // setBachelors(result);
    // setLoaded(true);
  };

  useEffect(() => {
    fetchBachelors();
  }, []);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div>
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
      >
        <img
          src="https://imgstore.jailbase.com/arrested/az-mcso/2020-10-28/kalani-smith-t662411.pic1.jpg"
          className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
          alt=""
        />
      </TinderCard>

      <Header />
      <TestProfile2 />
      {/* <Test /> */}
      <Footer />
    </div>
  );
};

export default App;
