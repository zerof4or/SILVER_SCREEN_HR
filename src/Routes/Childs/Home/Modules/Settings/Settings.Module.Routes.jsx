import { SettingsView } from '../../../../../Views/Home/Settings/SettingsView';
import { BackgroundComponentView } from '../../../../../Views/Home/Settings/SettingsView/SettingsComponentsView/BackgroundComponent/BackgroundComponent.View';
import { LanguagesView } from '../../../../../Views/Home/Settings/SettingsView/SettingsComponentsView/LanguagesComponent/Languages.View';

export const SettingsModuleRoutes = [
  {
    path: '/public-settings',
    name: 'SettingsView:Settings',
    component: SettingsView,
    layout: '/home/settings',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
  {
    path: '/Languages',
    name: 'SettingsView:Settings-Languages',
    component: LanguagesView,
    layout: '/home/settings',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
  {
    path: '/BackgroundSettings',
    name: 'SettingsView:Settings-Languages',
    component: BackgroundComponentView,
    layout: '/home/settings',
    default: true,
    isRoute: true,
    authorize: true,
    isExact: false,
  },
];
