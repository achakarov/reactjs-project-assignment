import React from 'react';
import Recipe from './Recipe';

function RecipeList({ recipes }) {
  if (recipes.length) {
    return (
      <div id="sharedRecipes">
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
    );
  }

  return (
    <div id="foodNotFound">
      <img
        src="https://t4.ftcdn.net/jpg/00/62/17/31/240_F_62173114_ozantkVtkPgzL0fxssAkTqKX1FHPr0UW.jpg"
        alt="No Recipes"
      />
      <h3>Food not found...</h3>
    </div>
  );
}

export default RecipeList;
