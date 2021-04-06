import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { updateOne, getOneRecipe } from '../services/recipeServices';

function EditRecipe() {
  const [recipe, setRecipe] = useState({});
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getOneRecipe(id)
      .then((res) => setRecipe({ ...res.data() }))
      .catch((err) => console.log(err));
  }, [id]);

  const onEditRecipeSubmit = (e) => {
    e.preventDefault();
    let ingredientsArray = [...e.target.ingredients.value.split(',')];
    const { meal, prepMethod, description, foodImageURL, category } = e.target;
    let updatedRecipe = {
      ...recipe,
      meal: meal.value,
      ingredients: ingredientsArray,
      prepMethod: prepMethod.value,
      description: description.value,
      foodImageURL: foodImageURL.value,
      category: category.value,
    };

    updateOne(id, updatedRecipe)
      .then((res) => history.push('/'))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form
        className="text-center p-5 form-layout"
        id="edit-receipt-form"
        onSubmit={onEditRecipeSubmit}
      >
        <p className="h4 mb-4">Edit Recipe</p>

        <input
          type="text"
          id="defaultRecepieEditMeal"
          name="meal"
          className="form-control mb-4"
          placeholder="Meal"
          defaultValue={recipe.meal}
        />

        <input
          type="text"
          id="defaultRecepieEditIngredients"
          name="ingredients"
          className="form-control mb-4"
          placeholder="Ingredients"
          defaultValue={recipe.ingredients}
        />

        <textarea
          type="text"
          id="defaultRecepieEditMethodOfPreparation"
          name="prepMethod"
          className="form-control mb-4"
          placeholder="Method of preparation"
          defaultValue={recipe.prepMethod}
        ></textarea>

        <textarea
          type="text"
          id="defaultRecepieEditDescription"
          name="description"
          className="form-control mb-4"
          placeholder="Description"
          defaultValue={recipe.description}
        ></textarea>

        <input
          type="text"
          id="defaultRecepieEditFoodImageURL"
          name="foodImageURL"
          className="form-control mb-4"
          placeholder="Food Image URL..."
          defaultValue={recipe.foodImageURL}
        />

        <select name="category" defaultValue={recipe.category}>
          <option value="Vegetables and legumes/beans">
            Vegetables and legumes/beans
          </option>
          <option value="Fruits">Fruits</option>
          <option value="Grain Food">Grain Food</option>
          <option value="Milk, cheese, eggs and alternatives">
            Milk, cheese, eggs and alternatives
          </option>
          <option value="Lean meats and poultry, fish and alternatives">
            Lean meats and poultry, fish and alternatives
          </option>
        </select>
        <button className="btn btn-danger w-25 m-auto my-4 btn-block">
          Edit it
        </button>
      </form>
    </>
  );
}

export default EditRecipe;
