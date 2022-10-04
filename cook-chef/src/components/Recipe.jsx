import React from "react";
import "./Recipe.scss";

function Recipe() {
  return (
    <div className="recipe">
      <div className="recipe-image">
        <img
          src="https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza.jpg"
          alt="recipe"
        />
      </div>
      <div className="recipe-footer">
        <h3>Pizza Italienne</h3>
      </div>
    </div>
  );
}

export default Recipe;
