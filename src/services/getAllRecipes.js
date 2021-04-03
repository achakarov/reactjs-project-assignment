import { db } from '../firebase';

const getAllRecipes = async () => {
  try {
    const { docs } = await db.collection('recipes').get();

    if (!docs || docs.length === 0) {
      return [];
    }

    return docs.map((recipe) => ({
      id: recipe.id,
      ...recipe.data(),
    }));
  } catch (error) {
    console.log(error);
    return;
  }
};

export default getAllRecipes;
