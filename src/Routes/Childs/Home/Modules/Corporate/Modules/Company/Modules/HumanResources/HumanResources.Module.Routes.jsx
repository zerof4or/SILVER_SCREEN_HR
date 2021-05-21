import { UnderConstructionandDevelopmentComponent } from '../../../../../../../../../Components';
export const HumanResourcesModuleRoutes = [
  {
    path: '/human-resources/test',
    name: 'Shared:human-resources',
    component: UnderConstructionandDevelopmentComponent,
    layout: '/home/corporate/company',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: true,
  },
];
