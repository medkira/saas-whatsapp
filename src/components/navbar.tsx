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
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { Button } from '@nextui-org/button';
import NextLink from 'next/link';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  Autocomplete,
  AutocompleteItem,
  input,
  Input,
} from '@nextui-org/react';
import { useDebouncedCallback } from 'use-debounce';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import { SearchIcon, Logo } from '@/components/icons';
import { roboto } from '@/config/fonts';
import { searchMachines } from '@/actions/machines';
import { Machines } from '@/domain/entities/Machines';

export const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const searchButtonRef = useRef<HTMLDivElement>(null);
  const searchButtonRef1 = useRef<HTMLDivElement>(null);

  // const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleClickOutside = (event: any) => {
    // setSearchVisible(false);
    if (
      searchButtonRef.current &&
      !searchButtonRef.current.contains(event.target) &&
      searchButtonRef1.current &&
      !searchButtonRef1.current.contains(event.target)
    ) {
      setSearchVisible(false);
      // if (
      //   searchContainerRef.current &&
      //   !searchContainerRef.current.contains(event.target)
      // ) {
      //   setSearchVisible(false);
      // }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [machines, setMachines] = useState<Machines[]>([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [value, setValue] = useState<string>();

  const handleSearch = useDebouncedCallback(async (value: string) => {
    setValue(value);
    setMachines([]);
    // console.log(value);
    const res = await searchMachines(value);
    // const res = await searchMachines('piks');

    setMachines(res);
    const ref = machines.find(
      (machine) => machine.reference === value.toUpperCase(),
    );

    if (ref) {
      setMachines([ref]);
    }
  }, 300);

  const pressSearchEnter = () => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }

    // params.delete('filter');
    params.delete('marks');
    params.delete('categories');

    replace(`/products/machines/search?${params.toString()}`);

    // replace(`${pathname}?${params.toString()}`);
  };

  const router = useRouter();

  const searchInput = (
    <div
      className={`flex w-[90vw] max-w-2xl items-center
         justify-center rounded-xl shadow-lg`}
    >
      <Autocomplete
        // ref={searchButtonRef as any}
        className="max-w-2xl"
        defaultFilter={() => true}
        // label="Search Machine"
        menuTrigger="input"
        placeholder="Type a machine name"
        value={value}
        onInputChange={handleSearch}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            pressSearchEnter();
            // pressSearchEnter(e.);
          }
        }}
        onSelectionChange={(key) => {
          router.push(`/machines/${key}`);
          setSearchVisible(false);
        }}
      >
        {machines.map((machine) => (
          <AutocompleteItem key={machine.id} className={`${roboto.className} `}>
            <p>
              {' '}
              {machine.name}&nbsp;&nbsp;Ref:{machine.reference}
            </p>
          </AutocompleteItem>
        ))}
      </Autocomplete>
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

      <NavbarContent className="hidden  gap-4 sm:flex" justify="center">
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
            ref={searchButtonRef1 as any}
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
            ref={searchButtonRef as any}
            animate={{ opacity: 1, y: 50 }}
            className="search-input-container  absolute"
            exit={{ opacity: 1, y: -20 }}
            initial={{ opacity: 1, y: -20 }}
          >
            {searchInput}
          </motion.div>
        )}
        <ThemeSwitch />

        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-black/50 backdrop-blur-sm">
        {/* <div>{searchInput}</div> */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                className={clsx(
                  // NextLinkStyles({ color: 'foreground' }),
                  `bg-transparent ${roboto.className} flex items-center justify-center pt-10 text-4xl leading-10`,
                  {
                    'text-[1rem] font-medium text-white':
                      pathname !== item.href,
                    'text-[1rem] font-extrabold text-blue-600 ':
                      pathname === item.href,
                  },
                )}
                href={item.href}
                // size="lg"
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

{
  /* <ThemeSwitch /> */
}
