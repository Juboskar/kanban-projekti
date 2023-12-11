import * as yup from 'yup';

export const validationSchema = (
  cachedAvailableUsers: string[],
  cachedExistingUsers: string[]
) => {
  return yup.object({
    username: yup
      .string()
      .required()
      .min(3)
      .max(20)
      .matches(/^.[a-zA-Z0-9]+$/, {
        message: 'Username must contain only letters and numbers',
        excludeEmptyString: true,
      })
      .test('username', 'Username already exists', (username) => {
        return new Promise((resolve) => {
          if (
            username.length >= 3 &&
            username.length <= 20 &&
            !cachedAvailableUsers.includes(username)
          ) {
            if (cachedExistingUsers.includes(username)) {
              return resolve(false);
            } else {
              fetch('/api/users/usernames/' + username).then((res) => {
                if (res.ok) {
                  cachedExistingUsers.push(username);
                  return resolve(false);
                }
                cachedAvailableUsers.push(username);
                return resolve(true);
              });
            }
          }
          return resolve(true);
        });
      }),
    name: yup.string().required().min(3).max(50),
    password: yup.string().required().min(8).max(200),
    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  });
};
