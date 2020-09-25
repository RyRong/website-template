import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Side Projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="This Website"
              label="React"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Pong Game"
              label="HTML"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Counter"
              label="React"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
