'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/util/i18n';
import { googleClientID } from '@/constant/api';
import React from 'react';

const googleClientId = googleClientID ?? '';

type ClientProvidersProps = {
  children: React.ReactNode;
};

const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <GoogleOAuthProvider clientId={googleClientId}>{children}</GoogleOAuthProvider>
    </I18nextProvider>
  );
};

export default ClientProviders;
