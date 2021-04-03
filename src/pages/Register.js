import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  //TODO - register in separate file

  const register = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth);
          history.push('/');
        })
        .catch((error) => alert(error.message));
    } else {
      setPassword('');
      setRepeatPassword('');
      alert('Passwords must match!');
    }
  };

  return (
    <>
      <form className="text-center p-5 form-layout">
        <p className="h4 mb-4">Sign up</p>

        <input
          type="text"
          id="defaultRegisterFormUsername"
          className="form-control mb-4"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="defaultRegisterFormPassword"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          id="defaultRegisterRepeatPassword"
          className="form-control"
          name="repeatPassword"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <button
          className="btn btn-danger my-4 btn-block w-25 m-auto"
          type="submit"
          onClick={register}
        >
          Sign up
        </button>
      </form>
    </>
  );
}

export default Register;
