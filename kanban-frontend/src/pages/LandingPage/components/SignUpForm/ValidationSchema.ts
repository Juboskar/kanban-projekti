import * as yup from 'yup';

export const userSchema = yup.object({
  username: yup
    .string()
    .required()
    .min(3)
    .max(50)
    .matches(/^.[a-zA-Z0-9]+$/, {
      message: 'Username must contain only letters and numbers',
      excludeEmptyString: true,
    }),
  name: yup.string().required().min(3).max(20),
  password: yup.string().required().min(8).max(200),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
