import loadable from '@loadable/component';
const CompanyModule = loadable(() =>
  import('../../../../../Views/Home/Corporate/Company/Company.Module')
);

export const CorporateModuleRoutes = [
  {
    path: '/company',
    name: 'Shared:company',
    component: CompanyModule,
    layout: '/home/corporate',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
];
