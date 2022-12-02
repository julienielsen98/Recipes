import React, { createContext, useState, useCallback } from "react";
import axios from "axios";
export const context = createContext();

export const RecipeContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState([]);
  const [Ingredients, setIngredients] = useState([]);
  const [chosenIngredients, setChosenIngredients] = useState([]);
  const [Areas, setAreas] = useState([]);
  const [chosenArea, setChosenArea] = useState([]);
  const [item, setItem] = useState();
  const [randomRecipe, setRandomRecipe] = useState();

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
        setChosenCategory(res.data.meals);
      });
  }, []);

  const fetchIngredients = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      .then((res) => {
        setIngredients(res.data.meals);
      });
  }, []);

  const fetchIngredientsbyId = useCallback((strIngredient) => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${strIngredient}`
      )
      .then((res) => {
        setChosenIngredients(res.data.meals);
      });
  }, []);

  const fetchAreas = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((res) => {
        setAreas(res.data.meals);
      });
  }, []);

  const fetchAreabyId = useCallback((strArea) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`)
      .then((res) => {
        setChosenArea(res.data.meals);
      });
  }, []);

  const fetchRecipesbyId = useCallback((MealId) => {
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }, []);

  const fetchRandomRecipe = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        setRandomRecipe(res.data.meals);
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
        searchMeals: chosenCategory,
        fetchRecipesbyId,
        item,
        fetchIngredients,
        Ingredients,
        fetchIngredientsbyId,
        chosenIngredients,
        fetchAreas,
        Areas,
        fetchAreabyId,
        chosenArea,
        fetchRandomRecipe,
        randomRecipe,
      }}
    >
      {children}
    </context.Provider>
  );
};
