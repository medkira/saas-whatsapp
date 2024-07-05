export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="flex 
      flex-col items-center justify-center py-9 text-center"
    >
      {children}
    </section>
  );
}
