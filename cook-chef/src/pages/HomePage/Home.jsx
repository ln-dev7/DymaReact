import React from "react";
import "./Home.scss";
import Recipe from "./components/Recipe/Recipe";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loading from "../../components/Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");

  const BASE_URL_API = useContext(ApiContext);

  useEffect(() => {
    let cancel = false;
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL_API}?limit=12`);
        if (response.ok && !cancel) {
          const recipes = await response.json();
          setRecipes(recipes);
        }
      } catch (e) {
        console.log(e);
      } finally {
        !cancel && setIsLoading(false);
      }
    }
    fetchRecipes();
    return () => (cancel = true);
  }, [BASE_URL_API]);

  function updatedRecipe(updatedRecipe) {
    setRecipes(
      recipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
    );
  }

  const filterRecipeWithInput = (e) => {
    setFilter(e.target.value.trim().toLowerCase()); // La méthode JavaScript trim() permet de retirer les espaces au début et à la fin d'une chaîne de caractères
  };
  return (
    <main className="main flex-fill">
      <div className="main-container">
        <h1 className="py-5">Decouvrez nos recettes</h1>
        <SearchBar onInput={(e) => filterRecipeWithInput(e)} />
        {!isLoading ? (
          <div className="main-items">
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((recipe) => {
                return (
                  <Recipe
                    key={recipe._id}
                    recipe={recipe}
                    toggleLikedRecipe={updatedRecipe}
                  />
                );
              })}
            {recipes.filter((r) => r.title.toLowerCase().startsWith(filter))
              .length === 0 && <p>Aucune recette trouvée</p>}
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <button className="btn btn-secondary" style={{marginBottom: "20px"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Charger plus</span>
      </button>
    </main>
  );
}

export default Home;
