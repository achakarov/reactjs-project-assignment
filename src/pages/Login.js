import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from '../services/userServices';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <form className="text-center p-5 form-layout">
        <h4 className="h4 mb-4">Sign in</h4>

        <input
          type="text"
          id="defaultRegisterFormUsername"
          name="email"
          className="form-control mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="defaultRegisterFormPassword"
          name="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-danger w-25 m-auto my-4 btn-block"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            signIn(email, password)
              .then(() => {
                history.push('/');
              })
              .catch((error) => {
                setPassword('');
                alert(error.message);
              });
          }}
        >
          Sign in
        </button>
      </form>
    </>
  );
}

export default Login;
