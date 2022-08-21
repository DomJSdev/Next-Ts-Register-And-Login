import React, {FormEvent, useRef, useState, useCallback} from 'react';
import * as axios from 'axios';
import {useRouter} from 'next/router';

const ResetPassword = () => {
  const router = useRouter();

  /**
   * By using state management, we can use react way to access value with
   * onChange event. (The best way)
   */
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      console.log('Using state management way:', {
        newPassword,
        confirmPassword,
      });

      const token = router.query.token as string;

      if (newPassword === confirmPassword && token) {
        try {
          await axios.default.post('/api/reset-password', {
            newPassword,
            token,
          });

          router.push('/login');
        } catch (error) {
          console.log(error);
        }
      }
    },
    [router, newPassword, confirmPassword]
  );

  return (
    <>
      <h1>Reset password</h1>
      <form onSubmit={submitHandler}>
        <input
          value={newPassword}
          name="newPassword"
          type="password"
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <input
          value={confirmPassword}
          name="confirmPassword"
          type="password"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button type="submit">Reset</button>
      </form>
    </>
  );
};

export default ResetPassword;
