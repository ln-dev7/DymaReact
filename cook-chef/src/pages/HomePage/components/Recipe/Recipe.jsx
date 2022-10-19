import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ApiContext } from "../../../../context/ApiContext";
import "./Recipe.scss";

function Recipe({ recipe: {_id, title, img, liked}, toggleLikedRecipe }) {
  const BASE_URL_API = useContext(ApiContext)
  async function isLiked() {
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          liked: !liked
        })
      })

      if (response.ok) {
        const updatedRecipe = await response.json()
        toggleLikedRecipe(updatedRecipe)
      }
    } catch (e) {
      console.log(e)
    }
  };
  return (
    <div className="recipe">
      <div className="recipe-image">
        <img src={img} alt="recipe" />
      </div>
      <div className="recipe-footer">
        <h3>{title}</h3>
      </div>
      <div onClick={isLiked} className={`recipe-star ${liked ? "active" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Recipe;
