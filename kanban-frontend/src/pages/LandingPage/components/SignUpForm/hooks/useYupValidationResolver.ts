import { useCallback } from 'react';
import { object, ValidationError } from 'yup';
import { UserData } from '../types';

const useYupValidationResolver = (
  validationSchema: ReturnType<typeof object>
) => {
  return useCallback(
    async (data: UserData) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });
        return {
          values,
          errors: {},
        };
      } catch (errors) {
        if (errors instanceof ValidationError)
          return {
            values: {},
            errors: errors.inner.reduce(
              (allErrors, currentError) => ({
                ...allErrors,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                [currentError.path!]: {
                  type: currentError.type ?? 'validation',
                  message: currentError.message,
                },
              }),
              {}
            ),
          };

        throw new Error('Error trying to validate form schema');
      }
    },
    [validationSchema]
  );
};
export default useYupValidationResolver;
