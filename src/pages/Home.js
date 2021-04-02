import React, { useEffect, useState } from 'react';
import RecipeList from '../components/RecipeList';
import { db } from '../firebase';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await db.collection('recipes').get();
      setLoading(false);
      setRecipes(
        data.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    };
    if (!recipes.length) {
      fetchData();
    }
  }, [recipes, loading, setRecipes, setLoading]);

  return (
    <>
      <h1 className="text-center">Our Recipes</h1>
      {loading ? 'Loading' : <RecipeList recipes={recipes} />}
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
