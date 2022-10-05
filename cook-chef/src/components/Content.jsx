import React from "react";
import "./Content.scss";
import { data } from "../data/recipes";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Content() {
  const [filter, setFilter] = useState("");
  const filterRecipeWithInput = (e) => {
    setFilter(e.target.value.trim().toLowerCase()); // La méthode JavaScript trim() permet de retirer les espaces au début et à la fin d'une chaîne de caractères
  };
  return (
    <main className="main flex-fill">
      <div className="main-container">
        <h1 className="py-5">Decouvrez nos recettes</h1>
        <SearchBar onInput={(e) => filterRecipeWithInput(e)} />
        <div className="main-items">
          {data
            .filter((r) => r.title.toLowerCase().startsWith(filter))
            .map((recipe, index) => {
              return (
                <Recipe key={index} title={recipe.title} image={recipe.img} />
              );
            })}
          {data.filter((r) => r.title.toLowerCase().startsWith(filter))
            .length === 0 && <p>Aucune recette trouvée</p>}
        </div>
      </div>
    </main>
  );
}

export default Content;
