import { getAllMachines } from '@/actions/machines';

export default async function MachineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-start text-center">
      {children}
    </section>
  );
}
