import { auth } from '../../firebase';
import { notifySuccess } from '../notificationsHandler';

const logout = (user) => {
  if (user) {
    auth.signOut();
    notifySuccess('Logged out!');
  }
};
export default logout;
