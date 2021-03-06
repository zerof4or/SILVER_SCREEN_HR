import {
  CoursesView,
  EmployeeView,
  LeavePolicyView,
  RefferralView,
  RequestView,
} from '../../../../../Views';

export const ContactsModuleRoutes = [
  {
    path: '/employee',
    name: 'EmployeeView:employees',
    component: EmployeeView,
    layout: '/home/contacts',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
  {
    path: '/courses',
    name: 'CoursesView:courses',
    component: CoursesView,
    layout: '/home/contacts',
    default: false,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
  {
    path: '/leave-policy',
    name: 'LeavePolicyView:leave-policy',
    component: LeavePolicyView,
    layout: '/home/contacts',
    default: false,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
  {
    path: '/refferral',
    name: 'RefferralView:refferral',
    component: RefferralView,
    layout: '/home/contacts',
    default: false,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
  {
    path: '/request',
    name: 'RequestView:request',
    component: RequestView,
    layout: '/home/contacts',
    default: false,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
];
