'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import { Button } from '@nextui-org/button';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <NextUINavbar
      // className="bg-white shadow-md"
      isBlurred={true}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <NextLink className="flex items-center gap-2" href="/">
          {/* <Logo /> */}
          <span className="text-lg font-bold text-teal-500">DocuManage</span>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex" justify="center">
        <ul className="flex gap-6">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  'text-md font-medium transition-colors',
                  pathname === item.href
                    ? 'text-teal-500'
                    : 'text-gray-200 hover:text-teal-600',
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* desktop */}
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="flex gap-8">
          <Button variant="flat" color="success" className="font-bold">
            Login
          </Button>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* mobile */}
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle />
        {/* <ThemeSwitch /> */}
      </NavbarContent>

      <NavbarMenu className="bg-white shadow-lg">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <NextLink
                className={clsx(
                  'text-lg font-medium  transition-colors',
                  pathname === item.href
                    ? 'text-teal-600'
                    : 'text-gray-800 hover:text-teal-600',
                )}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
          <ThemeSwitch />
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
