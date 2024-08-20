'use client';
import { useFormState } from 'react-dom';

import RegisterButton from './register-button';

import { signup } from '@/actions/auth';
import ErrorMessage from '@/components/validation/error-message';
import { useEffect } from 'react';

export default function RegisterForm() {
  const [errorMessage, dispatch] = useFormState(signup, undefined);

  return (
    <form action={dispatch} className="space-y-6">
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="name"
        >
          Full Name
        </label>
        <input
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          id="name"
          name="name"
          type="text"
        />
        <ErrorMessage message={errorMessage?.name} />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="email"
        >
          Email address
        </label>
        <input
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          id="email"
          name="email"
          type="email"
        />
        <ErrorMessage message={errorMessage?.email} />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          id="password"
          name="password"
          type="password"
        />
        <ErrorMessage message={errorMessage?.password} />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="confirm-password"
        >
          Confirm Password
        </label>
        <input
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          id="confirm-password"
          name="confirm-password"
          type="password"
        />
        <ErrorMessage message={errorMessage?.confirmPassword} />
      </div>
      <RegisterButton />
    </form>
  );
}
