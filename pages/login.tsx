import React, {FormEvent, useRef, useState, useCallback} from 'react';
import * as axios from 'axios';
import {useRouter} from 'next/router';

const Login = () => {
  const router = useRouter();

  // By using DOM reference, we can access the value natively.
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  /**
   * By using state management, we can use react way to access value with
   * onChange event. (The best way)
   */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      console.log('Using state management way:', {
        email,
        password,
      });

      console.log('Using DOM access with references:', {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });

      try {
        const result = await axios.default.post('/api/login', {
          email,
          password,
        });

        router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
    [router, email, password]
  );

  return (
    <>
      <h1>Login page</h1>
      <form onSubmit={submitHandler}>
        <input
          ref={emailRef}
          value={email}
          name="email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          ref={passwordRef}
          value={password}
          name="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
