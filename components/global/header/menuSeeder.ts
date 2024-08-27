interface Props {
    path: string;
    name: string;
}

export const menuSeeder: Array<Props> = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/services',
    name: 'Services'
  },
  {
    path: '/about-us',
    name: 'About Us'
  },
  {
    path: '/blog',
    name: 'Blog'
  }
];