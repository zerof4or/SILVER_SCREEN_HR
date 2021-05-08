import loadable from '@loadable/component';
const AdministrationModule = loadable(() =>
  import('../../../../../../../Views/Home/Corporate/Company/Administration/Administration.Module')
);
const HumanResourcesModule = loadable(() =>
  import('../../../../../../../Views/Home/Corporate/Company/HumanResources/HumanResources.Module')
);
export const CompanyModuleRoutes = [
  {
    path: '/administration',
    name: 'Shared:administration',
    component: AdministrationModule,
    layout: '/home/corporate/company',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
  {
    path: '/human-resources',
    name: 'Shared:human-resources',
    component: HumanResourcesModule,
    layout: '/home/corporate/company',
    default: false,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
];
