import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import Signin from '../../pages/Signin';

const mockedHistoryPush = jest.fn();

jest.mock('../../stores/auth.tsx', () => {
  return {
    useAuth: () => ({
      signIn: jest.fn(),
    }),
  };
});

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SignIn Page', () => {
  it('should be able to signin', async () => {
    const { getByPlaceholderText, getByText } = render(<Signin />);

    const emailField = getByPlaceholderText('e-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });
});
