import React, { useEffect, useContext } from "react";
import { context } from "../../Components/Context";

import Header from "../../Components/Header";

let videoId = "";

function RandomRecipe() {
  const { fetchRandomRecipe, randomRecipe } = useContext(context);

  console.log(randomRecipe);

  useEffect(() => {
    fetchRandomRecipe();
  }, [fetchRandomRecipe]);

  if (randomRecipe) {
    randomRecipe.map((randomRecipe) => {
      const url = randomRecipe.strYoutube;
      const str = url.split("=");
      videoId = str[str.length - 1];
    });
  }

  return (
    <div>
      <>
        <Header />
        <br />

        {!randomRecipe
          ? ""
          : randomRecipe.map((randomRecipe) => (
              <div className="Container">
                <div className="info-container">
                  <div className="info-headlines">
                    <h1 className="title">{randomRecipe.strMeal}</h1>
                    <p className="title-p-tag">
                      {randomRecipe.strArea} food - Category
                      {randomRecipe.strCategory}
                    </p>
                    <br />
                    <img
                      src={randomRecipe.strMealThumb}
                      alt="#"
                      className="recipe-img"
                    />
                  </div>

                  <div className="info-details">
                    <h2>Ingredients:</h2>
                    <p>
                      {randomRecipe.strMeasure1} {randomRecipe.strIngredient1}
                    </p>
                    <p>
                      {randomRecipe.strMeasure2} {randomRecipe.strIngredient2}
                    </p>
                    <p>
                      {randomRecipe.strMeasure3} {randomRecipe.strIngredient3}
                    </p>
                    <p>
                      {randomRecipe.strMeasure4} {randomRecipe.strIngredient4}
                    </p>
                    <p>
                      {randomRecipe.strMeasure5} {randomRecipe.strIngredient5}
                    </p>
                    <p>
                      {randomRecipe.strMeasure6} {randomRecipe.strIngredient6}
                    </p>
                    <p>
                      {randomRecipe.strMeasure7} {randomRecipe.strIngredient7}
                    </p>
                    <p>
                      {randomRecipe.strMeasure8} {randomRecipe.strIngredient8}
                    </p>
                    <p>
                      {randomRecipe.strMeasure9} {randomRecipe.strIngredient9}
                    </p>
                  </div>
                </div>
                <div className="how-to">
                  <h2>Instrucstions:</h2>
                  {randomRecipe.strInstructions}
                </div>
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
      </>
    </div>
  );
}

export default RandomRecipe;
