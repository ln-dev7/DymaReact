import React from "react";
import "./Content.scss";
import Recipe from "./Recipe";

function Content() {
  return (
    <main className="main flex-fill">
      <div className="main-container">
        <h1 className="py-5">Decouvrez nos nouvelles recettes</h1>
        <div className="main-items">
          {/* <div className="item">
            <Recipe />
          </div> */}
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
      </div>
    </main>
  );
}

export default Content;
