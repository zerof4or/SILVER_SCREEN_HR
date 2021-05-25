import { UnderConstructionandDevelopmentComponent } from '../../../../../../../../../Components';
import { NoSearchResultComponent } from '../../../../../../../../../Components/NoSearchResultComponent/NoSearchResultComponent';
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
  {
    path: '/human-resources/all-Screen-Systems',
    name: 'Shared:human-q',
    component: NoSearchResultComponent,
    layout: '/home/corporate/company',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: true,
  },
];
