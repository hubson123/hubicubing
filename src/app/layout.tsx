import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';

const roboto = Roboto({weight: '400', subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Hubicubing',
  description: "Simple application for me to collect my student's times.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      {children}
      </body>
    </html>
  );
}