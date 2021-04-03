import { auth } from '../../firebase';

const logout = (user) => {
  if (user) {
    auth.signOut();
  }
};
export default logout;
