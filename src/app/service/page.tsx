'use client';
import { title } from '@/components/primitives';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster />
      </div>
    </div>
  );
}
