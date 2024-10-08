'use client';

import { Pagination } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function PaginationProducts({
  totalPages,
  basePath,
}: {
  totalPages: number;
  basePath: string;
}) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);
  // const searchParams = useSearchParams();
  const currentPage = Number(pathSegments[2]) || 1;
  const router = useRouter();

  const createPageUrl = (page: number) => {
    // const params = new URLSearchParams(searchParams);
    //  pathSegments[0] => products
    router.replace(`/${pathSegments[0]}/${basePath}/${page}`);
  };

  return (
    <Pagination
      isCompact
      showControls
      disableAnimation={false}
      initialPage={1}
      page={currentPage}
      total={totalPages}
      onChange={(page) => createPageUrl(page)}
    />
  );
}
