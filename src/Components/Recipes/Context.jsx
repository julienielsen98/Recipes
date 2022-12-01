import React, { createContext, useState, useCallback } from "react";
import axios from "axios";
export const context = createContext();

export const RecipeContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchMeals, setSearchMeals] = useState([]);
  const [item, setItem] = useState();

  const fetchHomePageMeals = useCallback((searchTerm) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => {
        setMeals(res.data.meals);
      });
  }, []);

  const fetchCategories = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setCategories(res.data.categories);
      });
  }, []);

  const fetchCategoriesbyId = useCallback((strCategory) => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
      )
      .then((res) => {
        setSearchMeals(res.data.meals);
      });
  }, []);

  const fetchRecipesbyId = useCallback((MealId) => {
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }, []);

  return (
    <context.Provider
      value={{
        fetchHomePageMeals,
        meals,
        fetchCategories,
        categories,
        fetchCategoriesbyId,
        searchMeals,
        fetchRecipesbyId,
        item,
      }}
    >
      {children}
    </context.Provider>
  );
};
