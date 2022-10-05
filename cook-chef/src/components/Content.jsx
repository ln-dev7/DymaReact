import React from "react";
import "./Content.scss";
import { data } from "../data/recipes";
import Recipe from "./Recipe";

function Content() {
  return (
    <main className="main flex-fill">
      <div className="main-container">
        <h1 className="py-5">Decouvrez nos nouvelles recettes</h1>
        <div className="main-items">
          {data.map((recipe, index) => {
            return (
              <Recipe key={index} title={recipe.title} image={recipe.img} />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Content;
