import React from 'react';
import { useSidebarContext } from '../layout/layout-context';
import { StyledBurgerButton } from './navbar.styles';

export const BurguerButton = () => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <button
      className={StyledBurgerButton()}
      // open={collapsed}
      onClick={setCollapsed}
    >
      <div />
      <div />
    </button>
  );
};
