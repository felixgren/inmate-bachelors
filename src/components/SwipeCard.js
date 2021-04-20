import React from "react";
import TinderCard from "react-tinder-card";

const SwipeCard = ({ src, index, setActive, setSwipe }) => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
    setSwipe(direction);
  };

  const onCardLeftScreen = (index) => {
    setActive(index + 1);
  };

  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen(index)}
    >
      <img
        src={src}
        className="rounded shadow-lg"
        alt="Mugshot"
        style={{ maxWidth: "252px", width: "80vw", height: "336px" }}
      />
    </TinderCard>
  );
};

export default SwipeCard;
