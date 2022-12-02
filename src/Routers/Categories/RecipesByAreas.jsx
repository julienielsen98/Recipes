import { useParams, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import React, { useEffect, useContext } from "react";
import { context } from "../../Components/Context";
import "../../styles/RecipesStyle.css";

function RecipesByAreas() {
  const { strArea } = useParams();
  const { fetchAreabyId, chosenArea } = useContext(context);
  let navigate = useNavigate();

  useEffect(() => {
    fetchAreabyId(strArea);
  }, [fetchAreabyId, strArea]);

  return (
    <>
      <Header />
      <br />

      <div className="Container">
        <h1 className="title">{strArea} Recipes</h1>
        <br /> <br /> <br />
        {chosenArea.map((meal) => (
          <div
            onClick={() => {
              navigate(`/Recipe/${meal.idMeal}`);
            }}
            className="info-container"
            id="recipesByCategory-container"
            key={meal.idMeal}
          >
            <img
              src={meal.strMealThumb}
              alt="#"
              className="recipe-img"
              id="recipe-img"
            />
            <p className="recipeHeadline">{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecipesByAreas;
