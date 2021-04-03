import { db } from '../../firebase';

const likeOne = (recipeId, likes) => {
  return db.collection('recipes').doc(recipeId).update({ likesCounter: likes });
};
export default likeOne;
