import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navBar/Navbar';
import TanstackProviders from '@/util/TanstackProviders';
import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KW DUO',
  description: 'Matching developers for Kwangwoon Univ.',
};

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={'font-Pretendard'}>
        <TanstackProviders>
          <GoogleOAuthProvider clientId={googleClientId}>
            <Navbar />
            {children}
          </GoogleOAuthProvider>
        </TanstackProviders>
      </body>
    </html>
  );
}
