import loadable from '@loadable/component';
const ContactsModule = loadable(() => import('../../../Views/Home/Contacts/Contacts.Module'));
const CorporateModule = loadable(() => import('../../../Views/Home/Corporate/Corporate.Module'));

export const HomeRoutes = [
  {
    id: 1,
    path: '/contacts',
    name: 'Shared:contacts',
    component: ContactsModule,
    layout: '/home',
    default: true,
    isRoute: true,
    authorize: true,
    isDisabled: false,
    isExact: false,
  },
  {
    id: 2,
    path: '/home/corporate',
    name: 'Shared:corporate',
    component: CorporateModule,
    layout: '/home',
    default: false,
    isRoute: true,
    authorize: true,
    isDisabled: false,
    isExact: false,
  },
];
