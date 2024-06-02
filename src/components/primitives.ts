import { tv } from 'tailwind-variants';

export const title = tv({
  base: 'tracking-tight inline font-semibold',
  variants: {
    color: {
      violet: 'from-[#FF1CF7] to-[#b249f8]',
      yellow: 'from-[#FF705B] to-[#FFB457]',
      blue: 'from-[#5EA2EF] to-[#0072F5]',
      cyan: 'from-[#00b7fa] to-[#01cfea]',
      green: 'from-[#6FEE8D] to-[#17c964]',
      pink: 'from-[#FF72E1] to-[#F54C7A]',
      foreground: 'dark:from-[#FFFFFF] dark:to-[#4B4B4B]',
      white: 'text-[#f2f2f2]', // Use text-white instead of a hex color
    },
    size: {
      sm: 'text-4xl md:text-7xl',
      md: 'text-[2.3rem] lg:text-5xl leading-9',
      lg: 'text-[2.8rem] md:text-8xl',
    },
    fullWidth: {
      true: 'w-full block',
    },
  },
  defaultVariants: {
    size: 'lg',
    color: 'white'
  },
  compoundVariants: [
    {
      color: [
        'violet',
        'yellow',
        'blue',
        'cyan',
        'green',
        'pink',
        'foreground'
      ],
      class: 'bg-clip-text text-transparent bg-gradient-to-b',
    },
  ],
});

export const subtitle = tv({
  base: 'w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-1/12',
  variants: {
    fullWidth: {
      true: '!w-full',
    },
    size: {
      sm: ' !w-9/12 font-semibold',
      md: 'text-[2.3rem] lg:text-5xl leading-9',
      lg: 'text-5xl md:text-8xl',
    },
  },
  // defaultVariants: {
  //   fullWidth: true,
  // },
});
