import loadable from '@loadable/component';
const AccountsLayout = loadable(() => import('../Layouts/Accounts/Accounts.Layout'));
const HomeLayout = loadable(() => import('../Layouts/Home/Home.Layout'));

export const AppRoutes = [
  {
    path: '/accounts',
    name: 'Accounts',
    component: AccountsLayout,
    layout: '',
    default: true,
    authorize: false,
    roles: [],
    isRoute: true,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeLayout,
    layout: '',
    default: false,
    authorize: true,
    roles: [],
    isRoute: true,
  },
//   {
//     path: '/error',
//     name: 'Error',
//     component: NotFoundLayout,
//     layout: '',
//     default: false,
//     authorize: false,
//     roles: [],
//     showInMenu: false,
//     isRoute: true,
//   },
];
