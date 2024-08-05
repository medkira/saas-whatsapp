// app/components/ThemeSwitch.tsx

'use client';

import { FC } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { Switch, SwitchProps, useSwitch } from '@nextui-org/switch';
import { useTheme } from 'next-themes';
import { useIsSSR } from '@react-aria/ssr';
import clsx from 'clsx';
import { SunIcon, MoonIcon } from 'lucide-react'; // Importing icons from 'lucide-react'

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps['classNames'];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === 'dark' || isSSR,
    'aria-label': `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          'transition-opacity hover:opacity-80 cursor-pointer',
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={clsx(
          'flex items-center justify-center rounded-full ',
          // 'bg-gray-200 dark:bg-gray-800',
          'transition-colors',
          classNames?.wrapper,
        )}
      >
        <Switch
          color="success"
          defaultSelected={theme === 'dark'}
          endContent={<MoonIcon className="text-gray-500 dark:text-gray-300" />}
          size="lg"
          startContent={
            <SunIcon className="text-yellow-500 dark:text-yellow-300" />
          }
          onChange={onChange}
        />
      </div>
    </Component>
  );
};
