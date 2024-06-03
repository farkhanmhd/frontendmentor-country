import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Header from './ui/Header';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800'],
});

export const metadata: Metadata = {
  title: 'Explore All Countries',
  description: 'Explore all countries in the world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} min-h-screen w-full bg-very-light-gray px-[30px] pb-[50px] pt-[110px] text-black antialiased duration-200 dark:bg-very-dark-blue dark:text-white`}
      >
        <Header />
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
