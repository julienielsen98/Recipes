import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "./Context";
// import "../../styles/Recipes.css";

function Categories() {
  let navigate = useNavigate();

  const { fetchCategories, categories } = useContext(context);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="Categories">
      {categories.map((category) => (
        <div
          className="Categories-container"
          key={category.strCategory}
          onClick={() => {
            navigate(`/Category/${category.strCategory}`);
          }}
        >
          <img
            src={category.strCategoryThumb}
            alt="#"
            className="Category-img"
          />
          <h4>{category.strCategory}</h4>
        </div>
      ))}
    </div>
  );
}

export default Categories;
