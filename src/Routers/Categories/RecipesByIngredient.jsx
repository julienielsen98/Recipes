import { useParams, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import React, { useEffect, useContext } from "react";
import { context } from "../../Components/Context";
import "../../styles/RecipesStyle.css";

function RecipesByIngredient() {
  const { strIngredient } = useParams();
  const { fetchIngredientsbyId, chosenIngredients } = useContext(context);
  let navigate = useNavigate();

  useEffect(() => {
    fetchIngredientsbyId(strIngredient);
  }, [fetchIngredientsbyId, strIngredient]);

  return (
    <>
      <Header />
      <br />

      <div className="Container">
        <h1 className="title">{strIngredient} Recipes</h1>
        <br /> <br /> <br />
        {chosenIngredients.map((meal) => (
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

export default RecipesByIngredient;
