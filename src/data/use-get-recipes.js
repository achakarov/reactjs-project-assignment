import { useEffect, useState } from 'react';
import { getAllRecipes } from '../services/getAllRecipes';

export const useGetRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const recipes = await getAllRecipes();

        setLoading(false);
        setRecipes(recipes);
      } catch (error) {
        setLoading(false);
        setError('Unable to load recipes');
      }
    };
    fetchRecipes();
  }, []);

  return [loading, error, recipes];
};
