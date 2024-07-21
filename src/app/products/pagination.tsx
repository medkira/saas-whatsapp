'use client';
import { Pagination } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function PaginationProducts({
  totalPages,
}: {
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const { replace } = useRouter();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      isCompact
      showControls
      disableAnimation={false}
      initialPage={1}
      total={totalPages}
      onChange={(page) => createPageUrl(page)}
    />
  );
}
