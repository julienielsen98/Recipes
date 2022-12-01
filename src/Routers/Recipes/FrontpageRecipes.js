import { useState, useCallback, useContext } from "react";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import Categories from "../../Components/Recipes/Categories";
import { context } from "../../Components/Recipes/Context";

const FrontpageRecipes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  let navigate = useNavigate();

  const { fetchHomePageMeals, meals } = useContext(context);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);

  return (
    <div>
      <Header />
      <br />
      <Categories />
      <br />
      <hr />
      <br />
      <div className="Frontpage-container">
        <div className="search">
          <input
            type="text"
            className="searchbar"
            placeholder="Type a meal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>

          <button onClick={fetchMealsHandler}>Search</button>
        </div>

        <div>
          {meals ? (
            meals.map((meal) => (
              <div
                className="searchresults"
                key={meal.idMeal}
                onClick={() => {
                  navigate(`/Recipe/${meal.idMeal}`);
                }}
              >
                <img src={meal.strMealThumb} alt="#" className="meal-img" />
                <h4>{meal.strMeal}</h4>
              </div>
            ))
          ) : (
            <p> Not found </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FrontpageRecipes;
