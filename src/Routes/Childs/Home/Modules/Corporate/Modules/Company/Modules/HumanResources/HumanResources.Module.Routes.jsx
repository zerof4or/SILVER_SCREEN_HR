import { UnderConstructionandDevelopmentComponent } from '../../../../../../../../../Components';
import { CoursesView } from '../../../../../../../../../Views/Home/Contacts/Courses/Courses.View';
import { RefferralView } from '../../../../../../../../../Views/Home/Contacts/Refferral/Refferral.View';
import { RequestView } from '../../../../../../../../../Views/Home/Contacts/Request/Request.View';
import { ShiftView } from '../../../../../../../../../Views/Home/Contacts/Shift/Shift.View';
import { TeamView } from '../../../../../../../../../Views/Home/Contacts/Team/Team.View';
import { AllPagesView } from '../../../../../../../../../Views/Home/Corporate/Company/HumanResources/AllPages/AllPages.View';
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
    component: AllPagesView,
    layout: '/home/corporate/company',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: true,
  },
  {
    path: '/human-resources/Attendance',
    name: 'Shared:human-q',
    component: AttendanceView,
    layout: '/home/corporate/company',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: true,
  },
  {
    path: '/human-resources/ShiftView',
    name: 'Shared:human-q',
    component: ShiftView,
    layout: '/home/corporate/company',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: true,
  },
  {
    path: '/human-resources/CoursesView',
    name: 'Shared:human-q',
    component: CoursesView,
    layout: '/home/corporate/company',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: true,
  },
  {
    path: '/human-resources/RefferralView',
    name: 'Shared:human-q',
    component: RefferralView,
    layout: '/home/corporate/company',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: true,
  },
  {
    path: '/human-resources/RequestView',
    name: 'Shared:human-q',
    component: RequestView,
    layout: '/home/corporate/company',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: true,
  },
  {
    path: '/human-resources/TeamView',
    name: 'Shared:human-q',
    component: TeamView,
    layout: '/home/corporate/company',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: true,
  },
];
