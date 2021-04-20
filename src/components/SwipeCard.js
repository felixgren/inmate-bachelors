import React from "react";
import TinderCard from "react-tinder-card";

const SwipeCard = ({ src, index, setActive }) => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (index) => {
    setActive(index + 1);
    console.log(index + " left the screen");
  };

  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen(index)}
      preventSwipe={["right", "left"]}
    >
      <img
        src={src}
        className="max-w-screen-sm mx-auto rounded shadow-lg md:w-auto lg:max-w-screen-md"
        alt="Mugshot"
        style={{ height: "336px" }}
      />
    </TinderCard>
  );
};

export default SwipeCard;
