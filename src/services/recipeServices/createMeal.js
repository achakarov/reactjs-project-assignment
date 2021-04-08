import { db } from '../../firebase';

const createMeal = (
  meal,
  ingredients,
  prepMethod,
  description,
  foodImageURL,
  category,
  owner,
  likesCounter = 0
) => {
  return db.collection('recipes').add({
    meal,
    ingredients,
    prepMethod,
    description,
    foodImageURL,
    category,
    owner,
    likesCounter,
    // peopleLiked: [],
  });
};

export default createMeal;
