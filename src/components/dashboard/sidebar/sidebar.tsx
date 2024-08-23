import React from 'react';
import { Avatar, Tooltip } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

import { HomeIcon } from '../icons/sidebar/home-icon';
import { PaymentsIcon } from '../icons/sidebar/payments-icon';
import { BalanceIcon } from '../icons/sidebar/balance-icon';
import { AccountsIcon } from '../icons/sidebar/accounts-icon';
import { ProductsIcon } from '../icons/sidebar/products-icon';
import { ReportsIcon } from '../icons/sidebar/reports-icon';
import { DevIcon } from '../icons/sidebar/dev-icon';
import { ViewIcon } from '../icons/sidebar/view-icon';
import { SettingsIcon } from '../icons/sidebar/settings-icon';
import { FilterIcon } from '../icons/sidebar/filter-icon';
import { useSidebarContext } from '../layout/layout-context';
import { ChangeLogIcon } from '../icons/sidebar/changelog-icon';

import { CollapseItems } from './collapse-items';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { CompaniesDropdown } from './companies-dropdown';
import { Sidebar } from './sidebar.styles';
import WhatsappIcon from '../icons/sidebar/whatsapp-icon';
import AppointmentsIcon from '../icons/sidebar/appointment-icon';
import { UserIcon } from 'lucide-react';
import UsersIcon from '../icons/sidebar/user-icon';
import IconBxsMessageAltDetail from '../icons/sidebar/messages-icon';

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="sticky top-0 z-[20] ">
      {/* {collapsed ? (
        <div className={Sidebar.Overlay()} />
      ) : // onClick={setCollapsed}
      null} */}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>{/* <CompaniesDropdown /> */}</div>
        <div className="flex h-full flex-col  justify-between">
          <div className={Sidebar.Body()}>
            <SidebarItem
              href="/dashboard"
              icon={<HomeIcon />}
              isActive={pathname === '/dashboard'}
              title="Home"
            />
            <SidebarMenu title="Main Menu">
              {/* <SidebarItem
                href="/dashboard/accounts"
                icon={<AccountsIcon />}
                isActive={pathname === '/dashboard/accounts'}
                title="Accounts"
              />
              <SidebarItem
                icon={<PaymentsIcon />}
                isActive={pathname === '/payments'}
                title="Payments"
              />
              <CollapseItems
                icon={<BalanceIcon />}
                items={['Banks Accounts', 'Credit Cards', 'Loans']}
                title="Balances"
              />
             */}
              <SidebarItem
                href="/dashboard/calendar"
                icon={<AppointmentsIcon />}
                isActive={pathname === '/dashboard/calendar'}
                title="Calendar"
              />
              <SidebarItem
                href="/dashboard/appointments"
                icon={<ReportsIcon />}
                isActive={pathname === '/dashboard/appointments'}
                title="Create Appointments"
              />
              <SidebarItem
                href="/dashboard/patients"
                icon={<UsersIcon />}
                isActive={pathname === '/dashboard/patients'}
                title="Patients"
              />
              <SidebarItem
                href="/dashboard/messages"
                icon={<IconBxsMessageAltDetail />}
                isActive={pathname === '/dashboard/messages'}
                title="Messages"
              />

              {/* <SidebarItem
                href="/dashboard/machines"
                icon={<ProductsIcon />}
                isActive={pathname === '/dashboard/machines'}
                title="Machines"
              />
              <SidebarItem
                href="/dashboard/pieces"
                icon={<ProductsIcon />}
                isActive={pathname === '/dashboard/pieces'}
                title="Pièces"
              />
              <SidebarItem
                href="/dashboard/commandes"
                icon={<ReportsIcon />}
                isActive={pathname === '/dashboard/commandes'}
                title="Commandes"
              /> */}
            </SidebarMenu>

            <SidebarMenu title="General">
              <SidebarItem
                href="/dashboard/whatsapp"
                icon={<WhatsappIcon />}
                isActive={pathname === '/dashboard/whatsapp'}
                title="Whats App"
              />
              <SidebarItem
                icon={<DevIcon />}
                isActive={pathname === '/developers'}
                title="Developers"
              />

              {/* <SidebarItem
                icon={<ViewIcon />}
                isActive={pathname === '/view'}
                title="View Test Data"
              /> */}
              {/* <SidebarItem
                icon={<SettingsIcon />}
                isActive={pathname === '/settings'}
                title="Settings"
              /> */}
            </SidebarMenu>

            {/* <SidebarMenu title="Updates">
              <SidebarItem
                icon={<ChangeLogIcon />}
                isActive={pathname === '/changelog'}
                title="Changelog"
              />
            </SidebarMenu> */}
          </div>
          <div className={Sidebar.Footer()}>
            {/* <Tooltip color="primary" content={'Settings'}>
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip color="primary" content={'Adjustments'}>
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip color="primary" content={'Profile'}>
              <Avatar size="sm" src="" />
            </Tooltip> */}
          </div>
        </div>
      </div>
    </aside>
  );
};
