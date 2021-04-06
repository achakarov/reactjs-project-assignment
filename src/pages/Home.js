import React from 'react';
import RecipeList from '../components/RecipeList';
import { useGetRecipes } from '../data/useGetRecipes';
import Loading from '../components/Loading';

function Home() {
  const [loading, error, recipes] = useGetRecipes();

  if (error) {
    <p className="text-center">{error}</p>;
  }

  return (
    <>
      <h1 className="text-center">Our Recipes</h1>
      {loading ? <Loading /> : <RecipeList recipes={recipes} />}
      <main role="main" className="inner cover mt-5">
        <h1 className="cover-heading">The Cook Book</h1>
        <p className="lead">
          They say that food passes through the stomach, we say that food passes
          through The Cook Book...
        </p>
      </main>
    </>
  );
}

export default Home;
