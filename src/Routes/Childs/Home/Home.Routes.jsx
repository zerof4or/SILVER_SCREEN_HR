import loadable from '@loadable/component';
const ContactsModule = loadable(() => import('../../../Views/Home/Contacts/Contacts.Module'));

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
];
