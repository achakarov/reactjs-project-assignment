import React from 'react';

function CreateRecipe() {
  return (
    <>
      <form className="text-center p-5 form-layout" id="share-receipt-form">
        <p className="h4 mb-4">Share Recipe</p>

        <input
          type="text"
          id="defaultRecepieShareMeal"
          name="meal"
          className="form-control mb-4"
          placeholder="Meal"
        />

        <input
          type="text"
          id="defaultRecepieShareIngredients"
          name="ingredients"
          className="form-control mb-4"
          placeholder="Ingredients"
        />

        <textarea
          type="text"
          id="defaultRecepieShareMethodOfPreparation"
          name="prepMethod"
          className="form-control mb-4"
          placeholder="Method of preparation"
        ></textarea>

        <textarea
          type="text"
          id="defaultRecepieShareDescription"
          name="description"
          className="form-control mb-4"
          placeholder="Description"
        ></textarea>

        <input
          type="text"
          id="defaultRecepieShareFoodImageURL"
          name="foodImageURL"
          className="form-control mb-4"
          placeholder="Food Image URL..."
        />

        <select name="category">
          <option selected>Select category...</option>
          <option selected>Vegetables and legumes/beans</option>
          <option selected>Fruits</option>
          <option selected>Grain Food</option>
          <option selected>Milk, cheese, eggs and alternatives</option>
          <option selected>
            Lean meats and poultry, fish and alternatives
          </option>
        </select>

        <button
          className="btn btn-danger w-25 m-auto my-4 btn-block"
          type="submit"
        >
          Share it
        </button>
      </form>
    </>
  );
}

export default CreateRecipe;
