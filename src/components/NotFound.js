import React from "react";
import { navigate } from "@reach/router";
import goodlad from "../videos/goodlad404.mp4";

const NotFound = (props) => {
  return (
    <div class="bg-red-500 h-auto w-screen">
      <h1 class="font-bold text-center m-4 p-4 mt-12 text-white">
        THERE'S NOTHING HERE, 404!!!11
      </h1>
      <wrapper class="w-screen h-screen bg-blue-500">
        <video autoPlay loop>
          <source src={goodlad} type="video/mp4" />
        </video>
      </wrapper>
      <button onClick={() => navigate("/")} class="bg-white p-2 m-4">
        hhelp i wanna go back :(
      </button>
    </div>
  );
};

export default NotFound;
