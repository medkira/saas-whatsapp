import { Layout } from '@/components/dashboard/layout/layout';
import '@/styles/globals.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
