import { Card } from '@nextui-org/card';
import { Metadata } from 'next';
import Link from 'next/link';

import LoginForm from './(components)/login-form';

export const metadata: Metadata = {
  title: 'Login - SaaSwhats',
  // description: 'The official Next.js Course Dashboard, built with App Router.',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Login() {
  return (
    <Card className="flex h-screen items-center justify-center bg-background">
      <Card className=" w-full max-w-md rounded-lg  p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Login to SaaSwhats
        </h2>
        <LoginForm />
        <p className="mt-6 text-center text-sm ">
          Don&apos;t have an account?{' '}
          <Link
            className="font-medium text-teal-600 hover:text-teal-500"
            href="/register"
          >
            Sign up
          </Link>
        </p>
      </Card>
    </Card>
  );
}
