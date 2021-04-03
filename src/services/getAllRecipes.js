import { db } from '../firebase';

export const getAllRecipes = async () => {
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
