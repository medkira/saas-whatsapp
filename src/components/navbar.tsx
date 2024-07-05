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
import { Button } from '@nextui-org/button';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from '@/components/icons';
import { useEffect, useRef, useState } from 'react';

export const Navbar = () => {
  const pathname = usePathname();

  const [isSearchVisible, setSearchVisible] = useState(false);
  const searchButtonRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleClickOutside = (event: any) => {
    if (
      searchButtonRef.current &&
      !searchButtonRef.current.contains(event.target)
    ) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setSearchVisible(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const searchInput = (
    <div
      ref={searchContainerRef as any}
      className=" w-[90vw] rounded-xl shadow-lg sm:w-[60vw] "
    >
      <Input
        ref={searchButtonRef as any}
        aria-label="Search"
        // className="bg-black "
        classNames={{
          inputWrapper: 'bg-default-100 ',
          input: 'text-xl',
        }}
        // endContent={
        //   <Kbd className="hidden lg:inline-block" keys={['command']}>
        //     K
        //   </Kbd>
        // }
        // labelPlacement="outside"
        placeholder="Recherche..."
        startContent={
          <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
        }
        type="search"
      />
    </div>
  );

  return (
    <NextUINavbar
      className="bg-transparent"
      isBlurred={false}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarBrand as="li">
        <NextLink
          className="flex w-[20vw] items-center justify-center gap-2 "
          href="/"
        >
          <Logo />
          {/* <p className="pt-1 text-sm font-extrabold md:text-xl">Total Tech</p> */}
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <ul className=" hidden justify-start gap-6 sm:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  // linkStyles({ color: 'foreground' }),
                  '',
                  {
                    'text-[1rem] font-thin': pathname !== item.href,
                    'text-[1rem] font-bold  text-blue-600':
                      pathname === item.href,
                  },
                )}
                // color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        {isSearchVisible && (
          <motion.div
            // ref={searchButtonRef as any}
            animate={{ opacity: 1, y: 50 }}
            className="search-input-container  absolute"
            exit={{ opacity: 1, y: -20 }}
            initial={{ opacity: 1, y: -20 }}
          >
            {searchInput}
          </motion.div>
        )}
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          {/* <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link> */}
          {/* <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link> */}
          {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link> */}

          <ThemeSwitch />
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NavbarItem className="hidden md:flex">
          <Button
            // ref={searchButtonRef as any}
            className="flex items-center justify-center gap-3"
            onClick={handleSearchClick}
          >
            <SearchIcon className="flex cursor-pointer text-default-500" />
            <h1 className="font-bold">Recherche</h1>
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* for mobile  */}

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        <Button
          // ref={searchButtonRef as any}
          className="flex items-center justify-center gap-3"
          onClick={handleSearchClick}
        >
          <SearchIcon className="flex cursor-pointer text-default-500" />
          <h1 className="font-bold">Recherche</h1>
        </Button>
        {isSearchVisible && (
          <motion.div
            // ref={searchButtonRef as any}
            animate={{ opacity: 1, y: 50 }}
            className="search-input-container  absolute"
            exit={{ opacity: 1, y: -20 }}
            initial={{ opacity: 1, y: -20 }}
          >
            {searchInput}
          </motion.div>
        )}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-black/50 backdrop-blur-sm">
        {/* <div>{searchInput}</div> */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))} */}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

{
  /* <ThemeSwitch /> */
}
