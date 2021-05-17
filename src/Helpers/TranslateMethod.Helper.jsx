/* eslint-disable max-len */
import i18next from 'i18next';
// Start Layouts Common (Shared)
import SharedEn from '../Assets/I18n/en.json';
import SharedAr from '../Assets/I18n/ar.json';
// End Layouts Common (Shared)
// Start Account Views
import LoginViewEn from '../Views/Accounts/Login/I18n/en.json';
import LoginViewAr from '../Views/Accounts/Login/I18n/ar.json';
// End Account Views

// Start Layouts
import HeaderViewEn from '../Layouts/Home/Sections/Header/I18n/en.json';
import HeaderViewAr from '../Layouts/Home/Sections/Header/I18n/ar.json';
// End Layouts

// Start Home Views
// Start Contacts Module Views
import TeamViewEn from '../Views/Home/Contacts/Team/I18n/en.json';
import TeamViewAr from '../Views/Home/Contacts/Team/I18n/ar.json';
import EmployeeViewEn from '../Views/Home/Contacts/Employee/I18n/en.json';
import EmployeeViewAr from '../Views/Home/Contacts/Employee/I18n/ar.json';
import CoursesViewEn from '../Views/Home/Contacts/Courses/I18n/en.json';
import CoursesViewAr from '../Views/Home/Contacts/Courses/I18n/ar.json';
import RefferralViewEn from '../Views/Home/Contacts/Refferral/I18n/en.json';
import RefferralViewAr from '../Views/Home/Contacts/Refferral/I18n/ar.json';
import LeavePolicyViewEn from '../Views/Home/Contacts/LeavePolicy/I18n/en.json';
import LeavePolicyViewAr from '../Views/Home/Contacts/LeavePolicy/I18n/ar.json';
import RequestViewEn from '../Views/Home/Contacts/Request/I18n/en.json';
import RequestViewAr from '../Views/Home/Contacts/Request/I18n/ar.json';
import ShiftViewEn from '../Views/Home/Contacts/Shift/I18n/en.json';
import ShiftViewAr from '../Views/Home/Contacts/Shift/I18n/ar.json';
// End Contacts Module Views
// End Home Views

import { GlobalRerender } from './Middleware.Helper';

export function localizationInit() {
  i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    fallbackLng: ['en', 'ar'],
    lng: 'en', // language to use
    resources: {
      en: {
        Shared: SharedEn,
        HeaderView: HeaderViewEn,
        LoginView: LoginViewEn,
        TeamView: TeamViewEn,
        EmployeeView: EmployeeViewEn,
        CoursesView: CoursesViewEn,
        RefferralView: RefferralViewEn,
        LeavePolicyView: LeavePolicyViewEn,
        RequestView: RequestViewEn,
        ShiftView: ShiftViewEn,
      },
      ar: {
        Shared: SharedAr,
        HeaderView: HeaderViewAr,
        LoginView: LoginViewAr,
        TeamView: TeamViewAr,
        EmployeeView: EmployeeViewAr,
        CoursesView: CoursesViewAr,
        RefferralView: RefferralViewAr,
        LeavePolicyView: LeavePolicyViewAr,
        RequestView: RequestViewAr,
        ShiftView: ShiftViewAr,
      },
    },
  });

  if (localStorage.getItem('localization')) {
    i18next.changeLanguage(JSON.parse(localStorage.getItem('localization')).currentLanguage);
    const isRtl = JSON.parse(localStorage.getItem('localization')).currentLanguage === 'ar';
    if (isRtl) {
      const direction =
        JSON.parse(localStorage.getItem('localization')).currentLanguage === 'ar' ? 'rtl' : '';
      document.body.setAttribute('class', direction);
      document.body.setAttribute('dir', direction);
      document.documentElement.lang = JSON.parse(
        localStorage.getItem('localization')
      ).currentLanguage;
    }
  } else {
    localStorage.setItem('localization', JSON.stringify({ currentLanguage: 'en', isRtl: false }));
    i18next.changeLanguage('en');
  }
}

export const languageChange = (currentLanguage) => {
  const isRtl = currentLanguage === 'ar';
  const direction = currentLanguage === 'ar' ? 'rtl' : '';
  localStorage.setItem('localization', JSON.stringify({ currentLanguage, isRtl }));
  document.body.setAttribute('class', direction);
  document.body.setAttribute('dir', direction);
  document.documentElement.lang = currentLanguage;
  i18next.changeLanguage(currentLanguage);
  GlobalRerender();
};
localizationInit();
