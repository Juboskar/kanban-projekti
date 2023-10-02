export const userData = {
  username: {
    exists: {
      errorMessage: 'username is required',
    },
    isLength: {
      errorMessage: 'username must be between 3 and 20 characters long',
      options: {
        min: 3,
        max: 20,
      },
    },
    isAlphanumeric: {
      errorMessage: 'username must contain only letters and numbers',
    },
  },
  name: {
    exists: {
      errorMessage: 'name is required',
    },
    isLength: {
      errorMessage: 'name must be between 3 and 50 characters long',
      options: {
        min: 3,
        max: 50,
      },
    },
  },
  password: {
    exists: {
      errorMessage: 'password is required',
    },
    isLength: {
      errorMessage: 'password must be between 8 and 200 characters long',
      options: {
        min: 8,
        max: 200,
      },
    },
  },
};
