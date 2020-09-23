import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(error: ValidationError): Errors {
  const ValidationErrors: Errors = {};
  error.inner.forEach(err => {
    ValidationErrors[err.path] = err.message;
  });
  return ValidationErrors;
}
