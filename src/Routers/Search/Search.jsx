import React from "react";
import { useState, useCallback, useContext } from "react";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import { context } from "../../Components/Context";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();

  const { fetchHomePageMeals, meals } = useContext(context);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);
  return (
    <>
      <Header />
      <br /> <br /> <br />
      <div className="search">
        <div>
          <input
            type="text"
            className="searchbar"
            placeholder="Type a meal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>

          <button onClick={fetchMealsHandler}>Search</button>
        </div>
        <div className="Results-container">
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
    </>
  );
}

export default Search;
