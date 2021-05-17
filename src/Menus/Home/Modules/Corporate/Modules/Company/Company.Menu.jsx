import { HumanResourcesMenu } from './Modules';

export const CompanyMenu = [
  {
    path: '/home/corporate/company/administration',
    name: 'Shared:administration',
    icon: 'mdi mdi-account',
    order: 1,
    isLastChildrenInMainMenu: true,
    childrens: [],
  },
  {
    path: '/home/corporate/company/human-resources',
    name: 'Shared:human-resources',
    icon: 'mdi mdi-account-multiple',
    order: 2,
    isLastChildrenInMainMenu: true,
    childrens: HumanResourcesMenu,
  },
  {
    path: '/home/corporate/company/finance',
    name: 'Shared:finance',
    icon: 'mdi mdi-account-multiple',
    order: 3,
    isLastChildrenInMainMenu: true,
    childrens: [],
  },
  {
    path: '/home/corporate/company/procurement',
    name: 'Shared:procurement',
    icon: 'mdi mdi-account-multiple',
    order: 4,
    isLastChildrenInMainMenu: true,
    childrens: [],
  },
  {
    path: '/home/corporate/company/legal',
    name: 'Shared:legal',
    icon: 'mdi mdi-account-multiple',
    order: 5,
    isLastChildrenInMainMenu: true,
    childrens: [],
  },
];
