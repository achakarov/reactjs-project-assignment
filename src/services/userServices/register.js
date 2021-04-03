import { auth } from '../../firebase';

const register = (email, password, repeatPassword) => {
  if (password === repeatPassword) {
    return auth.createUserWithEmailAndPassword(email, password);
  } else {
    return new Error('Passwords must match');
  }
};

export default register;
