import React from 'react';
import { useGlobalContext } from '../context';
import { useGetRecipes } from '../data/useGetRecipes';
import GlobalErrorPage from '../pages/GlobalErrorPage';
import Loading from './Loading';
import RecipeList from './RecipeList';

function MyProfile() {
  const [loading, error, recipes] = useGetRecipes();
  const { user } = useGlobalContext();

  if (error) {
    return <GlobalErrorPage />;
  }

  return (
    <>
      <h1 className="text-center">My Recipes</h1>
      {loading ? (
        <Loading />
      ) : (
        <RecipeList
          recipes={recipes.filter((recipe) => recipe.owner === user.uid)}
        />
      )}
    </>
  );
}

export default MyProfile;
