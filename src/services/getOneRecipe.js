import { db } from '../firebase';

const getOneRecipe = (id) => {
  return db.collection('recipes').doc(id).get();
};
export default getOneRecipe;
