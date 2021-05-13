import { ContactsMenu, CorporateMenu } from './Modules';

export const HomeMenu = [
  {
    path: '/home/dashboard',
    name: 'Shared:dashboard',
    icon: 'mdi mdi-home',
    isExact: true,
    order: 1,
  },
  {
    path: '/home/contacts',
    name: 'Shared:contacts',
    icon: 'mdi mdi-calendar-account',
    order: 2,
    childrens: ContactsMenu,
  },
  {
    path: '/home/corporate',
    name: 'Shared:company',
    icon: 'mdi mdi-buffer',
    order: 3,
    childrens: CorporateMenu,
  },
  {
    path: '/home/projects',
    name: 'Shared:projects',
    icon: 'mdi mdi-bag-personal',
    order: 4,
    childrens: [],
  },
  {
    externalPath: 'https://www.google.com',
    name: 'Shared:website',
    icon: 'mdi mdi-web',
    order: 5,
    childrens: [],
  },
];
