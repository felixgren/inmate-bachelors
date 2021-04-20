import React, { useState, useEffect } from "react";
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
        className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
        alt="Mugshot"
      />
    </TinderCard>
  );
};

export default SwipeCard;
