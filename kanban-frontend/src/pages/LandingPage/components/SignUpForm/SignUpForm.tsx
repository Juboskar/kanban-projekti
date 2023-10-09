import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useCreateUser from './hooks/useCreateUser';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';
import { UserData } from './types';

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<UserData>();
  const { mutate, isLoading, isError, error, isSuccess, data } =
    useCreateUser();
  const onSubmit: SubmitHandler<UserData> = (userData) => {
    mutate(userData);
  };

  if (isLoading) return <p>Loading...</p>;

  if (isSuccess) return <p>User created: {data.username}</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput {...register('username')} label="username" required />
      <TextInput {...register('name')} label="name" required />
      <TextInput
        {...register('password')}
        label="password"
        required
        type="password"
      />
      <TextInput
        {...register('confirmPassword')}
        label="confirmPassword"
        required
        type="password"
      />
      {isError && <p>{error.message}</p>}
      <Button>Sign up</Button>
    </form>
  );
};

export default SignUpForm;
