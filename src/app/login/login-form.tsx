import { ChevronRight } from 'lucide-react';

import { signup, login } from './actions';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginForm() {
  return (
    <form
      action={login}
      className="space-y-5"
      // onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <Label className="font-geist font-medium text-gray-100/50">Email</Label>
        <Input
          required
          className="mt-2 w-full rounded-lg border bg-transparent px-3 py-6 text-gray-500 shadow-sm outline-none focus:border-purple-600"
          name="email"
          type="email"
        />
      </div>
      <div>
        <Label className="font-geist font-medium text-gray-100/50">
          Password
        </Label>
        <Input
          required
          className="mt-2 w-full rounded-lg border bg-transparent px-3 py-6 text-gray-500 shadow-sm outline-none focus:border-blue-600"
          name="password"
          type="password"
        />
      </div>
      <button className="font-geist group w-full transform-gpu rounded-lg bg-purple-200/10 px-4 py-4 text-xl font-medium tracking-tighter text-white duration-150 hover:bg-transparent/10 active:bg-blue-900 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
        Sign in
        <ChevronRight className="ml-2 inline-flex h-4 w-4 items-center justify-center duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
