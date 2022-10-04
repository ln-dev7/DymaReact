import React from "react";

function Articles({ display }) {
  const arr = [
    {
      id: 1,
      title: "Article 1",
      content:
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      title: "Article 2",
      content: "Lorem ipsum dolor sit amet adipisicing elit. Quisquam, quod.",
    },
    {
      id: 3,
      title: "Article 3",
      content: "dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#111" }}>
      <h1>Articles</h1>
      <div style={{ background: "#333" }}>
        {arr.map((article) => {
          return (
            <div key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          );
        })}
      </div>
      <div>
        {display ? (
          <>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit !</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem voluptates, similique rerum velit alias qui illum
              minima architecto est id nesciunt omnis fugiat doloribus! Porro,
              magni. Eveniet deleniti quae dolor!
            </p>
          </>
        ) : (
          <p>
            Aucun article à afficher pour le moment. Veuillez réessayer plus
            tard
          </p>
        )}
      </div>
    </div>
  );
}

export default Articles;
