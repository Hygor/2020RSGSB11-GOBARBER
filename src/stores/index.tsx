import React, { FC } from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const StoreProvider: FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default StoreProvider;
