import { UnderConstructionandDevelopmentComponent } from '../../../../../../../../../Components';
import { NoSearchResultComponent } from '../../../../../../../../../Components/NoSearchResultComponent/NoSearchResultComponent';
import { AttendanceView } from '../../../../../../../../../Views/Home/Corporate/Company/HumanResources/Attendance/Attendance.View';
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
  }, {
    path: '/human-resources/Attendance',
    name: 'Shared:human-q',
    component: AttendanceView,
    layout: '/home/corporate/company',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: true,
  },
];

