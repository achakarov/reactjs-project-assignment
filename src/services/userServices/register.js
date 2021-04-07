import { auth } from '../../firebase';

const register = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export default register;
