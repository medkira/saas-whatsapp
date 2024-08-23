import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import { Suspense } from 'react';

import { Navbar } from '../components/navbar';

import { Providers } from './(landing)/providers';

import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/config/site';
import { roboto } from '@/config/fonts';

export const metadata: Metadata = {
  // metadataBase: new URL('https://www.mmcmoknine.com'),
  keywords: [],

  alternates: {
    // canonical: 'https://www.mmcmoknine.com',
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  openGraph: {
    description: siteConfig.description,
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/logo.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          'white min-h-screen  font-sans antialiased',
          // fontSans.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: 'class',
            defaultTheme: 'light',
            themes: ['light', 'dark'],
          }}
        >
          <div className={`${roboto.className} `}>
            {/* <div className="fixed left-0 right-0 top-0 z-20  sm:backdrop-blur-none"> */}
            <Suspense>
              <Navbar />
            </Suspense>
            {/* </div> */}

            {/* container z-10 mx-auto max-w-7xl flex-grow bg-transparent px-6 */}
            <main>{children}</main>
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
