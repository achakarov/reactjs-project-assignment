import { auth } from '../../firebase';

const signIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export default signIn;
