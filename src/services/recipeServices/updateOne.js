import { db } from '../../firebase';

const updateOne = (recipeId, data) => {
  return db.collection('recipes').doc(recipeId).update(data);
};

export default updateOne;
