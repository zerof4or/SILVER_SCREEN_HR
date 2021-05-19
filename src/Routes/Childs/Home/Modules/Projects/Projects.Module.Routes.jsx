import { UnderConstructionandDevelopmentComponent } from '../../../../../Components/UnderConstructionandDevelopmentComponent/UnderConstructionandDevelopmentComponent';

export const ProjectsModuleRoutes = [
  {
    path: '/projects',
    name: 'projectsView:projects',
    component: UnderConstructionandDevelopmentComponent,
    layout: '/home/projects',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
];
