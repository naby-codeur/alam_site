import StructuresNav from '@/components/layout/StructuresNav';

export default function StructuresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuresNav />
      {children}
    </>
  );
}

