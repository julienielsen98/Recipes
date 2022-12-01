import { useParams, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import React, { useEffect, useContext } from "react";
import { context } from "../../Components/Recipes/Context";
import "../../styles/RecipesStyle.css";

function RecipesByCategory() {
  const { strCategory } = useParams();
  const { fetchCategoriesbyId, searchMeals } = useContext(context);
  let navigate = useNavigate();

  useEffect(() => {
    fetchCategoriesbyId(strCategory);
  }, [fetchCategoriesbyId, strCategory]);

  return (
    <>
      <Header />
      <br />

      <div className="Container">
        <h1 className="title">{strCategory} Recipes</h1>
        <br /> <br /> <br />
        {searchMeals.map((meal) => (
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

export default RecipesByCategory;
