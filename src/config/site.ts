export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'JAKI machines à coudre',
  description: 'Agent tunisien des machines à coudre JAKI',
  navItems: [
    {
      label: 'Accueil',
      href: '/',
    },
    // {
    //   label: 'Docs',
    //   href: '/docs',
    // },
    {
      label: 'Machine a coudre',
      href: '/products/machines/1',
    },
    {
      label: 'Pièce machine a coudre',
      href: '/products/pieces/1',
    },    // {
    //   label: 'Nos Service',
    //   href: '/service',
    // },
    // {
    //   label: 'About',
    //   href: '/about',
    // },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
