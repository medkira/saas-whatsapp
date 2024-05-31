import { Fira_Code as FontMono, Inter as FontSans } from 'next/font/google';
import { Roboto, Lusitana } from 'next/font/google';


export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
export const roboto = Roboto({
  subsets: ['greek'],
  weight: ['400', '700'],
});
