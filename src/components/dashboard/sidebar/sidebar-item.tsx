import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import { useSidebarContext } from '../layout/layout-context';

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href = '' }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };

  return (
    <Link className="max-w-full text-default-900 active:bg-none font-semibold" href={href}>
      <button
        className={clsx(
          isActive
            ? 'bg-primary-100 [&_svg_path]:fill-primary-500'
            : 'hover:bg-default-100 bg-transparent',
          'flex h-full min-h-[44px] w-full cursor-pointer items-center gap-2 rounded-xl px-3.5 transition-all duration-150 active:scale-[0.98]',
        )}
        onClick={handleClick}
      >
        {icon}
        <span className={clsx(
          isActive
            ? "text-slate text-start pl-1 leading-[1.2rem]"
            : "text-slate-300 text-start pl-1 leading-[1.2rem]"
        )}>{title}</span>
      </button>
    </Link>
  );
};
