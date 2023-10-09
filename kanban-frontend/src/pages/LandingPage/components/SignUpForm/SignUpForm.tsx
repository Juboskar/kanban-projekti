import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useCreateUser from './hooks/useCreateUser';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';
import { UserData } from './types';
import { userSchema } from './ValidationSchema';
import ErrorField from '../../../../components/ErrorField';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(userSchema),
  });
  const { mutate, isLoading, isError, error, isSuccess, data } =
    useCreateUser();
  const onSubmit: SubmitHandler<UserData> = (userData) => {
    mutate(userData);
  };

  if (isLoading) return <p>Loading...</p>;

  if (isSuccess) return <p>User created: {data.username}</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput {...register('username')} label="Username" required />
      <TextInput {...register('name')} label="Name" required />
      <TextInput
        {...register('password')}
        label="Password"
        required
        type="password"
      />
      <TextInput
        {...register('confirmPassword')}
        label="Confirm password"
        required
        type="password"
      />
      {errors.username?.message && (
        <ErrorField type="client">{errors.username.message}</ErrorField>
      )}
      {errors.name?.message && (
        <ErrorField type="client">{errors.name.message}</ErrorField>
      )}
      {errors.password?.message && (
        <ErrorField type="client">{errors.password.message}</ErrorField>
      )}
      {errors.confirmPassword?.message && (
        <ErrorField type="client">{errors.confirmPassword.message}</ErrorField>
      )}
      {isError && error?.message && (
        <ErrorField type="server">{error.message}</ErrorField>
      )}
      <Button>Sign up</Button>
    </form>
  );
};

export default SignUpForm;
