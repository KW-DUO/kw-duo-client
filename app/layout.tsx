import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navBar/Navbar';
import TanstackProviders from '@/util/TanstackProviders';
import ClientProviders from '@/components/multiLanguage/ClientProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KW DUO',
  description: 'Matching developers for Kwangwoon Univ.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={'font-Pretendard'}>
        <TanstackProviders>
          <ClientProviders>
            <Navbar />

            {children}
          </ClientProviders>
        </TanstackProviders>
      </body>
    </html>
  );
}
