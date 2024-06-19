import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Navbar } from '../components/navbar';

import { Providers } from './providers';

import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/config/site';
import { roboto } from '@/config/fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://totaltechtn.com/'),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/images/logo.png',
  },
  // openGraph: {
  //   description: siteConfig.description,
  // images: {
  //   type: 'image/png',
  //   url: 'https://totaltechtn.com/images/opengraph.png',
  //   width: 800,
  //   height: 700,
  // },
  // images: [
  //   {
  //     type: 'image/png',
  //     url: '/images/opengraph.png',
  //     width: 800,
  //     height: 700,
  //   },
  // ],
  // },
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
      {/* <head>
        <meta
          content={metadata.openGraph!.description}
          property="og:description"
        />
   
      </head> */}
      <body
        className={clsx(
          'white min-h-screen  font-sans antialiased',
          // fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className={`${roboto.className}`}>
            <div className="fixed left-0 right-0 top-0 z-20 backdrop-blur-[1.9px] sm:backdrop-blur-none">
              <Navbar />
            </div>

            {/* container z-10 mx-auto max-w-7xl flex-grow bg-transparent px-6 */}
            <main className="">{children}</main>
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
