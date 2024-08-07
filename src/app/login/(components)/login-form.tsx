'use client';
import { useFormState } from 'react-dom';

import LoginButton from './login-button';

import { login } from '@/actions/auth';
import ErrorMessage from '@/components/validation/error-message';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(login, undefined);

  return (
    <form
      action={dispatch}
      className="space-y-6"
      // onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label className="block text-sm font-medium " htmlFor="email">
          Email address
        </label>
        <input
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          id="email"
          name="email"
          type="email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium " htmlFor="password">
          Password
        </label>
        <input
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          id="password"
          name="password"
          type="password"
        />
        <ErrorMessage message={[errorMessage!]} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
            id="remember-me"
            name="remember-me"
            type="checkbox"
          />
          <label className="ml-2 block text-sm" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a className="font-medium text-teal-600 hover:text-teal-500" href="/">
            Forgot your password?
          </a>
        </div>
      </div>
      <LoginButton />
    </form>
  );
}
