import React from 'react';
import { useGlobalContext } from '../context';
import { useGetRecipes } from '../data/useGetRecipes';
import GlobalErrorPage from './GlobalErrorPage';
import Loading from '../components/Loading';
import RecipeList from '../components/RecipeList';

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
