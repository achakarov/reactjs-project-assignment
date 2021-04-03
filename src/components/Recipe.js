import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { getCategoryImageUrl } from '../services/recipeServices';

function Recipe({ id, meal, ingredients, foodImageURL, category }) {
  const { user } = useGlobalContext();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="our-team-main">
            <div className="team-front">
              <img src={getCategoryImageUrl(category)} alt={category} />
              <h3>{meal}</h3>
              <p>{category}</p>
            </div>

            <div className="team-back">
              <div className="back-side-info">
                <h4>Ingredients</h4>
                <ul>
                  {ingredients.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                {user ? (
                  <Link to={`/recipe/details/${id}`}>View the recipe</Link>
                ) : (
                  <Link to={`/login`}>Login to see the details</Link>
                )}
              </div>

              <img className="foodImage" src={foodImageURL} alt={meal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
