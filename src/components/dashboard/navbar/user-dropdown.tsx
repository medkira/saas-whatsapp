import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from '@nextui-org/react';
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { DarkModeSwitch } from './darkmodeswitch';

import { signOut } from '@/app/login/actions';
// import { deleteAuthCookie } from "@/actions/auth.action";

export const UserDropdown = () => {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    // await deleteAuthCookie();
    await signOut();
    router.replace('/login');
  }, [router]);

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar
            as="button"
            color="secondary"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <DropdownItem
          key="profile"
          className="flex w-full flex-col items-start justify-start"
        >
          <p>Signed in as</p>
          <p>admin</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          onPress={handleLogout}
        >
          Log Out
        </DropdownItem>
        <DropdownItem key="switch">
          <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
