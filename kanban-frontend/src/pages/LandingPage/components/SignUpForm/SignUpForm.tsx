import React, { ChangeEvent, useState } from 'react';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';

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
      <TextInput
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
        required
      />
      <TextInput
        placeholder="name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <TextInput
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
        type="password"
        required
      />
      <TextInput
        placeholder="confirm password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        type="password"
        required
      />
      <Button>Sign up</Button>
    </div>
  );
};

export default SignUpForm;
