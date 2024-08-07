import { Metadata } from 'next';
import Link from 'next/link';

import RegisterForm from './(components)/register-form';

export const metadata: Metadata = {
  title: 'Register - SaaSwhats',
  // description: 'The official Next.js Course Dashboard, built with App Router.',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Register for SaaSwhats
        </h2>
        <RegisterForm />
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            className="font-medium text-teal-600 hover:text-teal-500"
            href="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
