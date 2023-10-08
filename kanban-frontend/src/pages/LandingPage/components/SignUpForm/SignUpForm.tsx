import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';

interface FormValues {
  username: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

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
      <Button>Sign up</Button>
    </form>
  );
};

export default SignUpForm;
