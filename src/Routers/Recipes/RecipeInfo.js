import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import { context } from "../../Components/Recipes/Context";
let videoId = "";

function RecipeInfo() {
  const { MealId } = useParams();

  const { fetchRecipesbyId, item } = useContext(context);

  useEffect(() => {
    fetchRecipesbyId(MealId);
  }, [fetchRecipesbyId, MealId]);

  if (item) {
    const url = item.strYoutube;
    const str = url.split("=");
    videoId = str[str.length - 1];
  }

  return (
    <>
      <Header />
      <br />
      {!item ? (
        ""
      ) : (
        <div className="Container">
          <div className="info-container">
            <div className="info-headlines">
              <h1 className="title">{item.strMeal}</h1>
              <p className="title-p-tag">
                {item.strArea} food - Category {item.strCategory}
              </p>
              <br />
              <img src={item.strMealThumb} alt="#" className="recipe-img" />
            </div>

            <div className="info-details">
              <h2>Ingredients:</h2>
              <p>
                {item.strMeasure1} {item.strIngredient1}
              </p>
              <p>
                {item.strMeasure2} {item.strIngredient2}
              </p>
              <p>
                {item.strMeasure3} {item.strIngredient3}
              </p>
              <p>
                {item.strMeasure4} {item.strIngredient4}
              </p>
              <p>
                {item.strMeasure5} {item.strIngredient5}
              </p>
              <p>
                {item.strMeasure6} {item.strIngredient6}
              </p>
              <p>
                {item.strMeasure7} {item.strIngredient7}
              </p>
              <p>
                {item.strMeasure8} {item.strIngredient8}
              </p>
              <p>
                {item.strMeasure9} {item.strIngredient9}
              </p>
            </div>
          </div>
          <div className="how-to">
            <h2>Instrucstions:</h2>
            {item.strInstructions}
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
      )}
    </>
  );
}

export default RecipeInfo;
