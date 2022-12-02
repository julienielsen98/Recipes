import { useContext, useEffect } from "react";
import Header from "../../Components/Header";
import Categories from "../../Components/Categories";
import { context } from "../../Components/Context";

const Frontpage = () => {
  const Category = "Category";
  const Ingredient = "Ingredient";
  const Area = "Areas";

  const {
    fetchCategories,
    categories,
    fetchIngredients,
    Ingredients,
    fetchAreas,
    Areas,
  } = useContext(context);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchIngredients();
  }, [fetchIngredients]);

  useEffect(() => {
    fetchAreas();
  }, [fetchAreas]);

  return (
    <div>
      <Header />
      <br />
      <div className="Categories">
        <p>Categories</p>

        {categories.map((category) => (
          <Categories
            key={category.strCategory}
            str={category.strCategory}
            thumb={category.strCategoryThumb}
            type={Category}
          />
        ))}
      </div>
      <hr />
      <div className="Categories">
        <p> Ingredients</p>

        {Ingredients.map((ingredient) => (
          <Categories
            key={ingredient.strIngredient}
            str={ingredient.strIngredient}
            description={ingredient.strDescription}
            type={Ingredient}
          />
        ))}
      </div>
      <hr />
      <div className="Categories">
        <p>Areas</p>
        {Areas.map((area) => (
          <Categories key={area.strArea} str={area.strArea} type={Area} />
        ))}
      </div>
    </div>
  );
};

export default Frontpage;
