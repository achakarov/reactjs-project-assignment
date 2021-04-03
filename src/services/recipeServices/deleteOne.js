import { db } from '../../firebase';
const deleteOne = (id) => {
  return db.collection('recipes').doc(id).delete();
};
export default deleteOne;
