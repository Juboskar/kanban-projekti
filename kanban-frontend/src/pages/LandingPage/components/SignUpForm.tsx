import React, { ChangeEvent, useState } from 'react';
import TextInput from '../../../components/TextInput';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <h2>Login</h2>
      <TextInput
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <TextInput placeholder="name" value={name} onChange={handleNameChange} />
      <TextInput
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
        type="password"
      />
      <TextInput
        placeholder="confirm password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        type="password"
      />
      <button>Sign Up</button>
    </div>
  );
};

export default SignUpForm;
