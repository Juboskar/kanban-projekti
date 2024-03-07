import { useMutation } from 'react-query';
import { UserData } from '../types';

const createUser = async (userData: UserData) => {
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw { message: data.error };
  }
  return data;
};

const useCreateUser = () => {
  return useMutation(createUser, {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      return error;
    },
  });
};

export default useCreateUser;
