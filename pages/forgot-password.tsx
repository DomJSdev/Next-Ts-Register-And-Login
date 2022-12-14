import React, {FormEvent, useState, useCallback} from 'react';
import * as axios from 'axios';
import Headers from '../components/Headers';

const ForgotPassword = () => {
  /**
   * By using state management, we can use react way to access value with
   * onChange event. (The best way)
   */
  const [email, setEmail] = useState('');

  const submitHandler = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      console.log('Using state management way:', {
        email,
      });

      try {
        await axios.default.post('/api/forgot-password', {
          email,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [email]
  );

  return (
    <>
    <Headers></Headers>
      <h1>Forgot password</h1>
      <form onSubmit={submitHandler}>
        <label>Email Adress</label>
        <input
          value={email}
          name="email"
          type="email"
          placeholder='emailadress'
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Reset</button>
      </form>
    </>
  );
};

export default ForgotPassword;
